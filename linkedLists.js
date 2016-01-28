function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  var head = null;

  this.add = function(value) {
    var node = new Node(value);

    if(head === null) {
      return head = node;
    }

    var last = head;
    while(last.next !== null) {
      last = last.next;
    }

    last.next = node;
  }
}
