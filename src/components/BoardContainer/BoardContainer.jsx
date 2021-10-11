import React, { useContext, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Context } from "../../context/context";
import { Modal } from "../Modal/Modal";
import add from '../../img/add.png'
import { Board } from "./Board";

export const BoardContainer = ({ onDragEnd }) => {

  const { state, setState } = useContext(Context)

  const [modal, setmodal] = useState(false)
  const [modalOption, setModalOption] = useState({ indexBoard: 0, indexCard: 0 })

  // меняем карточки если перемещение было только внутри доски
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list.cards);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // меняем карточки если перемещение было между разными досками
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source.cards);
    const destClone = Array.from(destination.cards);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  // функция onDragEnd вызывается если было любое перемещение
  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd].cards = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd].cards = result[sInd];
      newState[dInd].cards = result[dInd];
      setState(newState);
    }
  }

  // добавление новой доски
  const addBoard = () => {
    const copyState = [...state]
    copyState.push({
      boardName: 'board3',
      title: 'Новый столбец',
      cards: []
    })
    setState(copyState)
  }


  // showModal открывает модальное окно и меняет данные пути карточки для его открытия
  const showModal = (indexBoard, indexCard, event) => {
    event.preventDefault()
    setmodal(true)
    setModalOption({ indexBoard, indexCard })
  }

  // закрываем модальное окно
  const closeModal = (event) => {
    event.preventDefault()
    setmodal(false)
  }

  return (
    <div className="row position-relative d-flex">
      <DragDropContext onDragEnd={onDragEnd}>
        {!!state.length && state.map((board, indexBoard) => (
          <Board board={board} indexBoard={indexBoard} />
        ))}
      </DragDropContext>
      <div className="board rounded m-2 col bg-white">
        <a onClick={addBoard} href="#"><img src={add} alt="" /> Добавить столбец</a>
      </div>
      {modal && <Modal state={state} modal={modal} modalOption={modalOption} showModal={showModal} closeModal={closeModal} />}
    </div>
  )
}