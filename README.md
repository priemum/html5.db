# Html5.DB

A simple database that uses html as the storage format.

## Installation

```bash
npm install html5.db
```

## Usage

```javascript
const HTML5DB = require('html5.db');

// Create a new html database
const htmlDB = new HTML5DB(__dirname+'/db1.html');

// Set key/value pair
htmlDB.set('foo', 'boo') // -> true

// Get length (or size)
htmlDB.length // -> 1
htmlDB.size // -> 1

// Get key
htmlDB.get('foo') // -> 'boo'

// Has key
htmlDB.has('foo') // -> true

// Delete key
htmlDB.delete('foo') // -> true

// Get entries
htmlDB.entries() // -> [{"key": "foo", "value": "boo"}]

// Get keys
htmlDB.keys() // -> ["foo"]

// Get values
htmlDB.values() // -> ["boo"]

// Clear all entries
htmlDB.clear() // -> true
```
