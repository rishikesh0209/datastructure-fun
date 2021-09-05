
class Node{
    constructor(val){
        this.val =  val;
        this.next = null;
    }
}

class SinglyList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++ ;
        return this;
    }
    pop(){ // remove from the end 
        if(!this.head){
            return undefined
        }
        let current = this.head;
        let newTail = this.tail;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.length -- ;
        this.tail = newTail;
        if(!this.length){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){ // remove first element in the list 
        if(!this.head){
            return undefined;
        }
        let nextNode = this.head.next;
        this.head = nextNode;
        this.length -- ;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    unshift(val){ // add a new element at the head
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
            return this;
        }else{
            let currentNode = this.head;
            newNode.next = currentNode;
            this.head = newNode;
        }
        
        this.length ++;
        return this;

    }
    get(index){ // get element in the index
        if(!this.length || index >= this.length || index < 0){
            return null;
        }
        let current = this.head;
        let count = 0;
        while(count != index){
          current = current.next;
          count ++;
        }
        return current;
    }
    set(index,val){ // change value in the index provided
        if(!this.length || index >= this.length || index < 0){
            return null;
        }
        let current = this.head;
        let count = 0;
        while(count != index){
          current = current.next;
          count ++;
        }
        current.val= val;
        return this;
    }
    insert(index,val){ // add a new node with a value in the index provided
        if(!this.length || index > this.length || index < 0){
            return null;
        }
        if(index == 0 ){
            return this.unshift(val);
        }
        if(index == this.length){
            return this.push(val);
        }
        let getIndexElement =  this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = getIndexElement.next;
        getIndexElement.next =  newNode;
        this.length ++;
        return this;
    }
    remove(index){ // remove a node from specified index
        if(this.length <= 0 ||index >= this.length){
            return null;
        }
        if(index == 0){
            return this.shift();
        }
        if(index == this.length - 1){
            return this.pop();
        }
        let prevNode =  this.get(index - 1);
        let currentNode = this.get(index);
        let tmp = currentNode.next;
        prevNode.next = tmp;
        currentNode.next= null;
        this.length -- ;
        return this;

    }
    reverse(){
        let prev = null;
        let next;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
let ab = new SinglyList();

console.log(ab.push(9));
console.log(ab.push(91));
console.log(ab.push(92));
console.log(ab.push(19));
console.log(ab.push(191));
console.log(ab.push(192));
console.log(ab.push(29));
console.log(ab.push(291));
console.log(ab.push(292));
// console.log(ab.pop());
// console.log(ab.pop());
// console.log(ab.pop());
// console.log(ab.shift());
// console.log(ab.shift());
// console.log(ab.shift());
// console.log(ab.unshift(10));
// console.log(ab.unshift(11));
// console.log(ab.unshift(12));
// // console.log(ab.get(1));
// // console.log(ab.get(-1));
// // console.log(ab.set(2,1200));
// console.log(ab.insert(0,1200));
// console.log(ab.insert(1,1201));
// console.log(ab.insert(2,1202));
// console.log(ab.insert(6,1206));
// console.log(ab.remove(0));
// console.log(ab.remove(1));
// console.log(ab.remove(2));
console.log(ab.reverse());














// 98 -> 22 - >null