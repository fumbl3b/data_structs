const HashTable = require('./HashTable');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('should insert and retrieve values correctly', () => {
    hashTable.put('name', 'Alice');
    hashTable.put('age', 25);
    expect(hashTable.get('name')).toBe('Alice');
    expect(hashTable.get('age')).toBe(25);
  });

  test('should update values for existing keys', () => {
    hashTable.put('name', 'Alice');
    hashTable.put('name', 'Bob'); // Update value
    expect(hashTable.get('name')).toBe('Bob');
  });

  test('should return undefined for nonexistent keys', () => {
    expect(hashTable.get('nonexistent')).toBeUndefined();
  });

  test('should remove keys correctly', () => {
    hashTable.put('name', 'Alice');
    hashTable.put('age', 25);
    expect(hashTable.remove('name')).toBe(true);
    expect(hashTable.get('name')).toBeUndefined();
    expect(hashTable.containsKey('name')).toBe(false);
    expect(hashTable.remove('name')).toBe(false); // Already removed
  });

  test('should handle collisions using linked lists', () => {
    const key1 = 'abc'; // Hash collision example
    const key2 = 'acb'; // Assuming these hash to the same index

    hashTable.put(key1, 1);
    hashTable.put(key2, 2);

    expect(hashTable.get(key1)).toBe(1);
    expect(hashTable.get(key2)).toBe(2);
  });

  test('containsKey should correctly identify existing keys', () => {
    hashTable.put('name', 'Alice');
    expect(hashTable.containsKey('name')).toBe(true);
    expect(hashTable.containsKey('age')).toBe(false);
  });

  test('keys should return all keys in the table', () => {
    hashTable.put('name', 'Alice');
    hashTable.put('age', 25);
    hashTable.put('city', 'New York');
    const keys = hashTable.keys();
    expect(keys).toContain('name');
    expect(keys).toContain('age');
    expect(keys).toContain('city');
    expect(keys.length).toBe(3);
  });

  test('values should return all values in the table', () => {
    hashTable.put('name', 'Alice');
    hashTable.put('age', 25);
    hashTable.put('city', 'New York');
    const values = hashTable.values();
    expect(values).toContain('Alice');
    expect(values).toContain(25);
    expect(values).toContain('New York');
    expect(values.length).toBe(3);
  });

  test('should handle empty hash table correctly', () => {
    expect(hashTable.keys()).toEqual([]);
    expect(hashTable.values()).toEqual([]);
    expect(hashTable.containsKey('name')).toBe(false);
    expect(hashTable.get('name')).toBeUndefined();
    expect(hashTable.remove('name')).toBe(false);
  });

  test('should handle large numbers of keys and values', () => {
    for (let i = 0; i < 1000; i++) {
      hashTable.put(`key${i}`, `value${i}`);
    }
    expect(hashTable.get('key500')).toBe('value500');
    expect(hashTable.get('key999')).toBe('value999');
    expect(hashTable.containsKey('key0')).toBe(true);
    expect(hashTable.containsKey('key1000')).toBe(false);
    expect(hashTable.keys().length).toBe(1000);
    expect(hashTable.values().length).toBe(1000);
  });
});
