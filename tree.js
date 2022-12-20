import Node from "./node.js";

class Tree {
  #root;

  constructor(arr) {
    this.#root = null;
    this.buildTree(arr);
  }

  get root() {
    return this.#root;
  }

  buildTree(data) {
    const start = 0;
    const end = data.length - 1;

    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(data[mid]);

    node.leftNode = this.buildTree(data.slice(start, mid));
    node.rightNode = this.buildTree(data.slice(mid + 1));

    this.#root = node;

    return node;
  }

  insert(root, value) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (value < root.value) {
      root.leftNode = this.insert(root.leftNode, value);
      return root;
    } else if (value > root.value) {
      root.rightNode = this.insert(root.rightNode, value);
      return root;
    }
  }

  // delete(root, value) {
  //   if (root === null) {
  //     return root;
  //   }

  //   if (value < root.value) {
  //     root.leftNode = this.delete(root.leftNode, value);
  //     return root;
  //   } else if (value > root.value) {
  //     root.rightNode = this.delete(root.rightNode, value);
  //     return root;
  //   } else {
  //     if (root.leftNode === null && root.rightNode === null) {
  //       return null;
  //     } else if (root.rightNode === null) {
  //       return root.leftNode;
  //     } else if (root.leftNode === null) {
  //       return root.rightNode;
  //     }
  //   }
  // }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node.rightNode !== null) {
      this.prettyPrint(
        node.rightNode,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftNode !== null) {
      this.prettyPrint(
        node.leftNode,
        `${prefix}${isLeft ? "    " : "│   "}`,
        true
      );
    }
  }
}

export default Tree;
