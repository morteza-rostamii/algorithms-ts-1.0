
function lesson1() {

  (() => {

    const comments = [
      {
        id: 0,
      },
      {
        id: 1,
        parent: 0,
      },
      {
        id: 2,
        parent: 0,
      },
      {
        id: 3,
        parent: 1,
      }
    ]
    
    // convert this array into tree
    
    class Node {
      id: number;
      name: string;
      children: Node[];

      constructor({
        name,
        children,
      }:{name: string, children: Node[]}) {
        this.id = Math.floor(Math.random());
        this.name = name;
        this.children = children;
      }


    }


    // treverse the tree and print each node and it's children
  })();

  class Queue {
    items: any[];

    constructor(item:any) {
      // initilizing with one item
      this.items = [item];
    }

    enqueue(item: any) {
      return this.items.push(item);
    }

    dequeue() {
      // remove from front
      return this.items.shift();
    }

    // show item in front
    peek() {
      return this.items[0];
    }

    isEmpty():boolean {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }
  }

  (() => {

    // binary trees

    class Node {
      id: number;
      value: string;
      left: Node | null;
      right: Node | null;
      parent: string;

      constructor({
        value='', 
        left=null,
        right=null,
        parent=null,
      }: any) {
        this.id = Math.floor(Math.random() * 1000);
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
      }

    }

    /* 

    # example of a comment section

    c-0
      c-1 

    c-11

    ----
    # html

    <root1/>
    <n0/>

    ----

    root
      left: n0
      right: n1
        left: n2
    
    */

    // make root node (binary tree)
    const root1 = new Node({value: 'root1'});

    const n0 = new Node({value: 'n-0', parent: 'root-1'});
    const n1 = new Node({value: 'n-1', parent: 'root-1'});

    const n3 = new Node({value: 'n-3', parent: 'n-0'});
    n0.left = n3;
    
    const n2 = new Node({value: 'n-2', parent: 'n-1'}); 
    n1.left = n2;
    root1.left = n0;
    root1.right = n1;

    //console.log(root1);

    // traverse binary tree 

    // breadth first traversal

    /* 
      # we move horizontally and visit the siblings on each level.

      root -first
        -> left-1 -second
          ->left-2 -fourth 
        -> right-1 -third

      queue: [
        root, # take this first
        left-1
        right-1
        left-2
      ]

    */

    function walkBFS(root: Node) {
      // in case of: empty_node
      if (root === null) return;

      // init with root
      const queue = new Queue(root);

      // untill queue is empty
      while (queue.size()) {

        // pull item from front of queue
        const currentItem = queue.dequeue();

        const div = document.createElement('div')
        div.innerHTML = `<div 
        style="padding-left: ${10}px;"
        >${currentItem.value}</div>`;
        document.body.appendChild(div);

        // if: left of right push to queue
        if (currentItem.left) queue.enqueue(currentItem.left);
        if (currentItem.right) queue.enqueue(currentItem.right);
      }

    }

    //walkBFS(root1);

    // depth first traversal

    /* 

    root
      left: n0
      right: n1
        left: n2
    
    # depth-first (pre-order)

    root:
      l: n0 = null
        l: n3 = null
      r: n1
        l: n2

    # types: 
      root node -> left node -> right node // pre-order traversal
      left node -> root node -> right node // in-order traversal
      left node -> right node -> root node // post-order traversal
    */

    // depth-first recursion

    /* let levels: any = new Map();
    function getAllParents(node: Node) {
      console.log(node)
      const parents: string[] = [];

      function traverse(currentNode: Node) {
        if (currentNode === null) return;
        if (currentNode.parent) parents.push(currentNode.parent);
  
        // this just loops
        if (currentNode.left) traverse(currentNode.left);
        if (currentNode.right) traverse(currentNode.right);
      }

      traverse(node);
      return parents;
    }

    const parents = getAllParents(root1);

    let level: number = 0;
    for (let i=0; i < parents.length; i++) {
      // if parent exist: we've been in this level =: skip!!
      if (levels.has(parents[i])) continue;
      level += 1;
      levels.set(parents[i], level);
    } 

    console.log(parents, levels); */

    function walkPreOrder(node: Node) {
      // basecase: left= null or right= null
      if (node === null) return;

      const currentItem = node;

      const div = document.createElement('div');
      div.innerHTML = `
        <p
        >
        ${currentItem.value}
        </p>
      `
      document.body.appendChild(div);

      if (node.left) walkPreOrder(node.left);
      if (node.right) walkPreOrder(node.right);

      
    }

    walkPreOrder(root1);
    //console.log(levels);

  })();

  (() => {
    // stack: 
    /* 
    last-in and first-out

    # operation:
      # push: 
        # push in from top (end of array)
      # pop:
        # pop from end of array
    */
    
    class Stack {
      items: any[];

      constructor() {
        this.items = [];
      }

      push(item: any) {
        this.items.push(item);
      }

      pop(): any {
        return this.items.pop();
      }

      isEmpth():boolean {
        return this.items.length === 0;
      }

      size() {
        return this.items.length;
      }
    }

    const stack1 = new Stack();

    stack1.push(0);
    const res1 = stack1.pop();
    const len = stack1.size();
    //console.log(stack1, res1, len)

    //--------------------------

    // first-in and first-out =: like a line of bank
    class Queue {
      items: any[];

      constructor() {
        this.items = [];
      }

      enqueue(item: any) {
        return this.items.push(item);
      }

      dequeue() {
        // remove from front
        return this.items.shift();
      }

      // show item in front
      peek() {
        return this.items[0];
      }

      isEmpty():boolean {
        return this.items.length === 0;
      }

      size() {
        return this.items.length;
      }
    }


  })()
}

export function recursion() {
  lesson1();
}