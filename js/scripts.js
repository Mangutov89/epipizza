function PizzaOrder() {
  this.orders = [],
  this.currentId = 0
}

PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaOrder.prototype.addOrder = function(order){
  order.id = this.assignId();
  this.orders.push(order);
}

PizzaOrder.prototype.deleteOrder = function(id) {
  for (var i=0; i< this.orders.length; i++) {
    if (this.orders[i]) {
      if (this.orders[i].id == id) {
        delete this.orders[i];
        return true;
      }
    }
  };
  return false;
}


PizzaOrder.prototype.findOrder = function(id) {
  for (var i=0; i< this.orders.length; i++) {
    if (this.orders[i]) {
      if (this.orders[i].id == id) {
        return this.orders[i];
      }
    }
  };
  return false;
}

function Pizza(size, crust, type, item) {
  this.size = size,
  this.crust = crust,
  this.type = type,
  this.item = item,
  this.price = 14
}

Pizza.prototype.fullDestination = function() {
  return this.date + " " + this.country + " " + this.city;
}

Pizza.prototype.findPriceBySize = function(id) {
  if (this.size === "Small") {
    this.price += 0;
  } else if (this.size === "Medium") {
    this.price += 2;
  } else if (this.size === "Large") {
    this.price += 4;
  }
}

Pizza.prototype.findPriceByCrust = function(id) {
  if (this.crust === "Normal") {
    this.price += 0;
  } else if (this.crust === "Thin Crust") {
    this.price += 2;
  } else if (this.crust === "Stu=ffed Crust") {
    this.price += 4;
  }
}

Pizza.prototype.findPriceByType = function(id) {
  if (this.type === "Cheese") {
    this.price += 0;
  } else if (this.type === "Pepperoni") {
    this.price += 2;
  } else if (this.type === "Meat Lovers") {
    this.price += 4;
  } else if (this.type === "Supreme") {
    this.price += 6;
  }
}

Pizza.prototype.findPriceByItem = function(id) {
  if (this.item === "Soda") {
    this.price += 1;
  } else if (this.item === "Ice Cream") {
    this.price += 2;
  } else if (this.item === "Garlic Bread") {
    this.price += 3;
  }
}

var pizzaOrder = new PizzaOrder();

function displayOrderDetails(orderToDisplay) {
  var orderList = $("ul#orders");
  var htmlForOrderInfo = "";
  orderToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li id=" + order.id + ">" + order.size + " Pizza " + order.type + "</li>";
  });
  orderList.html(htmlForOrderInfo)
};

function attachOrderListeners() {
  $("ul#orders").on("click", "li", function() {
    showOrders(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    pizzaOrder.deleteOrder(this.id);
    $("#show-orders").hide();
    displayOrderDetails(pizzaOrder);
  });
};

function showOrders(ordersId) {
  var order = pizzaOrder.findOrder(ordersId);
  $("show-orders").show();
  $(".pizza-size").html(order.size + " Size");
  $(".pizza-crust").html(order.crust);
  $(".pizza-type").html(order.type);
  $(".item").html(order.item);
  $(".total").html("$ " + order.price);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + order.id + ">Delete Order</button>")
};

$(document).ready(function() {
  attachOrderListeners();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#pizza-size").val();
    var inputCrust = $("#pizza-crust").val();
    var inputType = $("#pizza-type").val();
    var inputItem = $("#item").val();

    var newOrder = new Pizza(inputSize, inputCrust, inputType, inputItem);
    newOrder.findPriceBySize();
    newOrder.findPriceByCrust();
    newOrder.findPriceByType();
    newOrder.findPriceByItem();
    console.log(newOrder.price);
    pizzaOrder.addOrder(newOrder);
    displayOrderDetails(pizzaOrder);
    console.log(newOrder);

  });
});


















































// function Pizza (userName, pizzaTopping, pizzaSize) {
//   this.name = userName
//   this.pizzaTopping = pizzaTopping,
//   this.pizzaSize = pizzaSize,
//   this.price = 20;
// }
//
// Pizza.prototype.calculatePizzaTopping = function() {
//   if (this.pizzaTopping === "1") {
//     return this.price -= 4;
//   } else if (this.pizzaTopping === "2") {
//     return this.price -= 2;
//   } else if (this.pizzaTopping === "3") {
//     return this.price += 2;
//   } else if (this.pizzaTopping === "4") {
//     return this.price += 4;
//   }
// }
//
// Pizza.prototype.calculatePizzaSize = function() {
//   if (this.pizzaSize === "1") {
//     return this.price -= 3;
//   } else if (this.pizzaSize === "2") {
//     return this.price -= 1;
//   } else if (this.pizzaSize === "3") {
//     return this.price += 2;
//   }
// }
//
// Pizza.prototype.total =function() {
//   calculatePizzaTopping(this.pizzaTopping);
//   calculatePizzaSize(this.pizzaSize);
// }
//
// // UI
// $(document).ready(function() {
//   $("#pizzaorder").submit(function(event) {
//     event.preventDefault();
//     var userName = $("#nameInput").val();
//     var pizzaTopping = $("#pizzatypes").val();
//     var pizzaSize = $("#pizzasizes").val();
//     var newPizzaOrder = new Pizza(userName, pizzaTopping, pizzaSize);
//     $("#output").text(userName + " your pizza will be $" + newPizzaOrder.total());
//   });
// });
