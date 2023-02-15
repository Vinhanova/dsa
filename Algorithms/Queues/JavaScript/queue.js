class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    this.queue.push(item)
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow'

    return this.queue.shift()
  }

  front() {
    if (this.isEmpty()) return 'No elements in Queue'

    return this.queue.at(0)
  }

  rear() {
    if (this.isEmpty()) return 'No elements in Queue'

    return this.queue.at(-1)
  }

  size() {
    return this.queue.length
  }

  isEmpty() {
    return this.size() === 0
  }

  print() {
    console.log(this.queue)
  }
}

let queue = new Queue()

// Adding items to the queue
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

// Removing item
console.log(queue.dequeue()) // 10

// Adding another item to the queue
queue.enqueue(40)

queue.print() // [ 20, 30, 40 ]

console.log(queue.isEmpty()) // false

console.log(queue.front()) // 20

// Removing item
queue.dequeue()

console.log(queue.size()) // 2

// Removing items
queue.dequeue()
queue.dequeue()

console.log(queue.isEmpty()) // true
