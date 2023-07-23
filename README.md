# @gabrielalonsocabral/localstorage-js

A simple and lightweight library for managing and interacting with LocalStorage in JavaScript applications.

## Installation

To use this library, you can install it via npm or yarn:

```bash
npm install @gabrielalonsocabral/localstorage-js
```

or

```bash
yarn add @gabrielalonsocabral/localstorage-js
```

## Usage

To use the LocalStorage functionality, import the `LocalStorage` class from the library:

```typescript
import { LocalStorage } from '@gabrielalonsocabral/localstorage-js';

// Create an instance of the LocalStorage class
const localStorage = new LocalStorage();

// Set a value in LocalStorage
localStorage.set('myKey', 'myValue', 3600); // Store 'myValue' with key 'myKey' for 3600 seconds (1 hour)

// Get a value from LocalStorage
const value = localStorage.get('myKey');
console.log(value); // Output: 'myValue'

// Check if a key exists in LocalStorage
const exists = localStorage.has('myKey');
console.log(exists); // Output: true

// Delete a value from LocalStorage
localStorage.delete('myKey');

// Push a value to an existing array stored in LocalStorage
localStorage.set('myArray', JSON.stringify([1, 2, 3]), 3600); // Store an array in LocalStorage
localStorage.push('myArray', '4'); // Append '4' to the array
const updatedArray = localStorage.get('myArray');
console.log(updatedArray); // Output: '[1, 2, 3, 4]'
```

## API

### `set(key: string, value: string, ttl: number): boolean`

Storage key value on LocalStorage.

- `key`: Identifier key.
- `value`: Store value.
- `ttl`: Expiration date in seconds.

Returns `true` if the operation was successful; otherwise, an error is thrown.

### `get(key: string): string | null`

Return the localStorage value based on the key.

- `key`: Identifier key.

Returns the key value if it is not expired, otherwise, it returns `null`.

### `has(key: string): boolean`

Verify if the key exists on LocalStorage.

- `key`: Identifier key.

Returns `true` if the key already exists; otherwise, `false`.

### `delete(key: string): void`

Delete the key from LocalStorage.

- `key`: Identifier key.

There is no return value.

### `push(key: string, value: string): boolean`

Append a new item to a localStorage key in case the value is an array.

- `key`: Identifier key.
- `value`: Store value.

Returns `true` if the value was successfully added to the array; otherwise, it returns `false`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Note: This library is designed to work with `dayjs` for handling time and dates. Make sure to have `dayjs` installed in your project before using this library.