/**
 * October Leetcoding Challenge - Day 9 - Serialize and Deserialize BST
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3489/
 * 
 * Time: O(N Log N); Space: O(N)
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (!root) return ''
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const arr = data.split(',').map((a) => a !== '' ? Number(a) : -1)
    const buildTree = () => {
        const val = arr.shift()
        if (val === -1) return null
        const node = new TreeNode(val)
        node.left = buildTree()
        node.right = buildTree()
        return node
    }
    return buildTree()
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/* TEST CASES
[2,1,3]
[]
[0]
[4,2,6,1,3,5,7]
*/