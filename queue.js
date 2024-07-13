class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length
  }
}

module.exports = Queue