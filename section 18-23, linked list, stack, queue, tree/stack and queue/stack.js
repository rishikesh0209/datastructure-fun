// normal stack implementation 
// last in first out 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.size){
            this.first = newNode;
            this.last = newNode
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size ++;
        return this;
    }
    pop(){
        if(!this.size){
            return null;
        }
        let temp = this.first;
        if(this.size == 1){
            this.first = null ;
            this.last = null;
        }else{
            this.first = temp.next;
            temp.next = null;
        }
        this.size --;
        return this;
    }
}
let stack = new Stack();
console.log(stack.push("hi"));
console.log(stack.push("2hi"));
console.log(stack.push("3hi"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());



