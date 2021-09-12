// insert and remove functions of max binary heaps


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentValue = this.values[parentIdx];
            if (element <= parentValue) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parentValue;
            idx = parentIdx;
        }
        return this.values;
    }
    remove() {
        let max = this.values[0];
        let lastElement = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
            return this.values;
        }
    }
    sinkDown() {
        let idx = 0;
        let element = this.values[idx];
        let length = this.values.length;

        while (true) {
            let leftChildIndex = 2 * (idx + 1) / 2;
            let rightChildIndex = 2 * (idx + 2) / 2;
            let swap = null;
            let rightChild, leftChild;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap == null && rightChild > element) || swap != null && rightChild > leftChild) {
                    swap = rightChildIndex;
                }
            }

            if (swap == null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.insert(55));
console.log(heap.remove());
