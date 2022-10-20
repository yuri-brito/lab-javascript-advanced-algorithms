class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length === this.MAX_SIZE)return false;
    return true
    
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length > 0)return false;
    return true
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()){
      this.queueControl.push(item)
      return this.queueControl
    }else{
      throw new Error('QUEUE_OVERFLOW')
    }

  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty()){
      throw new Error('QUEUE_UNDERFLOW')
    }else{
      return this.queueControl.shift()
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
