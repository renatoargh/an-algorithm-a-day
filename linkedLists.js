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

  this.print = function() {
    if(head === null) {
        return;
    }

    var current = head;
    while(current !== null) {
        console.log(current.value);
        current = current.next;
    }
  }
}
