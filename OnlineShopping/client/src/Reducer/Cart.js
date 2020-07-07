import * as Types from '../constants/ActionTypes';
let data = JSON.parse(localStorage.getItem('CART'));
const ProductsCartInitialState = data ? data : [];

const Cart = (state = ProductsCartInitialState, action) => {
  let { product, quantity } = action;
  let index = -1; //khong tim duoc -> index = -1
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state = [...state, { product, quantity }];
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];

    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];

    case 'RESET_CART':
      state = [];
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
};
let findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default Cart;
// const ProductsCartInitialState = [
//   {
//     product: {
//       id: '1',
//       name: 'Hight Space Sneakers',
//       price: 993,
//       oldPrice: 1247,
//       src: ['001-b.jpg', '001-a.jpg'],
//       status: false,
//       productPortfolio: 'footwear',
//       sale: true,
//     },
//     quantity: 5,
//   },
//   {
//     product: {
//       id: '1',
//       name: 'Hight Space Sneakers',
//       price: 293,
//       oldPrice: 1247,
//       src: ['001-b.jpg', '001-a.jpg'],
//       status: false,
//       productPortfolio: 'footwear',
//       sale: true,
//     },
//     quantity: 3,
//   },
//   {
//     product: {
//       id: '1',
//       name: 'Hight Space Sneakers',
//       price: 193,
//       oldPrice: 1247,
//       src: ['001-b.jpg', '001-a.jpg'],
//       status: false,
//       productPortfolio: 'footwear',
//       sale: true,
//     },
//     quantity: 2,
//   },
//   {
//     product: {
//       id: '1',
//       name: 'Hight Space Sneakers',
//       price: 93,
//       oldPrice: 1247,
//       src: ['001-b.jpg', '001-a.jpg'],
//       status: false,
//       productPortfolio: 'footwear',
//       sale: true,
//     },
//     quantity: 1,
//   },
// ];
//   {
//     id: '1',
//     name: 'Hight Space Sneakers',
//     price: 993,
//     oldPrice: 1247,
//     src: ['001-b.jpg', '001-a.jpg'],
//     status: false,
//     productPortfolio: 'footwear',
//     sale: true,
//   },
//   {
//     id: '2',
//     name: 'iPhone 7',
//     price: 669,
//     oldPrice: 799,
//     src: ['002-b.jpg', '002-a.jpg'],
//     status: false,
//     productPortfolio: 'digital-goods',
//     sale: true,
//   },
//   {
//     id: '3',
//     name: 'Space hoodie',
//     price: 538,
//     oldPrice: 789,
//     src: ['003-b.jpg', '003-a.jpg'],
//     status: false,
//     productPortfolio: 'hoodies',
//     sale: false,
//   },
// ];
