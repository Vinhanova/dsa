class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(element, priority) {
    const item = new QueueElement(element, priority)
    var contain = false

    if (this.isEmpty()) {
      this.queue.push(item)
      return
    }

    for (let i = 0; i < this.size(); i++) {
      if (item.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, item)
        contain = true
        break
      }
    }

    if (!contain) {
      this.queue.push(item)
    }
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
    return this.queue.map(item => item.element).join(' ')
  }
}

var queue = new Queue()

console.log(queue.isEmpty()) // true

console.log(queue.front()) // No elements in Queue

// Adding elements to the queue
queue.enqueue('Napoleon', 2)
queue.enqueue('Taylor', 3)
queue.enqueue('Kennedy', 1)
queue.enqueue('Wilbur', 2)
queue.enqueue('Miles', 1)
queue.enqueue('Shanna', 2)
queue.enqueue('Wayne', 3)

console.log(queue.print()) // Kennedy Miles Napoleon Wilbur Shanna Taylor Wayne

console.log(queue.front().element) // Kennedy

console.log(queue.rear().element) // Wayne

// Removing item
console.log(queue.dequeue().element) // Kennedy

// Adding another element to the queue
queue.enqueue('Rebecca', 2)

console.log(queue.print()) // Miles Napoleon Wilbur Shanna Rebecca Taylor Wayne
