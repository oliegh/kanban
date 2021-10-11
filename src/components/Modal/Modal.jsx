import play2 from '../../img/play_v2.png'
import imgOk from '../../img/ok.png'
import imgCopy from '../../img/copy.png'
import imgDate from '../../img/date_image.png'
import rollUp from '../../img/rollUp.png'
import user from '../../img/user.png'
import user2 from '../../img/new_user.png'
import add from '../../img/add.png'
import notCompleted from '../../img/not_completed.png'
import completed from '../../img/completed.png'


export const Modal = ({ state, modalOption, showModal, closeModal }) => {

  const card = state[modalOption.indexBoard].cards[modalOption.indexCard]

  return (
    <div className="modal-card">
      <div className="modal-header">
        <div>
          <a className="btn-work-task rounded-3" href="#">
            <img src={play2} alt="" />
            <span className="ms-1">Работать над задачей</span>
          </a>
          <span className="ms-3">
            {card.passedTime} / {card.plannedTime}
          </span>
        </div>
        <div>
          <a className=" btn-work-task btn-work-task-complete rounded-3" href="#">
            <img src={imgOk} alt="" />
            <span className="ms-1 text-white">Завершить задачу</span>
          </a>
          <img className="ms-2" src={imgCopy} alt="" />
          <a onClick={closeModal} href="#"><img className="ms-2" src={rollUp} alt="" /></a>
        </div>
      </div>
      <div className="modal-body">
        <h3>Заголовок карточки</h3>
      </div>
      <table className="modal-table w-100">
        <tr>
          <td>Исполнитель</td>
          <td><img className="me-1" src={user} alt="" />Фамилия Имя</td>
        </tr>
        <tr>
          <td>Даты</td>
          <td><img className="me-1" src={imgDate} alt="" />Нет даты</td>
        </tr>
        <tr>
          <td>Проект</td>
          <td>Добавить проект</td>
        </tr>
        <tr>
          <td>Описание</td>
          <td className="w-100"><textarea className="w-100 rounded-3" placeholder="Добавьте описание к этой задаче..." rows="2"></textarea></td>
        </tr>
      </table>
      <p>Подзадачи</p>
      <ul className="list-subtask p-0">
        <li>
          <span>
            <img className="me-3" src={notCompleted} alt="" />
            Перенести пользователей в новую БД
          </span>
          <span>
            <img className="ms-2" src={imgDate} alt="" />
            <img className="ms-2" src={user2} alt="" />
          </span>
        </li>
        <li>
          <span>
            <img className="me-3" src={notCompleted} alt="" />
            Перенести пользователей в новую БД
          </span>
          <span>
            <img className="ms-2" src={imgDate} alt="" />
            <img className="ms-2" src={user2} alt="" />
          </span>
        </li>
      </ul>
      <a href="#"><img src={add} alt="" /> Добавить задачу</a>

      <ul className="list-comments p-0 mt-5">
        <li className="d-flex align-items-center">
          <span className="me-2">
            <img src={user} alt="" />
          </span>
          <div className="w-100">
            <div>
              <b>Nick Khaetsky</b> <span className="ms-2">25 минут назад</span>
            </div>
            <div className="modal-comments">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas sit veritatis quasi voluptate, harum voluptatum rem dolor, eaque saepe, mollitia ipsam perferendis eos ab molestias voluptates enim ut tenetur!</p>
            </div>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <span className="me-2">
            <img src={user} alt="" />
          </span>
          <div className="w-100">
            <div>
              <b>Nick Khaetsky</b> <span className="ms-2">25 минут назад</span>
            </div>
            <div className="modal-comments">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas sit veritatis quasi voluptate, harum voluptatum rem dolor, eaque saepe, mollitia ipsam perferendis eos ab molestias voluptates enim ut tenetur!</p>
            </div>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <span className="me-2">
            <img src={user} alt="" />
          </span>
          <div className="w-100">
            <div>
              <b>Nick Khaetsky</b> <span className="ms-2">25 минут назад</span>
            </div>
            <div className="modal-comments">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas sit veritatis quasi voluptate, harum voluptatum rem dolor, eaque saepe, mollitia ipsam perferendis eos ab molestias voluptates enim ut tenetur!</p>
            </div>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <span className="me-2">
            <img src={user} alt="" />
          </span>
          <div className="w-100">
            <div>
              <b>Nick Khaetsky</b> <span className="ms-2">25 минут назад</span>
            </div>
            <div className="modal-comments">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas sit veritatis quasi voluptate, harum voluptatum rem dolor, eaque saepe, mollitia ipsam perferendis eos ab molestias voluptates enim ut tenetur!</p>
            </div>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <span className="me-2">
            <img src={user} alt="" />
          </span>
          <div className="w-100">
            <div>
              <b>Nick Khaetsky</b> <span className="ms-2">25 минут назад</span>
            </div>
            <div className="modal-comments">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas sit veritatis quasi voluptate, harum voluptatum rem dolor, eaque saepe, mollitia ipsam perferendis eos ab molestias voluptates enim ut tenetur!</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="d-flex">
        <span className="me-2">
          <img src={user} alt="" />
        </span>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button class ="btn btn-outline-secondary" type ="button" id="button-addon2">Button</button>
        </div>
      </div>
    </div>
  )
}