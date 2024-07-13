const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

/* size() 
add(item) 
peek() 
dequeue */

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
      expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   // Seu código aqui
  })

  it('Deve escolher o primeiro item da fila', () => {
    // Seu código aqui
  })

  it('Deve remover o primeiro item da fila', () => {
    // Seu código aqui
  })
})