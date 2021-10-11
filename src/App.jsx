import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { Context } from "./context/context";
import { changeTaskData, getTaskData } from "./localStorage/localStorage"
import { Canban } from "./Pages/Canban";


function App() {

  // state хранит состояние всех досок и карточек одного проекта
  const [state, setState] = useState([])

  // taskName хранит состояние текущего проекта 
  const [taskName, setTaskName] = useState(null)

  useEffect(() => {
    // как только изменится выбранный проект, из localStorage подгрузится новое состояние
    setState(getTaskData(taskName))
  }, [taskName])

  useEffect(() => {
    // при каждом изменении state, state сохраняется в localStorage
    changeTaskData(taskName, state)
  }, [state])

  return (
    <Context.Provider value={{ state, setState, taskName, setTaskName, getTaskData }}>
      <Router>
        <div className="container-fluid">
          <div className="d-flex pt-3">
            <Sidebar />
            <main className="main rounded">
              <Switch>
                <Route path="/task/canban/:taskName" >
                  <Canban />
                </Route>
                <Redirect to="/task/canban/electrical-goods" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </Context.Provider>
  )
}

export default App