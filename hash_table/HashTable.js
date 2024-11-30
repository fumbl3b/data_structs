const LinkedList = require("../linked_list/LinkedList.js")

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class HashTable {
  constructor(size = 1013) {
    this.table = new Array(size); // Array to hold key-value pairs
    this.size = size; // Size of the hash table
  }

  // Hash function to map keys to an array index
  _hash(key) {
    let total = 0
    const PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      const value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.size
    }
    return total
  }

  // Insert a key-value pair into the hash table
  put(key, value) {
    const idx = this._hash(key);

    // If no bucket exists at the index, create a new node
    if (!this.table[idx]) {
      this.table[idx] = new Node(key, value);
      return;
    }

    let current = this.table[idx];

    while (current) {
      if (current.key === key) {
        current.value = value; // Update the value if the key exists
        return;
      }
      if (!current.next) break; // Stop at the last node
      current = current.next;
    }

    // Append the new node at the end of the linked list
    current.next = new Node(key, value);
  }

  // Retrieve a value by its key
  get(key) {
    const idx = this._hash(key)
    let current = this.table[idx]

    while(current) {
      if (current.key === key) return current.value
      current = current.next
    }

    return undefined
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const idx = this._hash(key)
    let current = this.table[idx]
    let prev = null

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next // remove the current node
        } else {
          this.table[idx] = current.next // remove the head node
        }
        return true // success
      }
      prev = current
      current = current.next
    }

    return false // failure
  }

  // Check if the hash table contains a key
  containsKey(key) {
    return this.get(key) !== undefined
  }

  // Return all keys in the hash table
  keys() {
    const result = []

    for (let bucket of this.table) {
      let current = bucket
      while (current) {
        result.push(current.key)
        current = current.next
      }
    }

    return result
  }

  // Return all the values in the hash table
  values() {
    const result = []
    for (let bucket of this.table) {
      let current = bucket
      while (current) {
        result.push(current.value)
        current = current.next
      }
    }
    return result
  }
}

module.exports = HashTable;
