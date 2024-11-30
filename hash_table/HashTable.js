class HashTable {
  constructor(size = 53) {
    this.table = new Array(size); // Array to hold key-value pairs
    this.size = size; // Size of the hash table
  }

  // Hash function to map keys to an array index
  _hash(key) {
    // To be implemented
  }

  // Insert a key-value pair into the hash table
  put(key, value) {
    // To be implemented
  }

  // Retrieve a value by its key
  get(key) {
    // To be implemented
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    // To be implemented
  }

  // Check if the hash table contains a key
  containsKey(key) {
    // To be implemented
  }

  // Return all keys in the hash table
  keys() {
    // To be implemented
  }

  // Return all values in the hash table
  values() {
    // To be implemented
  }
}

module.exports = HashTable;
