import blogsReducer from '../../reducers/blogs'
import blogs from '../fixtures/blogs'
import moment from 'moment'

test('should add blog object to fixtures with specified values', () => {
  const inputBlog = {
    id: 4,
    title: 'Blog 4',
    content: 'This is content for testing 4.',
    createdAt: moment(0),
    entries: 0,
  }
  const action = blogsReducer(blogs, {
    type: 'CREATE_BLOG',
    blog: {
      ...inputBlog,
    },
  })
  expect(action).toEqual([...blogs, inputBlog])
})

test('should delete blog from fixture list with specified id 2', () => {
  const action = blogsReducer(blogs, {
    type: 'DELETE_BLOG',
    id: '2',
  })
  expect(action).toEqual([blogs[0], blogs[2]])
})
