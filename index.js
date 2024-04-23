import LinkedList from "./linkedList.js";
import Node from "./node.js";

const ll = new LinkedList(new Node(0, null, null));
print("Initialized with 0");

ll.append(10);
print("Appended 10");

ll.append(20);
print("Appended 20");

ll.prepend(-10);
print("Prepended -10");

printIndex(2);

ll.pop();
print("Pop");

printContains(5);
printContains(10);

printFind(-10);

ll.insertAt(110, 2);
print("Insert 110 at index 2");

ll.removeAt(1);
print("Remove at index 1");

function print(change) {
  console.log(change);
  console.log(
    ll.toString(),
    ` [ Head: ${ll.head.value}, Tail: ${ll.tail.value}, Size: ${ll.size}]`,
  );
  console.log();
}

function printIndex(index) {
  console.log(`Value at index ${index} is ${ll.at(index).value}`);
  console.log();
}

function printContains(value) {
  console.log(
    `Does the linked list contain the value ${value}? ${ll.contains(value) ? "Yes" : "No"}`,
  );
  console.log();
}

function printFind(value) {
  console.log(`The value ${value} is found at the index ${ll.find(value)}`);
  console.log();
}
