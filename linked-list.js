
class Node {
    
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }    
    
}

class LinkedList {

    static head;
    static tmp;

    constructor(value) {
        // Create the Head of the linked list
        LinkedList.head = new Node(value, null)
    }

    append(value) {
        LinkedList.head = new Node(value, LinkedList.head);
    }

    prepend(value) {
        if(LinkedList.head == null) {
            this.append(value);
        } else {
            LinkedList.tmp = LinkedList.head;

            while (LinkedList.tmp.nextNode != null) {
                LinkedList.tmp = LinkedList.tmp.nextNode;
            }

            LinkedList.tmp.nextNode = new Node(value, null);
        }
    }

    size() {
        let size = 0;

        LinkedList.tmp = LinkedList.head;
        while (LinkedList.tmp != null) {
            LinkedList.tmp = LinkedList.tmp.nextNode;
            size++;
        }

        return size;
    }

    head() {
        return LinkedList.head;
    }

    tail() {
        LinkedList.tmp = LinkedList.head;
        while (LinkedList.tmp.nextNode != null) {
            LinkedList.tmp = LinkedList.tmp.nextNode;
        }

        return LinkedList.tmp;
    }

    at(index) {
        if (index >= this.size()) throw new Error('index out of range');

        let i = 0;
        LinkedList.tmp = LinkedList.head;
        while (LinkedList.tmp.nextNode != null && i != index) {
            LinkedList.tmp = LinkedList.tmp.nextNode;
            i++;
        }

        return LinkedList.tmp;
    }

    pop() {
        if (LinkedList.head == null) throw new Error('cannot delete');

        let cur = LinkedList.head;
        let prev = null;
        
        while (cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }

        prev.nextNode = cur.nextNode;
        
    }

    contains(value) {
        LinkedList.tmp = LinkedList.head;
        while (LinkedList.tmp != null && LinkedList.tmp.value != value) {
            LinkedList.tmp = LinkedList.tmp.nextNode;
        }

        if (LinkedList.tmp == null) return false;

        return true;
    }

    find(value) {
        let i = 0;

        LinkedList.tmp = LinkedList.head;
        while (LinkedList.tmp != null && LinkedList.tmp.value != value) {
            LinkedList.tmp = LinkedList.tmp.nextNode;
            i++;
        }

        if (LinkedList.tmp == null) return null;;

        return i;
    }

    toString() {
        let linkedList = '';
        LinkedList.tmp = LinkedList.head;
        while (LinkedList.tmp != null) {
            linkedList += `( ${ LinkedList.tmp.value } ) -> `
            LinkedList.tmp = LinkedList.tmp.nextNode;
        }

        linkedList += 'null';

        return linkedList;
    }

    insertAt(value, index) {
        let i = 0;
        
        if (LinkedList.head == null) return null;

        if (index > this.size()) throw new Error('index out of range')

        if (index === 0) {
            this.append(value);
            return;
        }

        let prev = null;
        let cur = LinkedList.head;

        while (cur != null && i != index) {
            prev = cur;
            cur = cur.nextNode;
            i++;
        }

        prev.nextNode = new Node(value, cur);
    }

    removeAt(index) {
        let i = 0;

        if (LinkedList.head == null) throw new Error('cannot delete');

        if (index >= this.size()) throw new Error('index out of range')

        if (index === 0) {
            LinkedList.head = LinkedList.head.nextNode;
            return;
        }

        let cur = LinkedList.head;
        let prev = null;

        while (cur != null && index != i) {
            prev = cur;
            cur = cur.nextNode;
            i++;
        }

        if (cur === null) throw new Error('cannot delete');

        prev.nextNode = cur.nextNode;
    }
    
}


// Testing code
const linkedList = new LinkedList('first');
linkedList.append('zero');
linkedList.prepend('second');
linkedList.prepend('third');
linkedList.prepend('fourth');
console.log(linkedList.size());
console.log(linkedList.find('fourtha'));
console.log(linkedList.toString());
linkedList.insertAt('1/2', 2);
console.log(linkedList.toString());
linkedList.removeAt(1);
console.log(linkedList.toString());