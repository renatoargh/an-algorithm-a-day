interface StackInterface<T> {
  push(element: T): void // O(1)
  pop(): T // O(1)
  isEmpty(): boolean // O(1)
  length(): number // O(1)
}

class Stack<T> implements StackInterface<T> {
  private data: Array<T>
  private top = -1

  constructor(maxLength: number) {
    this.data = new Array<T>(maxLength)
  }

  push(element: T): void {
    if (this.top + 1 > this.data.length) {
      throw new Error('stack is full')
    }

    this.top++
    this.data[this.top] = element
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('stack is empty')
    }

    const element = this.data[this.top]
    this.data[this.top] = null // To free the memory
    this.top--

    return element
  }

  length(): number {
    return this.top + 1
  }

  isEmpty(): boolean {
    if (this.top === -1) {
      return true
    }

    return false
  }
}

