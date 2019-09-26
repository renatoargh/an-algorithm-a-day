const setOperations = {
  search: {
    notation: 'SEARCH (S, k)',
    description: 'A query that, given a set S and a key value k, returns a pointer x to an element in S such that x:key D k, or NIL if no such element belongs to S.'
  },

  insert: {
    notation: 'INSERT (S, x)',
    description: 'A modifying operation that augments the set S with the element pointed to by x. We usually assume that any attributes in element x needed by the set implementation have already been initialized.'
  },

  delete: {
    notation: 'DELETE (S, x)',
    description: 'A modifying operation that, given a pointer x to an element in the set S, re- moves x from S. (Note that this operation takes a pointer to an element x, not a key value.'
  },

  minimum: {
    notation: 'MINIMUM (S)',
    description: 'A query on a totally ordered set S that returns a pointer to the element of S with the smallest key.'
  },

  maximum: {
    notation: 'MAXIMUM (S)',
    description: 'A query on a totally ordered set S that returns a pointer to the element of S with the largest key.'

  },

  successor: {
    notation: 'SUCCESSOR (S, x)',
    description: 'A query that, given an element x whose key is from a totally ordered set S, returns a pointer to the next larger element in S, or NIL if x is the maximum element.'
  },

  predecessor: {
    notation: 'PREDECESSOR (S, x)',
    description: 'A query that, given an element x whose key is from a totally ordered set S, returns a pointer to the next smaller element in S, or NIL if x is the minimum element.'
  }
}

For a set on n keys, the normal presumption is that a call to MINIMUM followed by n 􏰐 1 calls to SUCCESSOR enumerates the elements in the set in sorted order.
