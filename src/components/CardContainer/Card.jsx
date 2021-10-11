import React from "react";
import { Draggable } from "react-beautiful-dnd";
import notCompleted from '../../img/not_completed.png'
import completed from '../../img/completed.png'
import burger from '../../img/burger.png'
import user from '../../img/user.png'
import scheme from '../../img/scheme.png'
import play from '../../img/Play.png'
import pause from '../../img/pause.png'
import add from '../../img/add.png'

export const Card = ({ card, indexBoard, indexCard, clickHandler, changHandler, showModal }) => {

  return (
    <Draggable
      key={card.id}
      draggableId={card.id}
      index={indexCard}
    >
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="card mt-2 mb-2">
          <div className="card_status-bar d-flex">
            <a className="card-status" onClick={event => clickHandler('statusCard', indexBoard, indexCard, null, event)} href="#" >
              <img src={
                card.status
                  ?
                  completed
                  :
                  notCompleted
              } alt="" />
            </a>
            <span className="card-title w-100">{`${card.title}`}</span>
            <a
              onClick={event => showModal(indexBoard, indexCard, event)}
              href="#"
            ><img className="ms-1" src={burger} alt="" /></a>
          </div>
          <div className="card-body p-0">
            <div className="card-additional">
              <span>
                <img src={user} alt="" />
              </span>
              <span className="card-watch ">
                <span>{card.passedTime} / {card.plannedTime}</span><br />
                <span>
                  до {card.deadline}
                </span>
              </span>

              <div className="d-flex align-items-center">
                {!!card.listSubTask.length
                  &&
                  <div>
                    <a className={card.openSubTask ? 'card-scheme card-scheme-border d-flex' : 'card-scheme d-flex'} onClick={event => clickHandler('openListSubTask', indexBoard, indexCard, null, event)} href="#" >
                      <span>{card.listSubTask.length}</span>
                      <span><img className="ms-1" src={scheme} alt="" /></span>
                    </a>
                  </div>
                }
                <a onClick={event => clickHandler('playTime', indexBoard, indexCard, null, event)} href="#">
                  <img className="ms-1" src={
                    card.palyTime
                      ?
                      play
                      :
                      pause
                  } alt="" />
                </a>
              </div>

            </div>
            {card.openSubTask &&
              <>
                <ul className="list-subtask p-0 mt-2">
                  {
                    card.listSubTask.map((subTask, indexSubTask) => (
                      <li key={indexSubTask}>
                        <a onClick={event => clickHandler('statusSubTask', indexBoard, indexCard, indexSubTask, event)} href="#">
                          <img src={subTask.status ? completed : notCompleted} alt="" />
                        </a>
                        <div className="w-100 ps-1"><span>{subTask.description}</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                    ))
                  }
                </ul>
                <input className="w-100" onChange={event => changHandler('subTaskDescription', indexBoard, indexCard, event)} value={card.valueNewSubTask} type="text" /><br />
                <a onClick={event => clickHandler('addSubTaskDescription', indexBoard, indexCard, null, event)} href="#"><img src={add} alt="" /> Добавить задачу</a>
              </>
            }
          </div>
        </div>
      )}
    </Draggable>

  )
}