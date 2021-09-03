const fs = require('fs');
module.exports = class HtmlDB {
  constructor(path) {
    this.path = path;
  }

  get raw() {
    return fs.readFileSync(this.path, 'utf-8');
  }

  get size() {
    return this.entries().length;
  }
  get length() {
    return this.entries().length;
  }

  set(key, value=undefined) {
    if (!key || typeof key !== "string") throw new TypeError("Please provide a valid key");
    if (!value) throw new TypeError("Please provide a valid value");
    if (this.has(key)) throw Error(`The key '${key}' already exists`);
    fs.writeFileSync(this.path, `${this.raw}\n<${key}>${value}</${key}>`.trim());
    return true;
  }

  get(key) {
    if (!key || typeof key !== "string") throw new TypeError("Please provide a valid key");
    const regex = new RegExp(`<${key}>(.+)</${key}>`);
    if(!this.raw.match(regex)) return null;
    return this.raw.match(regex)[0].replace(regex, '$1');
  }

  has(key) {
    return this.keys().includes(key);
  }

  delete(key) {
    if (!key || typeof key !== "string") throw new TypeError("Please provide a valid key");
    fs.writeFileSync(this.path, this.raw.replace(new RegExp(`<${key}>(.+)</${key}>`),'').trim());
    return true;
  }

  entries() {
    const array = [];
    this.raw.replace(new RegExp(`<(.+)>(.+)</.+>`, 'g'), (_,key,value) => array.push({key, value}));
    return array;
  }

  keys() {
    return this.entries().map(m => m.key);
  }
  
  values() {
    return this.entries().map(m => m.value);
  }
  
  clear() {
    fs.writeFileSync(this.path,'');
    return true;
  }
}