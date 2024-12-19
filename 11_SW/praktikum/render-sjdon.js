function renderSJDON(element, parent) {
    if (!Array.isArray(element)) {
        parent.appendChild(document.createTextNode(element));
        return;
    }

    const tagName = element[0];
    
    let attributes = {};
    let children = [];

    if (element.length > 1) {
        if (typeof element[1] === 'object' && !Array.isArray(element[1])) {
            attributes = element[1];
            children = element.slice(2);
        } else {
            children = element.slice(1);
        }
    }

    const processedChildren = children.map(child => {
        if (Array.isArray(child)) {
            const temp = document.createElement('div');
            renderSJDON(child, temp);
            return temp.firstChild;
        }
        return child;
    });

    const node = elt(tagName, attributes, ...processedChildren);
    parent.appendChild(node);
}

function elt(type, attrs, ...children) {
	let node = document.createElement(type)
	Object.keys(attrs).forEach(key => {
		node.setAttribute(key, attrs[key])
	})
	for (let child of children) {
		if (typeof child != "string") node.appendChild(child)
		else node.appendChild(document.createTextNode(child))
	}
	return node
}

