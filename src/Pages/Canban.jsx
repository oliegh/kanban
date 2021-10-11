import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { BoardContainer } from "../components/BoardContainer/BoardContainer"
import { Context } from "../context/context"


export const Canban = () => {

  // парсим адресную строку, считываем ключ taskName
  const naskName = useParams().taskName
  const { setTaskName } = useContext(Context)

  // обновлем состояние при каждом переходе на новый проект
  useEffect(() => {
    setTaskName(naskName)
  }, [naskName])

  return (
    <BoardContainer />
  )
}