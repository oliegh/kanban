import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { CardContainer } from "../CardContainer/CardContainer";
import append from '../../img/appends.png'
import context from '../../img/context.png'

export const Board = ({ board, indexBoard, state, setState, showModal, clickHandler }) => {

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "#F2F5FA",
    minHeight: '400px',
    padding: 8,
  });

  return (
    <div className="board rounded m-2 col">
      <div className="board-head d-flex">
        <h5>{board.title}</h5>
        <div className="d-flex align-items-center me-1" href="#">
          <a onClick={event => clickHandler('addCard', indexBoard, null, null, event)} href="#">
            <img src={append} alt="" />
          </a>
          <a href="#">
            <img src={context} alt="" />
          </a>
        </div>
      </div>
      <div className="card-container">
        <Droppable key={indexBoard} droppableId={`${indexBoard}`}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              <CardContainer state={state} setState={setState} cards={board.cards} indexBoard={indexBoard} showModal={showModal} clickHandler={clickHandler} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}