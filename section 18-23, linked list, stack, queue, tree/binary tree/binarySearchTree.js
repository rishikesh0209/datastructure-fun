// binary search tree implementation with insertion and find


class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (this.current == val) {
                return undefined;
            }
            if (val < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right == null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val) {
        if (!this.root) { return null; }
        let current = this.root;
        while (current) {
            if (current.value == val) {
                return true;
            } else if (val < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    BSTOrder() {//breadth first search 
        let visited = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return visited;
    }
    DFSPreorder() {//root-left-right
        let visited = [];
        function traverse(node) {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root);
        return visited;
    }
    DFSPostorder() {//left-right-root
        let visited = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            visited.push(node.value);
        }
        traverse(this.root);

        return visited;
    }

    DFSInorder() {//left-root-right
        let visited = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            visited.push(node.value);
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root);

        return visited;
    }
}
var tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(15));
console.log(tree.insert(20));
// console.log(tree.insert(7));
// console.log(tree.find(16));
// console.log(tree.find(161));
console.log(tree.BSTOrder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
console.log(tree.DFSInorder());



