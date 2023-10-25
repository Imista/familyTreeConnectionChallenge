const TreeNode = require("./TreeNode");

// Nivel 1
const root = new TreeNode("Node A");

// Nivel 2
root.left = new TreeNode("Node B");
root.right = new TreeNode("Node C");

// Nivel 3
root.left.left = new TreeNode("Node D");
root.left.right = new TreeNode("Node E");
root.right.left = new TreeNode("Node F");
root.right.right = new TreeNode("Node G");

// Nivel 4
root.left.left.left = new TreeNode("Node H");
root.left.left.right = new TreeNode("Node I");
root.left.right.left = new TreeNode("Node J");
root.left.right.right = new TreeNode("Node K");
root.right.left.left = new TreeNode("Node L");
root.right.left.right = new TreeNode("Node M");
root.right.right.left = new TreeNode("Node N");
root.right.right.right = new TreeNode("Node O");

module.exports = root;
