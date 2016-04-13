
const unknownCategory = require('./images/category-undefined.png');

const iconMap = {
  restaurant : require('./images/restaurant.png'),
  shopping : require('./images/clothes.png'),
  bar : require('./images/bar.png'),
  coffee : require('./images/coffee.png'),
  'museum-art' : require('./images/museum_art.png'),
  groceries : require('./images/supermarket.png'),
  books : require('./images/books.png'),
  hotel : require('./images/hotel.png'),
  garden : require('./images/garden.png'),
  hiking : require('./images/hiking.png'),
  sports : require('./images/sports.png')
};


export default {

  getIcon( category ) {
    return category ? iconMap[category] : unknownCategory;
  },


  getCategories() {
    return Object.keys( iconMap ).map( (key) => {
      return { icon: iconMap[key], category: key };
    });
  }

};