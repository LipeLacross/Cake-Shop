let cartItems = [];
let total = 0;

function addToCart(product, price) {
    cartItems.push({ product, price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';
    cartItems.forEach((item, index) => {
        cartItemsElement.innerHTML += `
      <li>
        ${item.product} - R$ ${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Remover</button>
      </li>
    `;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
