const root = require("./fakeTree");

const closestCommonRelative = (root, value_a, value_b) => {
    if (!root) return null;

    function search(node) {
        if (!node) return [false, null];

        const [leftFound, leftNode] = search(node.left);
        const [rightFound, rightNode] = search(node.right);

        if (leftFound && rightFound) return [true, node];

        const isEqual = node.val === value_a || node.val === value_b;
        const leftOrRightFound = leftFound || rightFound;

        if (leftOrRightFound && isEqual) return [true, node];

        if (leftNode) return [true, leftNode];
        if (rightNode) return [true, rightNode];

        if (leftOrRightFound || isEqual) return [true, null];

        return [false, null];
    }

    return search(root)[1];
};

const node = closestCommonRelative(root, "Node P", "Node O");
if (node) console.log(node.val);
else console.log("Relative not found.");
