import React, { useContext } from "react";
import { Context } from "../../context/context";
import { Card } from "./Card";


export const CardContainer = ({ cards, indexBoard, showModal, clickHandler }) => {

  const {state, setState} = useContext(Context)

  const changHandler = (inputName, indexBoard, indexCard, event) => {
    if (inputName === 'subTaskDescription') {
      const stateCopy = [...state]
      stateCopy[indexBoard].cards[indexCard].valueNewSubTask = event.target.value
      setState(stateCopy)
    }
  }

  return (
    <>
      {
        cards.map((card, indexCard) => (
          <Card card={card} indexCard={indexCard} indexBoard={indexBoard} clickHandler={clickHandler} changHandler={changHandler} showModal={showModal} />
        ))
      }
    </>
  )
}