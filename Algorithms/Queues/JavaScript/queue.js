class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    this.queue.push(item)
  }

  dequeue() {
    return this.queue.shift()
  }

  front() {
    return this.queue.at(0)
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

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
queue.enqueue(40)

queue.print() // [ 20, 30, 40 ]

console.log(queue.isEmpty()) // false

console.log(queue.front()) // 20

queue.dequeue()

console.log(queue.size()) // 2

queue.dequeue()
queue.dequeue()

console.log(queue.isEmpty()) // true
