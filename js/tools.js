
/**
 * 事件添加，兼容IE
 */
function addEvent(el, event, callback) {
	// 判断当前浏览器是否支持‘addEventListener’
	if ('addEventListener' in el) { // 如果支持，则直接使用‘addEventListener’
		el.addEventListener(event, callback, false);
	}else { // 如果不支持，就执行向下兼容的代码
		// 向下兼容的代码必须添加两个方法到事件处理程序要附加到的元素上。然后在元素上的事件触发时，使用attachEvent方法来调用他们
		// 元素触发事件执行方法，提示：方括号用来添加一个方法名到元素上，
		el['e' + event + callback] = callback;

		el[event + callback] = function () {
			el['e' + event + callback](window.event);
		};
		el.attachEvent('on' + event, el[event + callback]);
	}
}

/**
 * 获取元素节点
 */
function $(Selector) {
	// 异常处理
	if (typeof Selector != 'string' || Selector == '' || /\s/.test(Selector) == true) {
		return null;
	}
	if (/^#/.test(Selector) == true) {
		return document.getElementById(Selector.slice(1));
	}
	if (/^\./.test(Selector) == true) {
		return document.getElementsByClassName(Selector.slice(1));
	}
	return document.getElementsByTagName(Selector);
}

/**
 * 创建元素节点
 */

function addElement(parentNode, tagName, text, attr, styles) {
	if (parentNode == '' || tagName == '') {
		return null;
	}
	var tag = document.createElement(tagName);
	// 如果有文本节点，则添加文本节点
	if (typeof text != undefined) {
		var text = document.createTextNode(text);
		tag.appendChild(text);
	}
	// 如果有属性节点，则添加属性节点
	if (typeof attr != undefined) {
		for (var attrName in attr) {
			tag.setAttribute(attrName, attr[attrName]);
		}
	}
	if (typeof styles != undefined) {
		tag.style.cssText = styles;
	}
	parentNode.appendChild(tag);
}


/**
 * 添加class属性
 */
function addClass(el, className) {
	if (!className || (typeof className != 'string') || /^[0-9]/.test(className)) {
		return false;
	}else {
		el.classList.add(className);
		return true;
	}
}

/**
 * 删除class属性
 */
function delClass(el, className) {
	if (el.classList.contains(className)) {
		el.remove(className);
		return true;
	}else {
		return false;
	}
}















