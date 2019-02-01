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
  this.size = size
  this.crust = crust,
  this.type = type
  this.item = item
  this.price = 8
}

Pizza.prototype.fullDestination = function() {
  return this.date + " " + this.country + " " + this.city;
}

var logBook = new LogBook();

function displayEntryDetails(logBookToDisplay) {
  var entryList = $("ul#places");
  var htmlForEntryInfo = "";
  logBookToDisplay.entries.forEach(function(place) {
    htmlForEntryInfo += "<li id=" + place.id + ">" + place.country + " and " + place.city + "</li>";
  });
  entryList.html(htmlForEntryInfo)
};

function attachEntryListeners() {
  $("ul#places").on("click", "li", function() {
    showEntries(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    logBook.deleteEntry(this.id);
    $("#show-places").hide();
    displayEntryDetails(logBook);
  });
};

function showEntries(entriesId) {
  var entry = logBook.findEntry(entriesId);
  $("show-places").show();
  $(".city-destination").html(entry.city);
  $(".country-destination").html(entry.country);
  $(".date-travel").html(entry.date);
  $(".duration-trip").html(entry.duration);
  $(".landmark").html(entry.landmark);
  $(".notes").html(entry.note);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + entry.id + ">Delete</button>")
};

$(document).ready(function() {
  attachEntryListeners();
  $("form#new-log").submit(function(event) {
    event.preventDefault();
    var inputtedCity = $("#new-city-destination").val();
    var inputtedCountry = $("#new-country-destination").val();
    var inputtedDate = $("#new-date-travel").val();
    var inputtedDuration = $("#new-duration-trip").val();
    var inputtedLandmark = $("#new-landmark").val();
    var inputtedNote = $("#new-notes").val();

    $("#new-city-destination").val("");
    $("#new-country-destination").val("");
    $("#new-date-travel").val("");
    $("#new-duration-trip").val("");
    $("#new-landmark").val("");
    $("#new-notes").val("");

    var newEntry = new Pizza(inputtedCity, inputtedCountry, inputtedDate, inputtedDuration, inputtedLandmark, inputtedNote);
    logBook.addEntry(newEntry);
    displayEntryDetails(logBook);
    console.log(newEntry);

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
