class Stack {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if (!this.items.length) return null

    return this.items.pop()
  }

  peek() {
    if (!this.items.length) return null

    return this.items.at(-1)
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = []

    return this.items
  }

  print() {
    console.log(this.items)
  }
}

let stack = new Stack()

stack.push(5)
stack.push(3)

console.log(stack.peek()) // 3

stack.pop()
stack.push(9)

console.log(stack.peek()) // 9

stack.push(20)

console.log(stack.size()) // 3

stack.pop()

stack.print() // [ 5, 9 ]

stack.clear()

console.log(stack.isEmpty()) // true
