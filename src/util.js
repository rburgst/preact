import { EMPTY_ARR } from './constants';

export const isArray = Array.isArray;
export const assign = Object.assign;
export const slice = EMPTY_ARR.slice;

/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {preact.ContainerNode} node The node to remove
 */
export function removeNode(node) {
	let parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}
