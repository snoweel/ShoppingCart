var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

// router.get('/people', getPeople);
router.get('/shoppingCart', getShoppingCart);
router.get('/shoppingCart/:id', getShoppingCartById);
// router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

// function getPeople(req, res, next) {
//   res.status(200).send(data.people);
// }

function getShoppingCart(req, res, next) {
  res.status(200).send(data.shoppingCart);
}
function getShoppingCartById(req, res, next) {
  var id = +req.params.id;
  var cart = data.shoppingCart.filter(function(p) {
    return p.id === id;
  })[0];

  if (cart) {
    res.status(200).send(cart);
  } else {
    four0four.send404(req, res, 'cart for  ' + id + ' not found');
  }
}

// function getPerson(req, res, next) {
//   var id = +req.params.id;
//   var person = data.people.filter(function(p) {
//     return p.id === id;
//   })[0];
//
//   if (person) {
//     res.status(200).send(person);
//   } else {
//     four0four.send404(req, res, 'person ' + id + ' not found');
//   }
// }
