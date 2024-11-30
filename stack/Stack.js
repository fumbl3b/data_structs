class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }

class Stack {

  constructor() {
    this.top = null
    this.count = 0// Initialize any necessary properties
  }

  // Add an element to the top of the stack
  push(element) {
    const newNode = new Node(element)
    
    const currentTop = this.top
    this.top = newNode
    this.top.next = currentTop
    this.count++
    return newNode
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.count < 1) {
      return null
    }
    const element = this.top.data
    this.top = this.top.next
    this.count-- 

    return element
  }

  // Return the top element without removing it
  peek() {
    return this.top ? this.top.data : null
  }

  // Check if the stack is empty
  isEmpty() {
    return this.count === 0 
  }

  // Return the number of elements in the stack
  size() {
    return this.count
  }

  // Convert the stack to an array (for debugging or other use)
  toArray() {
    const result = []
    let current = this.top
    while (current !== null) {
      result.push(current.data)
      current = current.next
    } 
    return result.reverse()
  }
}

module.exports = Stack;
