
// Exo 4.1 - creation of a generic class to do a queue system

class Queue<T> {
    private elements:T[] = [];

    // add a metho to add an element to the queue4
    public enqueue(element:T):void {
        this.elements.push(element);
    }

    // add a method to remove and print the first element of the queue or null if the queue is empty
    public dequeue():T|undefined|null {
        var Qelement:T|undefined|null = null;
        if(this.elements.length > 0) {
            Qelement = this.elements.shift();
        }
        return Qelement;
    }

    public isEmpty():boolean {
        return this.elements.length == 0;
    }

    public size():number {
        return this.elements.length;
    }
}

var numberQueue = new Queue<Number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
numberQueue.enqueue(4);
numberQueue.enqueue(5);
numberQueue.enqueue(6);
numberQueue.enqueue(7);
numberQueue.enqueue(8);
numberQueue.enqueue(9);
numberQueue.enqueue(10);

// test the queue functionnalities

console.log("The queue is empty: " + numberQueue.isEmpty());
console.log("The queue size is: " + numberQueue.size());
console.log("The first element of the queue is: " + numberQueue.dequeue());
console.log("The queue size is: " + numberQueue.size());
console.log("The first element of the queue is: " + numberQueue.dequeue());
console.log("The queue size is: " + numberQueue.size());


