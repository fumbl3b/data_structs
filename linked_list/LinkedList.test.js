const assert = require('assert');
const { LinkedList, Node } = require('./LinkedList'); // Assuming LinkedList is in LinkedList.js

describe('LinkedList', function () {
  let list = null;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should start with an empty list', function () {
    assert.strictEqual(list.length, 0);
    assert.strictEqual(list.head, null);
  });

  it('should append elements correctly', function () {
    list.append(10);
    list.append(20);
    list.append(30);
    assert.strictEqual(list.length, 3);
    assert.deepStrictEqual(list.toArray(), [10, 20, 30]);
  });

  it('should prepend elements correctly', function () {
    list.prepend(10);
    list.prepend(20);
    list.prepend(30);
    assert.strictEqual(list.length, 3);
    assert.deepStrictEqual(list.toArray(), [30, 20, 10]);
  });

  it('should insert elements correctly at valid indices', function () {
    list.append(10);
    list.append(30);
    list.insert(1, 20); // Insert at middle
    assert.strictEqual(list.length, 3);
    assert.deepStrictEqual(list.toArray(), [10, 20, 30]);

    list.insert(0, 5); // Insert at head
    assert.deepStrictEqual(list.toArray(), [5, 10, 20, 30]);

    list.insert(4, 35); // Insert at tail
    assert.deepStrictEqual(list.toArray(), [5, 10, 20, 30, 35]);
  });

  it('should throw an error for invalid insert indices', function () {
    assert.throws(() => list.insert(-1, 10), /Index out of bounds/);
    assert.throws(() => list.insert(1, 10), /Index out of bounds/); // Empty list
  });

  it('should find the index of an element correctly', function () {
    list.append(10);
    list.append(20);
    list.append(30);
    assert.strictEqual(list.find(20), 1);
    assert.strictEqual(list.find(30), 2);
    assert.strictEqual(list.find(40), -1); // Not found
  });

  it('should get the data at a specific index', function () {
    list.append(10);
    list.append(20);
    list.append(30);
    assert.strictEqual(list.getIndex(0), 10);
    assert.strictEqual(list.getIndex(1), 20);
    assert.strictEqual(list.getIndex(2), 30);
  });

  it('should throw an error for invalid get indices', function () {
    list.append(10);
    assert.throws(() => list.getIndex(-1), /Index out of bounds/);
    assert.throws(() => list.getIndex(2), /Index out of bounds/);
  });

  it('should convert to an array correctly', function () {
    list.append(10);
    list.append(20);
    list.append(30);
    assert.deepStrictEqual(list.toArray(), [10, 20, 30]);
  });

  it('should allow mapping during toArray', function () {
    list.append(10);
    list.append(20);
    list.append(30);
    const result = list.toArray((data) => data * 2);
    assert.deepStrictEqual(result, [20, 40, 60]);
  });

  it('should handle edge cases for prepend and append', function () {
    list.append(10);
    assert.strictEqual(list.head.data, 10);
    list.prepend(5);
    assert.strictEqual(list.head.data, 5);
    assert.deepStrictEqual(list.toArray(), [5, 10]);
  });
});
