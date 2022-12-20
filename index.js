import Tree from "./tree.js";

function removeDuplicate(arr) {
  const _new = [];

  arr.forEach((el) => {
    if (!_new.includes(el)) _new.push(el);
  });

  return _new;
}

const sorted = removeDuplicate([2, 3, 1].sort((a, b) => a - b));

// [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const tree = new Tree(sorted);
// tree.insert(tree.root, 50);

tree.prettyPrint(tree.root);
