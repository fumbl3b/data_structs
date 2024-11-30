const Stack = require('./Stack'); // Adjust path if necessary

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should start as an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.toArray()).toEqual([]);
  });

  test('should push elements onto the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.toArray()).toEqual([10, 20, 30]);
  });

  test('should pop elements from the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30); // LIFO: Last In, First Out
    expect(stack.pop()).toBe(20);
    expect(stack.size()).toBe(1);
    expect(stack.toArray()).toEqual([10]);
  });

  test('should return the top element with peek', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30); // Top of the stack
    expect(stack.size()).toBe(3); // Size should remain the same
    expect(stack.isEmpty()).toBe(false);
  });

   test('should handle popping from an empty stack gracefully', () => {
    expect(stack.pop()).toBeNull(); // Or null, based on your implementation
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('should handle peeking on an empty stack gracefully', () => {
    expect(stack.peek()).toBeNull(); // Or null, based on your implementation
    expect(stack.isEmpty()).toBe(true);
  });

  test('should handle mixed operations correctly', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });
});
