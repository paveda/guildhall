export const fetchNoteById = async (id) => {
  return Promise.resolve({
    id,
    title: 'Note title',
    body: 'Lorem ipsum dolar sit emet'
  })
}
