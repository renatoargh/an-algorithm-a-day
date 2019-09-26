type Nullable<T> = T | null

interface QueueInterface<T> {
  enqueue(element: T): void
  dequeue(): T
  isEmpty(): boolean
  length(): number
}

class Queue<T> implements QueueInterface<T> {
  private data: Array<Nullable<T>>
  private head: number = 0
  private tail: number = 0

  constructor(maxLength: number) {
    this.data = new Array<T>(maxLength + 1)
  }

  private next(pointer: number): number {
    const lastIndex = this.data.length - 1

    if (pointer === lastIndex) {
      return 0
    }

    return pointer + 1
  }

  enqueue(element: T): void {
    const nextTail: number = this.next(this.tail)

    if (this.head === nextTail) {
      throw new Error('queue is full')
    }

    this.data[this.tail] = element
    this.tail = nextTail
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('the queue is empty')
    }

    const element = this.data[this.head]
    this.data[this.head] = null
    this.head = this.next(this.head)

    return element as T
  }

  length(): number {
    return Math.abs(this.tail - this.head)
  }

  isEmpty(): boolean {
    return this.head === this.tail
  }
}
