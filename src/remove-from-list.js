const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
	let list = {};
	list.head = l;

	function indexOfEl(element) {
		let current = list.head;
		let index = 0;
		while (current) {
			if (current.value === element) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}

	function removeAt(position) {
		let current = list.head;
		if (position === 0) {
			if (current.next) {
				list.head = current.next;
			} else {
				list.head = null;
			}
		} else {
			let prev = null;
			let index = 0;
			while (index < position) {
				prev = current;
				current = current.next;
				index++;
			}
			prev.next = current.next;
		}
		return list.head;
	}
	while (indexOfEl(k) > -1) {
		removeAt(indexOfEl(k));
	}
	
	return list.head;
}

module.exports = {
  removeKFromList
};
