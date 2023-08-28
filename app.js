const ul = document.querySelector('ul') ;
const button = document.querySelector('button') ;

button.addEventListener('click', function () {
    const rnd = Math.ceil(Math.random()*1000) ;
    const name = `Product-${rnd}` ;
    products.push({ name }) ;
    renderProducts();
})

const products = [
    {name: 'foo'},
    {name: 'drum'},
    {name: 'cap'},
    {name: 'hat'},
    {name: 'face'},
    
] 

function renderProducts () {
    const html = products.map(function(product){
        return `<li> ${product.name} </li>` ;
    }).join('') ;
    ul.innerHTML = html;
}

renderProducts();