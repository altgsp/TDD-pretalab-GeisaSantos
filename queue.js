class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length
  }

add(item) {
    this.elements.push(item);
  }

  peek() {
    return this.elements[0];
  }

  dequeue() {
    if (this.elements.length > 0) {
      return this.elements.shift();
    } else {
      throw new Error(`A fila está vazia.`);
    }
  }

}

module.exports = Queue