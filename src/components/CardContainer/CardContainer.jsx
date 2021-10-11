import React, { useContext } from "react";
import { Context } from "../../context/context";
import { Card } from "./Card";


export const CardContainer = ({ cards, indexBoard, showModal }) => {

  const {state, setState} = useContext(Context)

  const changHandler = (inputName, indexBoard, indexCard, event) => {
    if (inputName === 'subTaskDescription') {
      const stateCopy = [...state]
      stateCopy[indexBoard].cards[indexCard].valueNewSubTask = event.target.value
      setState(stateCopy)
    }
  }


  // что-бы не плодить кучу обработчиков, решил сделать один 
  const clickHandler = (clickName, indexBoard, indexCard, indexSubTask, event) => {
    event.preventDefault()

    const stateCopy = [...state]

    switch (clickName) {
      case 'openListSubTask':
        stateCopy[indexBoard].cards[indexCard].openSubTask = !stateCopy[indexBoard].cards[indexCard].openSubTask
        setState(stateCopy)
        // fetched
        break

      case 'statusCard':
        stateCopy[indexBoard].cards[indexCard].status = !stateCopy[indexBoard].cards[indexCard].status
        setState(stateCopy)
        // fetched
        break

      case 'statusSubTask':
        stateCopy[indexBoard].cards[indexCard].listSubTask[indexSubTask].status = !stateCopy[indexBoard].cards[indexCard].listSubTask[indexSubTask].status
        setState(stateCopy)
        // fetched
        break

      case 'addSubTaskDescription':
        stateCopy[indexBoard].cards[indexCard].listSubTask.push({
          status: false,
          description: stateCopy[indexBoard].cards[indexCard].valueNewSubTask
        })
        stateCopy[indexBoard].cards[indexCard].valueNewSubTask = ''
        setState(stateCopy)
        // fetched
        break
      case 'playTime':
        stateCopy[indexBoard].cards[indexCard].palyTime = !stateCopy[indexBoard].cards[indexCard].palyTime
        setState(stateCopy)
        break
      default:
        break
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