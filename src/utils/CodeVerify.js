const TTL = 3*60*1000
class CodeVerify {
  constructor() {
    if (SingletonMap.instance) {
      return SingletonMap.instance;
    }
    this.map = new Map();
    SingletonMap.instance = this;
    return this;
  }

  set(key, value) {
    this.map.set(key, value);
    setTimeout(() => {
      this.map.delete(key);
    },TTL);
  }

  verify(key, code) {
    return this.map.get(key) === code
  }

  get(key) {
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  delete(key) {
    return this.map.delete(key);
  }
}

module.exports = CodeVerify;
