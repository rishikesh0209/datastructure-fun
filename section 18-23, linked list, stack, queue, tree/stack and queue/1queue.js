// normal queue fifo(first in first out) implementation

class Node {
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.size){
            this.first= newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this. size ++;
        return this;
    }
    dequeue(){
        if(!this.size){
            return null;
        }
        if(this.size ==1){
            this.last= null;
            this.first = null;
        }else{
            let temp = this.first;
            this.first = temp.next;
        }
        this.size --;
        return this;
    }
}
let queue = new Queue();

console.log(queue.enqueue("hi"));
console.log(queue.enqueue("2hi"));
console.log(queue.enqueue("3hi"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
