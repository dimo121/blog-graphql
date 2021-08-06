import add from '../playground/add'

test('should add two parameters', () => {
  const result = add(3, 5)
  expect(result).toBe(8)
})
