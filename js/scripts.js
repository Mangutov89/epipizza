function PizzaOrder() {
  this.orders = [],
  this.currentId = 0
}

PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaOrder.prototype.addEntry = function(order){
  order.id = this.assignId();
  this.entries.push(order);
}

PizzaOrder.prototype.deleteOrder = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}


PizzaOrder.prototype.findOrder = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
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

var pizzaOrder = new PizzaOrder();

function displayOrderDetails(orderToDisplay) {
  var orderList = $("ul#orders");
  var htmlForOrderInfo = "";
  orderToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li id=" + order.id + ">" + order.size + " and " + order.crust + "</li>";
  });
  orderList.html(htmlForOrderInfo)
};

function attachOrderListeners() {
  $("ul#orders").on("click", "li", function() {
    showOrders(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    orders.deleteOrder(this.id);
    $("#show-orders").hide();
    displayOrderDetails(orders);
  });
};

function showOrders(ordersId) {
  var order = pizzaOrder.findOrder(ordersId);
  $("show-orders").show();
  $(".pizza-size").html(order.size);
  $(".pizza-crust").html(order.crust);
  $(".pizza-type").html(order.type);
  $(".item").html(order.item);
  $(".total").html(order.total);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + order.id + ">Delete Order</button>")
};

$(document).ready(function() {
  attachOrderListeners();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedCity = $("#new-city-destination").val();
    var inputtedCountry = $("#new-country-destination").val();
    var inputtedDate = $("#new-date-travel").val();
    var inputtedDuration = $("#new-duration-trip").val();
    var inputtedLandmark = $("#new-landmark").val();
    var inputtedNote = $("#new-notes").val();

    var newOrder = new Pizza(inputtedCity, inputtedCountry, inputtedDate, inputtedDuration, inputtedLandmark, inputtedNote);
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
