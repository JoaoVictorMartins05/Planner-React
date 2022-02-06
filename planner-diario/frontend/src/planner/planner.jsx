import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import PlannerForm from "./plannerForm";
import PlannerList from "./plannerList";

const URL = "http://localhost:3000/api/planner";

export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";

    axios
      .get(`${URL}?sort=createdAt${search}`)
      .then((resp) =>
        this.setState({ ...this.state, description, list: resp.data })
      );
  }

  handleRemove(tarefa) {
    axios
      .delete(`${URL}/${tarefa._id}`)
      .then((resp) => this.refresh(this.state.description));
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp) => this.refresh());
  }

  handleMarkAsPending(tarefa) {
    axios
      .put(`${URL}/${tarefa._id}`, { ...tarefa, done: false })
      .then((resp) => this.refresh(this.state.description));
  }

  handleMarkAsDone(tarefa) {
    axios
      .put(`${URL}/${tarefa._id}`, { ...tarefa, done: true })
      .then((resp) => this.refresh(this.state.description));
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <PlannerForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          handleChange={this.handleChange}
        />
        <PlannerList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
