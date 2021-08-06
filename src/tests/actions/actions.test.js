import { createBlog, deleteBlog } from '../../actions/blogs'
import { createEntry, deleteEntry } from '../../actions/entries'
import blogs from '../fixtures/blogs'

//First testing blog actions

test('should create blog with input data', () => {
  const inputData = {
    title: 'testing1',
    content: 'testing2',
    createdAt: 0,
  }
  const result = createBlog(inputData)
  expect(result).toEqual({
    type: 'CREATE_BLOG',
    blog: {
      ...inputData,
      id: expect.any(String),
      entries: [],
    },
  })
})

test('should add expense with default data.', () => {
  const result = createBlog()
  expect(result).toEqual({
    type: 'CREATE_BLOG',
    blog: {
      title: '',
      content: '',
      createdAt: 0,
      id: expect.any(String),
      entries: [],
    },
  })
})

test('should setup delete action object', () => {
  const action = deleteBlog(2)
  expect(action).toEqual({
    type: 'DELETE_BLOG',
    id: 2,
  })
})
