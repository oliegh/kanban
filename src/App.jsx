import './App.css';
import notReady from './img/not_ready.png'
import burger from './img/burger.png'
import user from './img/user.png'
import scheme from './img/scheme.png'
import pause from './img/pause.png'
import add from './img/add.png'



function App() {


  const [boards, setBoards] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ])


  return (
    <div className="container-fluid">

      <div className="d-flex pt-3">
        <nav className="sidebar">
          sidebar
        </nav>
        <main className="main rounded">
          <div className="row">
            {
              boards.map(board => {

              })
            }
            <div className="board rounded m-2 col">
              <h3>Нужно сделать</h3>
              <div className="card-container">





                <div className="card mt-2 mb-2">
                  <div className="card_status-bar d-flex">
                    <a href="#" className="card-status"><img src={notReady} alt="" /></a>
                    <a href="#" className="card-title">Разработать новый чекаут для Юр. Лиц.</a>
                    <a href="#"><img className="ms-1" src={burger} alt="" /></a>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-additional">
                      <span>
                        <img src={user} alt="" />
                      </span>
                      <span className="card-watch ">
                        <span>20 ч. / 54 ч.</span><br />
                        <span>
                          до 15 марта
                        </span>
                      </span>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="card-scheme d-flex">
                            <span>2</span>
                            <span><img src={scheme} alt="" /></span>
                          </div>
                        </div>
                        <span>
                          <img src={pause} alt="" />
                        </span>
                      </div>
                    </div>
                    <ul className="list-subtask p-0 mt-2">
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                    </ul>
                    <input type="text" /><br />
                    <a href="#"><img src={add} alt="" /> Добавить задачу</a>
                  </div>

                </div><div className="card mt-2 mb-2">
                  <div className="card_status-bar d-flex">
                    <a href="#" className="card-status"><img src={notReady} alt="" /></a>
                    <a href="#" className="card-title">Разработать новый чекаут для Юр. Лиц.</a>
                    <a href="#"><img className="ms-1" src={burger} alt="" /></a>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-additional">
                      <span>
                        <img src={user} alt="" />
                      </span>
                      <span className="card-watch ">
                        <span>20 ч. / 54 ч.</span><br />
                        <span>
                          до 15 марта
                        </span>
                      </span>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="card-scheme d-flex">
                            <span>2</span>
                            <span><img src={scheme} alt="" /></span>
                          </div>
                        </div>
                        <span>
                          <img src={pause} alt="" />
                        </span>
                      </div>
                    </div>
                    <ul className="list-subtask p-0 mt-2">
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                    </ul>
                    <input type="text" /><br />
                    <a href="#"><img src={add} alt="" /> Добавить задачу</a>
                  </div>

                </div>
              </div>
            </div>
            <div className="board rounded m-2 col">
              <h3>Нужно сделать</h3>
              <div className="card-container">

                <div className="card mt-2 mb-2">
                  <div className="card_status-bar d-flex">
                    <a href="#" className="card-status"><img src={notReady} alt="" /></a>
                    <a href="#" className="card-title">Разработать новый чекаут для Юр. Лиц.</a>
                    <a href="#"><img className="ms-1" src={burger} alt="" /></a>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-additional">
                      <span>
                        <img src={user} alt="" />
                      </span>
                      <span className="card-watch ">
                        <span>20 ч. / 54 ч.</span><br />
                        <span>
                          до 15 марта
                        </span>
                      </span>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="card-scheme d-flex">
                            <span>2</span>
                            <span><img src={scheme} alt="" /></span>
                          </div>
                        </div>
                        <span>
                          <img src={pause} alt="" />
                        </span>
                      </div>
                    </div>
                    <ul className="list-subtask p-0 mt-2">
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                    </ul>
                    <input type="text" /><br />
                    <a href="#"><img src={add} alt="" /> Добавить задачу</a>
                  </div>

                </div><div className="card mt-2 mb-2">
                  <div className="card_status-bar d-flex">
                    <a href="#" className="card-status"><img src={notReady} alt="" /></a>
                    <a href="#" className="card-title">Разработать новый чекаут для Юр. Лиц.</a>
                    <a href="#"><img className="ms-1" src={burger} alt="" /></a>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-additional">
                      <span>
                        <img src={user} alt="" />
                      </span>
                      <span className="card-watch ">
                        <span>20 ч. / 54 ч.</span><br />
                        <span>
                          до 15 марта
                        </span>
                      </span>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="card-scheme d-flex">
                            <span>2</span>
                            <span><img src={scheme} alt="" /></span>
                          </div>
                        </div>
                        <span>
                          <img src={pause} alt="" />
                        </span>
                      </div>
                    </div>
                    <ul className="list-subtask p-0 mt-2">
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src={notReady} alt="" />
                        </span>
                        <div className="w-100 ps-1"><span>Cупер работа gdfgdfgdffsdfdsfdsdsfdsfsdf</span></div>
                        <span className="float-right">
                          <img src={user} alt="" />
                        </span>
                      </li>
                    </ul>
                    <input type="text" /><br />
                    <a href="#"><img src={add} alt="" /> Добавить задачу</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="board rounded m-2 col">
              <h3>Нужно сделать</h3>
            </div>
            <div className="board rounded m-2 col">
              <h3>Нужно сделать</h3>
            </div>
            <div className="board rounded m-2 col">
              <h3>Нужно сделать</h3>
            </div>
            <div className="board rounded m-2 col">
              <h3>Нужно сделать</h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
