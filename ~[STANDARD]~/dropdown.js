const expand = {
	"doc_main": `
		<li><ts><a href="info/introduction.html">Introduction</a></ts></li>
		<li><ts><a href="info/reserved.html">Reserved expressions</a></ts></li>
		<li><ts><a href="info/preprocessor.html">Preprocessor</a></ts></li>
		<li><ts>Expressions</ts></li>
		<li><ts>Initialisation</ts></li>
		<li><ts>Standard library</ts></li>`
};

let dropdown = (element, content_id) => {
    const ul = element.nextElementSibling;
    if (ul && ul.tagName === 'UL') {
        ul.remove();
    } else {
        const expanded = document.createElement('ul');
        expanded.innerHTML = expand[content_id];
        element.after(expanded);
    }
};

