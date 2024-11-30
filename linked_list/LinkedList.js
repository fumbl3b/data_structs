class Node {
	constructor(data) {
		this.data = data
    this.next = null
	}
}


class LinkedList {

  constructor() {
    this.length = 0
    this.head = null
  }

  append(data) {
    this.length ++
    if (this.head === null) {
      this.head = new Node(data)
      return this.head
    }
    let node = this.head
    while (node.next !== null) {
      node = node.next
    }
    const newNode = new Node(data)
    node.next = newNode
    return newNode
  }

  prepend(data) {
    this.length ++
    const head = this.head
    this.head = new Node(data)
    this.head.next = head
    return this.head
  }

  insert(i, data) {
    if (i === 0) {
      return this.prepend(data)
    }
    if (i > this.length || i < 0) {
      throw new Error("Index out of bounds") 
    }

    this.length++
    const newNode = new Node(data)
    const previousNode = this.#get(i - 1)

    newNode.next = previousNode.next
    previousNode.next = newNode

    return newNode
  }

  #get(i) {
    if (i === 0) return this.head
    if (i > this.length || i < 0) throw new Error("Index out of bounds")

    let current = this.head
    for (let pos = 0; pos < i; pos++) {
      current = current.next
    }
    return current
  }

  getIndex(i) {
    return this.#get(i).data
  }

  find(data) {
    let current = this.head
    for (let pos = 0; pos < this.length; pos++) {
      if (current.data == data) {
        return pos
       }
       current = current.next
    }
    return -1
  }

  toArray(callback = (data) => data) {
    const result = []
    let current = this.head
    while (current !== null) {
      result.push(callback(current.data))
      current = current.next
    }
    return result
  }
}

module.exports = { LinkedList, Node }
