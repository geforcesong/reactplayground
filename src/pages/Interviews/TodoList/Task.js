export default class Task {
  constructor(name) {
    this.id = Math.random();
    this.name = name;
    this.status = 0;
  }
}
