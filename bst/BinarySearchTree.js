class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  //insert a value in the tree
  insert(value) {
    const newNode = new TreeNode(value)

    // if tree is empty, set the root
    if (this.root === null) {
      this.root = newNode
      return
    }

    // recursive fxn to insert a node
    const insertNode = (current, node) => {
      if (node.value < current.value) {
        // move left
        if (current.left === null) {
          current.left = node
        } else {
          insertNode(current.left, node)
        }
      } else if (node.value > current.value) {
        // move right
        if (current.right === null) {
          current.right = node
        } else {
          insertNode(current.right, node)
        }
      }
      // ignore duplicates
    }

    insertNode(this.root, newNode)
  }

  //check if value exists in the tree
  contains(value) {
    if (this.root === null) {
      return false
    }

    // recursive fxn to find a value
    function findValue(node, value) {
      // base case
      if (node === null) {
        return false
      }

      if (node.value === value) { 
        return true 
      } else if (node.value > value) {
          return findValue(node.left, value)
      } else if (node.value < value) {
          return findValue(node.right, value)
        }
    }

    return findValue(this.root, value)
  }

  //remove a vanue from the tree
  remove(value) {
    const removeNode(node, value) => {
      if (this.root === null) return null // value not found

      if (value < node.value) {
        // go left
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.value) {
        // go right
        node.right = removeNode(node.right, value)
        return node
      } else {
        // Node to remove found
        
        // case 1: no children
        if (node.left === null && node.right === null) {
          return null
        }
        // case 2: one child
        if (node.left === null) {
          return node.right
        }
        if (node.right === null) {
          return node.left
        }
        // case 3: two children
        let successor = findMindNode(node.right)
        node.value = successor.value
        node.right = removeNode(node.right, successor.value)
        return node
      }
    }
    
    function findMindNode(node) {
      while (node.left !== null) {
        node = node.left
      }
      return node
    }
  }

  // find minimum value in tree
  findMin() {
    // TODO
  }

  findMax() {
    //TODO
  }
  
  // (Left -> Root -> Right)
  inOrderTraversal(callback) {
    //TODO
  }

  // (Root -> Left -> Right)
  preOrderTraversal(callback) {
    //TODO
  }

  // (Left -> Right -> Root)
  postOrderTraversal(callback) {
    //TODO
  }

  // Breadth-first traversal
  breadthFirstTraversal(callback) {
    //TODO
  }
}

module.exports = BinarySearchTree
