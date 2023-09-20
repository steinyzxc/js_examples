var elementToRemove = document.getElementById("hihihaha");
if (elementToRemove) {
  elementToRemove.remove();
}
let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';

link.href = 'https://steinyzxc.github.io/bebra.css';
head.appendChild(link);
