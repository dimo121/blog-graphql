import React from 'react'
import { shallow } from 'enzyme'
import EntryFormPage from '../../components/EntryFormPage'

test('should render ExpenseFormPage correctly', () => {
  const wrapper = shallow(<EntryFormPage />)
  expect(wrapper).toMatchSnapshot()
})

test('should change error state with invalid input', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<EntryFormPage onSubmit={onSubmitSpy} />)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  })

  expect(wrapper.state('error').length).toBe(35)
})

test('should submit with valid input and no error', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<EntryFormPage onSubmit={onSubmitSpy} />)

  expect(wrapper).toMatchSnapshot()

  const stateValue = {
    title: 'Testing 1',
    content: 'Testing 12',
    createdAt: 123,
  }

  wrapper.setState(stateValue)

  expect(wrapper).toMatchSnapshot()

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  })

  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith(stateValue)
})

test('should change input state for title', () => {
  const value = 'Title 1'

  const wrapper = shallow(<EntryFormPage />)

  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  })

  expect(wrapper.state('title')).toBe(value)
})

test('should change input state for title', () => {
  const value = 'Content 1'

  const wrapper = shallow(<EntryFormPage />)

  wrapper.find('textarea').at(0).simulate('change', {
    target: { value },
  })

  expect(wrapper.state('content')).toBe(value)
})
