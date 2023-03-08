var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

/* head ends */


var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}


// This is a "method-only" submission.
// You only need to complete this method.

let root = new Node(1);
let leaf1 = new Node(2);
let leaf2 = new Node(3);
root.left = leaf1;
root.right = leaf2;
let left3 = new Node(4);
leaf2.right = left3;


function treeHeight(root, depth = 0) {
  let height = 0;

  if (root.left !== null || root.right !== null) {
      height++;
  } else if (root.left === null && root.right === null) {
      depth > 0 ? height++ : null;
      return height;
  }

  // if right isnt null
  if (root.right !== null) {
      let currHeight = treeHeight(root.right, depth + 1);
      // traverse down tree
      height = Math.max(height, currHeight);
  }

  // if left isnt null
  if (root.left !== null) {
      // travers down tree
      height = Math.max(height, treeHeight(root.left, depth + 1));
  }

  return height;
}

console.log(treeHeight(root));