function Pizza (userName, pizzaTopping, pizzaSize) {
  this.name = userName
  this.pizzaTopping = pizzaTopping,
  this.pizzaSize = pizzaSize,
  this.price = 20;
}

Pizza.prototype.calculatePizzaTopping = function() {
  if (this.pizzaTopping === "1") {
    return this.price -= 4;
  } else if (this.pizzaTopping === "2") {
    return this.price -= 2;
  } else if (this.pizzaTopping === "3") {
    return this.price += 2;
  } else if (this.pizzaTopping === "4") {
    return this.price += 4;
  }
}

Pizza.prototype.calculatePizzaSize = function() {
  if (this.pizzaSize === "1") {
    return this.price -= 3;
  } else if (this.pizzaSize === "2") {
    return this.price -= 1;
  } else if (this.pizzaSize === "3") {
    return this.price += 2;
  }
}

Pizza.prototype.total =function() {
  calculatePizzaTopping(this.pizzaTopping);
  calculatePizzaSize(this.pizzaSize);
}

// UI
$(document).ready(function() {
  $("#pizzaorder").submit(function(event) {
    event.preventDefault();
    var userName = $("#nameInput").val();
    var pizzaTopping = $("#pizzatypes").val();
    var pizzaSize = $("#pizzasizes").val();
    var newPizzaOrder = new Pizza(userName, pizzaTopping, pizzaSize);
    $("#output").text(userName + " your pizza will be $" + newPizzaOrder.total());
  });
});
