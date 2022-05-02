const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.firstNode = null;
	}

	root() {
		return this.firstNode;
	}

	add(data) {
		let node = new Node(data);
		if (!this.firstNode) {
			this.firstNode = node;
			return;
		}
		let iterateNode = this.firstNode;
		while (iterateNode) {
			if (node.data < iterateNode.data) {
				if (!iterateNode.left) {
					iterateNode.left = node;
					return;
				}
				iterateNode = iterateNode.left;
			}
			if (node.data > iterateNode.data) {
				if (!iterateNode.right) {
					iterateNode.right = node;
					return;
				}
				iterateNode = iterateNode.right;
			}
			if (node.data === iterateNode.data) {
				return;
			}
		}
	}

	has(data) {
		return this.find(data) ? true : false;
	}

	find(data) {
		if (data === this.firstNode.data) {
			return this.firstNode;
		}
		let iterateNode = this.firstNode;
		while (iterateNode) {
			if (data === iterateNode.data) {
				return iterateNode;
			} else if (data < iterateNode.data) {
				iterateNode = iterateNode.left;
			} else if (data > iterateNode.data) {
				iterateNode = iterateNode.right;
			} else {
				return iterateNode;
			}
		}
		return null;
	}

	remove(data) {
		if (this.firstNode === null) {
			return null;
		} else {
			this.firstNode = this.deleteNode(this.firstNode, data);
		}
	}

	findMinNode(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNode(node.left);
		}
	}

	deleteNode(currentNode, data) {
		if (data === currentNode.data) {
			if (currentNode.right === null) {
				return currentNode.left;
			}
			if (currentNode.left === null) {
				return currentNode.right;
			}
			if (currentNode.right === null && currentNode.left === null) {
				return null;
			} else {
				let minNode = this.findMinNode(currentNode.right);
				currentNode.data = minNode.data;
				currentNode.right = this.deleteNode(currentNode.right, minNode.data);
				return currentNode;
			}
		} else if (data < currentNode.data) {
			if (currentNode.left === null) {
				return currentNode;
			} else {
				currentNode.left = this.deleteNode(currentNode.left, data);
				return currentNode;
			}
		} else if (data > currentNode.data) {
			if (currentNode.right === null) {
				return currentNode;
			} else {
				currentNode.right = this.deleteNode(currentNode.right, data);
				return currentNode;
			}
		}
	}

	min() {
		if (!this.firstNode) {
			return null;
		}
		let node = this.firstNode;
		while (node) {
			if (node.left) {
				node = node.left;
			} else {
				return node.data;
			}
		}
	}

	max() {
		if (!this.firstNode) {
			return null;
		}
		let node = this.firstNode;
		while (node) {
			if (node.right) {
				node = node.right;
			} else {
				return node.data;
			}
		}
	}


}

module.exports = {
  BinarySearchTree
};