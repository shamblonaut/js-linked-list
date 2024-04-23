export default class Node {
  constructor(value, previous, next) {
    this.previous = previous;
    this.value = value;
    this.next = next;
  }
}
