import Node from "./node.js";

export default class LinkedList {
  constructor(head) {
    this.head = head ? head : new Node(undefined, null, null);
    this.tail = this.head;
    this.size = 1;
  }

  append(value) {
    this.tail = new Node(value, this.tail, null);
    this.tail.previous.next = this.tail;
    this.size++;
  }

  prepend(value) {
    this.head = new Node(value, null, this.head);
    this.head.next.previous = this.head;
    this.size++;
  }

  at(index) {
    let i = 0;
    let pointer = this.head;
    while (i < index) {
      if (pointer.next === null) return null;
      pointer = pointer.next;
      i++;
    }
    return pointer;
  }

  pop() {
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.size--;
  }

  find(value) {
    let i = 0;
    let pointer = this.head;
    while (true) {
      if (pointer.value === value) return i;
      if (pointer.next === null) return null;
      pointer = pointer.next;
    }
  }

  contains(value) {
    return this.find(value) !== null;
  }

  toString() {
    let pointer = this.head;
    let string = "";
    while (true) {
      if (pointer) string += `( ${pointer.value} ) -> `;

      if (pointer.next === null) break;
      else pointer = pointer.next;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    const pointer = this.at(index);

    if (index < 1) this.prepend(value);
    else if (index === this.size) this.append(value);
    else if (index > this.size) throw new Error("Index out of bounds");
    else {
      pointer.previous.next = new Node(value, pointer.previous, pointer);
      pointer.previous = pointer.previous.next;
    }

    this.size++;
  }

  removeAt(index) {
    const pointer = this.at(index);
    if (pointer === null) throw new Error("Index out of bounds");

    if (index === 0) {
      this.head = pointer.next;
      if (pointer.next) pointer.next.previous = null;
      this.size--;
      return;
    } else pointer.previous.next = pointer.next;

    if (index === this.size - 1) {
      this.tail = pointer.previous;
      pointer.previous.next = null;
    } else pointer.next.previous = pointer.previous;

    this.size--;
  }
}
