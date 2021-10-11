import { NavLink } from "react-router-dom"


export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h3>Captain</h3>
      </div>
      <nav>
        <span>Избранные</span>
        <ul className="p-0">
          <li><NavLink to="/task/canban/electrical-goods">Электротовары</NavLink></li>
          <li><NavLink to="/task/canban/leshozsnab">Лесхозснаб</NavLink></li>
          <li><NavLink to="/task/canban/dishes-city">Посуда-Сити</NavLink></li>
          <li><NavLink to="/task/canban/driving-school-autolice">Автошкола “Автолицей”</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}