module.exports = {
  // people: getPeople(),
  shoppingCart: getShoppingCart()
};

// function getPeople() {
//   return [
//     { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
//     { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
//     { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
//     { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
//     { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
//     { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
//     { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
//     { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
//   ];
// }

function getShoppingCart() {
  return [{
    id: 1,
    firstName: 'Snoweel',
    'productsInCart': [{
      "p_id": "1",
      "p_name": "cotton tshirt",
      "p_variation": "solid green",
      "p_style": "ms13kt1906",
      "p_selected_color": {
        "name": "blue",
        "hexcode": "#1169BD"
      },
      "p_selected_size": {
        "name": "small",
        "code": "s"
      },
      "p_available_options": {
        "colors": [{
          "name": "green",
          "hexcode": "#A3D2A1"
        }, {
          "name": "yellow",
          "hexcode": "#F9F8E6"
        }, {
          "name": "red",
          "hexcode": "#ED99A8"
        }],
        "sizes": [{
          "name": "small",
          "code": "s"
        }, {
          "name": "medium",
          "code": "m"
        }, {
          "name": "large",
          "code": "l"
        }, {
          "name": "extra large",
          "code": "xl"
        }]
      },
      "p_quantity": 1,
      "p_originalprice": 11.0,
      "p_price": 11.0,
      "c_currency": "$"
    }, {
      "p_id": "2",
      "p_name": "print girls tee",
      "p_variation": "pink rainbow",
      "p_style": "ms13kt1906",
      "p_selected_color": {
        "name": "pink",
        "hexcode": "#F1DDEF"
      },
      "p_selected_size": {
        "name": "small",
        "code": "s"
      },
      "p_available_options": {
        "colors": [{
          "name": "green",
          "hexcode": "#A3D2A1"
        }, {
          "name": "yellow",
          "hexcode": "#F9F8E6"
        }, {
          "name": "pink",
          "hexcode": "#F1DDEF"
        }],
        "sizes": [{
          "name": "small",
          "code": "s"
        }, {
          "name": "medium",
          "code": "m"
        }, {
          "name": "large",
          "code": "l"
        }, {
          "name": "extra large",
          "code": "xl"
        }]
      },
      "p_quantity": 1,
      "p_originalprice": 17.0,
      "p_price": 17.0,
      "c_currency": "$"
    }, {
      "p_id": "3",
      "p_name": "flower pattern shirt",
      "p_variation": "blue",
      "p_style": "ms13kt1906",
      "p_selected_color": {
        "name": "blue",
        "hexcode": "#1169BD"
      },
      "p_selected_size": {
        "name": "small",
        "code": "s"
      },
      "p_available_options": {
        "colors": [{
          "name": "green",
          "hexcode": "#A3D2A1"
        }, {
          "name": "blue",
          "hexcode": "#1169BD"
        }, {
          "name": "red",
          "hexcode": "#ED99A8"
        }],
        "sizes": [{
          "name": "small",
          "code": "s"
        }, {
          "name": "medium",
          "code": "m"
        }, {
          "name": "large",
          "code": "l"
        }, {
          "name": "extra large",
          "code": "xl"
        }]
      },
      "p_quantity": 1,
      "p_originalprice": 21.0,
      "p_price": 9.0,
      "c_currency": "$"
    }, {
      "p_id": "4",
      "p_name": "check pattern tshirt",
      "p_variation": "mens red",
      "p_style": "ms13kt1906",
      "p_selected_color": {
        "name": "red",
        "hexcode": ""
      },
      "p_selected_size": {
        "name": "small",
        "code": "s"
      },
      "p_available_options": {
        "colors": [{
          "name": "green",
          "hexcode": "#A3D2A1"
        }, {
          "name": "yellow",
          "hexcode": "#F9F8E6"
        }, {
          "name": "red",
          "hexcode": "#ED99A8"
        }],
        "sizes": [{
          "name": "small",
          "code": "s"
        }, {
          "name": "medium",
          "code": "m"
        }, {
          "name": "large",
          "code": "l"
        }, {
          "name": "extra large",
          "code": "xl"
        }]
      },
      "p_quantity": 1,
      "p_originalprice": 22.0,
      "p_price": 22.0,
      "c_currency": "$"
    }]
  }];
}
