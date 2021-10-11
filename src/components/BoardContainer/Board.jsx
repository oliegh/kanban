import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { CardContainer } from "../CardContainer/CardContainer";


export const Board = ({ board, indexBoard, state, setState, showModal }) => {

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "#F2F5FA",
    padding: 8,
  });

  return (
    <div className="board rounded m-2 col">
      <div className="board-head">
        <h4>{board.title}</h4>
        <div className="d-flex align-items-center me-1" href="#"><a>+</a><a href="">...</a></div>
      </div>
      <div className="card-container">
        <Droppable key={indexBoard} droppableId={`${indexBoard}`}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              <CardContainer state={state} setState={setState} cards={board.cards} indexBoard={indexBoard} showModal={showModal} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}