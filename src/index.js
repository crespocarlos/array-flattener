const buildFlattenArray = (array) => {
  let stack = []
  let flattenedArray = []

  stack.push(array)

  while(stack.length > 0) {
    const currentItem = stack.pop()

    if (Array.isArray(currentItem)) {
        currentItem.forEach(item => {
          stack.push(item)
        })
    } else {
      if (!Number.isInteger(currentItem)) {
        throw new Error(`${currentItem} is not a number!`)
      }

      flattenedArray.unshift(currentItem)
    }
  }

  return flattenedArray
}

const flatten = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('This is not an array :/.')
  }

  return buildFlattenArray(array)
}

export default flatten