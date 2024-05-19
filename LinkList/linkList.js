class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}

const list = new LinkList();
//Result before adding value in the list
console.log(list.isEmpty());
console.log(list.getSize());

list.prepend(10);
list.prepend(20);

//Result after adding value in the list
console.log(list.isEmpty());
console.log(list.getSize());