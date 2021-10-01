module.exports = class Goods {
  data = [];

  constructor(data) {
    this.data = data;
  }

  getStringifiedData() {
    return JSON.stringify(this.data);
  }
}
