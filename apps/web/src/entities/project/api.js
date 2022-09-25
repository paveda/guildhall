export const fetchProjectList = async () => {
  return Promise.resolve([
    { id: '123', name: 'Project 1' },
    { id: '124', name: 'Project 2' },
    { id: '125', name: 'Project 3' },
    { id: '126', name: 'Project 4' },
    { id: '127', name: 'Project 5' },
    { id: '128', name: 'Project 6' },
    { id: '129', name: 'Project 7' },
  ])
}

export const fetchProjectById = async (id) => {
  return Promise.resolve({
    id,
    name: 'Project Name',
    board: [
      {
        title: 'todo',
        items: [
          { id: '1', text: 'todo 1', done: false },
          { id: '2', text: 'todo 2', done: false },
          { id: '3', text: 'todo 3', done: true },
          { id: '4', text: 'todo 4', done: false },
        ]
      },
      {
        title: 'in progres',
        items: [
          { id: '5', text: 'todo 5', done: false },
          { id: '6', text: 'todo 6', done: false },
          { id: '7', text: 'todo 7', done: true },
          { id: '8', text: 'todo 8', done: false },
        ]
      },
      {
        title: 'done',
        items: [
          { id: '9', text: 'todo 9', done: false },
          { id: '10', text: 'todo 10', done: true },
          { id: '11', text: 'todo 11', done: false },
        ]
      }
    ]
  })
}
