const list = document.querySelector('#categories');
const listItems = list.querySelectorAll('.item');

console.log(`Numbers of categories: ${listItems.length}`);


listItems.forEach(item => {
    const heading = item.querySelector('h2');
    if (heading) {
        console.log(`Category: ${heading.textContent}`);
    }
    const elements = item.querySelectorAll('li');
    if (elements) {
        console.log(`Elements: ${elements.length}`);
    }
})
