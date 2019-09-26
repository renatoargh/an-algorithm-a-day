function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  var head = null;

  this.add = function (value) {
    var node = new Node(value);

    if (head === null) {
      return head = node;
    }

    var last = head;
    while (last.next !== null) {
      last = last.next;
    }

    last.next = node;
  }

  this.remove = function (i) {
    var previous = this.getIndex(i - 1),
      next = this.getIndex(i + 1);

    if (!previous) {
      return head = next;
    }

    previous.next = next;
  }

  this.getIndex = function (i) {
    var j = 0,
      current = head;

    if (current === null) {
      return null;
    }

    while (j !== i && current !== null) {
      current = current.next;
      j++;
    }

    return current;
  }

  this.print = function () {
    if (head === null) {
      return;
    }

    var current = head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.export = LinkedList
