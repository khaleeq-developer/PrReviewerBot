function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
      total += item.price;
    }
    return total;
  }
  
  function calculateDiscountedTotal(items, discount) {
    let total = 0;
    for (let item of items) {
      total += item.price * (1 - discount / 100);
    }
    return total;
  }
  