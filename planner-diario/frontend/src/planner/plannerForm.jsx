import React, { Component } from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="plannerForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onKeyUp={keyHandler}
          value={props.description}
          onChange={props.handleChange}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          btnStyle="primary"
          icon="plus"
          onclick={props.handleAdd}
        ></IconButton>

        <IconButton
          btnStyle="info"
          icon="search"
          onclick={props.handleSearch}
        ></IconButton>

        <IconButton
          btnStyle="default"
          icon="close"
          onclick={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
};
