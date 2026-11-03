// store cart items
let cart = [];

// Add an item
function addItem(name, quantity, price) {
  cart.push({
    name: name,
    quantity: quantity,
    price: price,
  });

  console.log(`${name} added to the cart.`);
}

// Display all items and the total price
function viewCart() {
  console.log("\n--- Shopping Cart ---");

  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.quantity * item.price;

    console.log(
      `${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`,
    );

    total += itemTotal;
  });

  console.log(`Total: ${total.toFixed(2)} TND`);
}

// Remove an item by name
function removeItem(name) {
  const initialLength = cart.length;

  cart = cart.filter((item) => item.name !== name);

  if (cart.length === initialLength) {
    console.log(`${name} was not found in the cart.`);
  } else {
    console.log(`${name} removed from the cart.`);
  }
}

// Clear all cart items
function clearCart() {
  cart = [];
  console.log("Cart cleared.");
}

// Demonstration

addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);

viewCart();

removeItem("Apple");

viewCart();

clearCart();

viewCart();
