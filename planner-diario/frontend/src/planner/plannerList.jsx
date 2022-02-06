import React, { Component } from "react";
import IconButton from "../template/iconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((tarefa) => (
      <tr key={tarefa._id}>
        <td className={tarefa.done ? "markedAsDone" : ""}>
          {tarefa.description}
        </td>
        <td>
          <IconButton
            btnStyle="success"
            icon="check"
            hide={tarefa.done}
            onclick={() => props.handleMarkAsDone(tarefa)}
          ></IconButton>

          <IconButton
            btnStyle="warning"
            icon="undo"
            hide={!tarefa.done}
            onclick={() => props.handleMarkAsPending(tarefa)}
          ></IconButton>

          <IconButton
            btnStyle="danger"
            icon="trash-o"
            hide={!tarefa.done}
            onclick={() => props.handleRemove(tarefa)}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
