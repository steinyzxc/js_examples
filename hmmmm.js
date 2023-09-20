var elementToRemove = document.getElementById("hihihaha");
if (elementToRemove) {
  elementToRemove.remove();
}
let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://github.com/steinyzxc/js_examples/bebra.css';
head.appendChild(link);
