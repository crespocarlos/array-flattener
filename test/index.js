import assert from 'assert'
import flatten from '../src'

describe('flatten array', () => {
  it('should flatten nested array as given on task description', () => {
    assert.deepEqual([1, 2, 3, 4], flatten([[1, 2, [3]], 4]))
  })

  it('should return empty array', () => {
    assert.deepEqual([], flatten([]))
  })

  it('should flatten complex multi level array', () => {
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8], flatten([[1, 2], [3, 4], [5, 6, [7,[[8]]]]]))
  })

  it('should return the same one level array', () => {
    const array = [1, 2, 3, 4]

    assert.deepEqual(array, flatten(array))
  })

  it('should flatten nested level array of one item', () => {
    assert.deepEqual([1], flatten([[1]]))
  })

  it('should throw an exception as the array has a non integer item ', () => {
    assert.throws(() => {
      flatten([1, '2'])
    }, Error)
  })

  it('should throw an exception as the argument is not an array', () => {
    assert.throws(() => {
      flatten(123)
    }, Error)
  })

  it('should throw an exception as the argument is null', () => {
    assert.throws(() => {
      flatten(null)
    }, Error)
  })
})