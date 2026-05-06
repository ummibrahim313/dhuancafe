// Complete menu data for Dhuan Cafe
import kashmirichai from '../assets/images/menu/kashmirichai.jpg';
import doodhpatti from '../assets/images/menu/doodhpatti.jpeg';
import shahiqahwa from '../assets/images/menu/shahiqahwa.jpg';
import adrakchai from '../assets/images/menu/adrakchai.jpeg';
import noonchai from '../assets/images/menu/noonchai.jpeg';
import haldidoodh from '../assets/images/menu/haldidoodh.jpeg';
import coldbrew from '../assets/images/menu/coldbrew.jpg';
import cappucino from '../assets/images/menu/cappucino.jpeg';
import expresso from '../assets/images/menu/expresso.jpeg';
import caramellatte from '../assets/images/menu/caramellatte.jpeg';
import icedamericano from '../assets/images/menu/icedamericano.jpeg';
import flatwhite from '../assets/images/menu/flatwhite.jpeg';
import bunkebab from '../assets/images/menu/bunkebab.jpg';
import cheesenaan from '../assets/images/menu/cheesenaan.jpeg';
import chickenpatties from '../assets/images/menu/chickenpatties.jpeg';
import omelette from '../assets/images/menu/omelette.jpeg';
import aalooparatha from '../assets/images/menu/aalooparatha.jpeg';
import clubsandwich from '../assets/images/menu/clubsandwich.jpeg';
import gulabjamun from '../assets/images/menu/gulabjamun.jpeg';
import kheer from '../assets/images/menu/kheer.jpeg';
import brownie from '../assets/images/menu/brownie.jpeg';
import gajarhalwa from '../assets/images/menu/gajarhalwa.jpeg';
import chocolatemousse from '../assets/images/menu/chocolatemousse.jpeg';


export const menuItems = [
  // CHAI Category
  {
    id: 1,
    name: 'Kashmiri Chai',
    price: 250,
    category: 'CHAI',
    description: 'Traditional pink chai with cardamom & cream',
    rating: 4.8,
    isPopular: true,
    image: kashmirichai,
  },
  {
    id: 2,
    name: 'Doodh Patti',
    price: 180,
    category: 'CHAI',
    description: 'Pure milk tea with premium tea leaves',
    rating: 4.6,
    isPopular: false,
    image: doodhpatti,
  },
  {
    id: 3,
    name: 'Shahi Qahwa',
    price: 300,
    category: 'CHAI',
    description: 'Royal green tea with saffron & almonds',
    rating: 4.9,
    isPopular: true,
    image: shahiqahwa,
  },
  {
    id: 4,
    name: 'Adrak Chai',
    price: 150,
    category: 'CHAI',
    description: 'Spiced ginger tea with aromatic flavors',
    rating: 4.5,
    isPopular: false,
    image: adrakchai,
  },
  {
    id: 5,
    name: 'Noon Chai',
    price: 280,
    category: 'CHAI',
    description: 'Salted pink tea with butter and nuts',
    rating: 4.7,
    isPopular: false,
    image: noonchai,
  },
  {
    id: 6,
    name: 'Haldi Doodh',
    price: 200,
    category: 'CHAI',
    description: 'Golden turmeric milk with health benefits',
    rating: 4.4,
    isPopular: false,
    image: haldidoodh,
  },

  // COFFEE Category
  {
    id: 7,
    name: 'Cold Brew',
    price: 350,
    category: 'COFFEE',
    description: '12-hour steeped cold brew, smooth & bold',
    rating: 4.7,
    isPopular: true,
    image: coldbrew,
  },
  {
    id: 8,
    name: 'Cappuccino',
    price: 320,
    category: 'COFFEE',
    description: 'Espresso with steamed milk foam',
    rating: 4.6,
    isPopular: false,
    image: cappucino,
  },
  {
    id: 9,
    name: 'Espresso',
    price: 280,
    category: 'COFFEE',
    description: 'Rich, bold shot of premium Arabica',
    rating: 4.5,
    isPopular: false,
    image: expresso,
  },
  {
    id: 10,
    name: 'Caramel Latte',
    price: 380,
    category: 'COFFEE',
    description: 'Sweet caramel syrup with smooth espresso',
    rating: 4.8,
    isPopular: true,
    image: caramellatte,
  },
  {
    id: 11,
    name: 'Iced Americano',
    price: 300,
    category: 'COFFEE',
    description: 'Espresso shots over cold water and ice',
    rating: 4.4,
    isPopular: false,
    image: icedamericano,
  },
  {
    id: 12,
    name: 'Flat White',
    price: 290,
    category: 'COFFEE',
    description: 'Double ristretto with microfoam milk',
    rating: 4.6,
    isPopular: false,
    image: flatwhite,
  },

  // FOOD Category
  {
    id: 13,
    name: 'Bun Kebab',
    price: 220,
    category: 'FOOD',
    description: 'Crispy bun with spiced beef patty & chutney',
    rating: 4.9,
    isPopular: true,
    image: bunkebab,
  },
  {
    id: 14,
    name: 'Cheese Naan',
    price: 280,
    category: 'FOOD',
    description: 'Soft naan with melted cheese and herbs',
    rating: 4.7,
    isPopular: false,
    image: cheesenaan,
  },
  {
    id: 15,
    name: 'Chicken Patties',
    price: 250,
    category: 'FOOD',
    description: 'Flaky pastry with spiced chicken filling',
    rating: 4.6,
    isPopular: false,
    image: chickenpatties,
  },
  {
    id: 16,
    name: 'Desi Omelette',
    price: 200,
    category: 'FOOD',
    description: 'Fluffy omelette with desi spices and herbs',
    rating: 4.5,
    isPopular: false,
    image: omelette,
  },
  {
    id: 17,
    name: 'Aloo Paratha',
    price: 180,
    category: 'FOOD',
    description: 'Stuffed flatbread with spiced potatoes',
    rating: 4.8,
    isPopular: false,
    image: aalooparatha,
  },
  {
    id: 18,
    name: 'Club Sandwich',
    price: 320,
    category: 'FOOD',
    description: 'Triple-layer sandwich with chicken and veggies',
    rating: 4.7,
    isPopular: true,
    image: clubsandwich,
  },

  // DESSERTS Category
  {
    id: 19,
    name: 'Gulab Jamun',
    price: 150,
    category: 'DESSERTS',
    description: 'Sweet milk balls in rose syrup',
    rating: 4.8,
    isPopular: false,
    image: gulabjamun,
  },
  {
    id: 20,
    name: 'Kheer',
    price: 200,
    category: 'DESSERTS',
    description: 'Traditional rice pudding with nuts',
    rating: 4.6,
    isPopular: false,
    image: kheer,
  },
  {
    id: 21,
    name: 'Brownie',
    price: 250,
    category: 'DESSERTS',
    description: 'Chocolate brownie with walnuts',
    rating: 4.9,
    isPopular: true,
    image: brownie,
  },
  {
    id: 22,
    name: 'Gajar Halwa',
    price: 180,
    category: 'DESSERTS',
    description: 'Carrot pudding with ghee and nuts',
    rating: 4.7,
    isPopular: false,
    image: gajarhalwa,
  },
  {
    id: 23,
    name: 'Chocolate Mousse',
    price: 280,
    category: 'DESSERTS',
    description: 'Light and airy chocolate dessert',
    rating: 4.8,
    isPopular: false,
    image: chocolatemousse,
  }
];
