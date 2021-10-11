// дефолтное состояние для первой загрузки проекта

const initialState = 
[
  {
    boardName: 'board1',
    title: 'Нужно сделать',
    cards: [
      {
        id: "1",
        status: true,
        index: 11,
        title: 'title',
        plannedTime: 'Planed Time',
        passedTime: 'Passed Time',
        deadline: '12 декабря',
        palyTime: true,
        description: 'Описанине задачи',
        listSubTask: [
          {
            status: false,
            description: 'Информация о подзадаче'
          },
          {
            status: true,
            description: 'Одуванчик'
          }
        ],
        valueNewSubTask: '',
        openSubTask: false
      },
      {
        id: "15",
        status: true,
        index: 11,
        title: 'понять правило',
        plannedTime: 'Planed Time',
        passedTime: 'Passed Time',
        deadline: '12 декабря',
        palyTime: true,
        description: '',
        listSubTask: [],
        openSubTask: false
      }
    ]
  },
  {
    boardName: 'board2',
    title: 'на рассмотрении',
    cards: [
      {
        id: "2",
        status: true,
        index: 11,
        title: 'title',
        plannedTime: 'Planed Time',
        passedTime: 'Passed Time',
        deadline: '12 декабря',
        palyTime: true,
        description: '',
        listSubTask: [
          {
            status: false,
            description: 'Информация о подзадаче'
          },
          {
            status: true,
            description: 'Одуванчик'
          }
        ],
        valueNewSybtask: '',
        openSubTask: true
      }
    ]
  }
]


// получение данных проекта
export const getTaskData = (nameTask) => {
  if (localStorage.getItem(nameTask) !== null) {
    return JSON.parse(localStorage.getItem(nameTask))
  } else {
    localStorage.setItem(nameTask, JSON.stringify(initialState))
    return initialState
  }
}

// запись состояния для конкретного проекта
export const changeTaskData = (nameTask, data) => {
  localStorage.setItem(nameTask, JSON.stringify(data))
}