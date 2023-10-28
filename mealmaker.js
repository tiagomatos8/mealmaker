const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
        return this._appetizers;
    },
    set appetizers(newAppetizer) {
        this._appetizers = newAppetizer;
    },
    get mains() {
        return this._mains;
    },
    set mains(newMain) {
        this._mains = newMain;
    },
    get desserts() {
        return this._desserts;
    },
    set desserts(newDessert) {
        this._desserts = newDessert;
    },

  },

  get courses() {
      return {
          appetizers: this._courses.appetizers,
          mains: this._courses._mains,
          desserts: this._courses._desserts
      };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
        name: dishName,
        price: dishPrice
    }
    
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  },

  generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');

      let totalPrice = appetizer.price + main.price + dessert.price;

      return `Meal ordered: 
            \nAppetizer: ${appetizer.name} 
            \nMain: ${main.name} 
            \nDessert: ${dessert.name} 
            \nTotal price $${totalPrice}`;
  }
}

menu.addDishToCourse('appetizers', 'Salada grega', 15);
menu.addDishToCourse('appetizers', 'Salada russa', 13);
menu.addDishToCourse('appetizers', 'Maionese', 18);
menu.addDishToCourse('appetizers', 'Milho', 20);

menu.addDishToCourse('mains', 'Churrasco de gato', 150);
menu.addDishToCourse('mains', 'Feijoada', 100);
menu.addDishToCourse('mains', 'Strognofe de camarao', 130);
menu.addDishToCourse('mains', 'Dobradinha', 50);

menu.addDishToCourse('desserts', 'Bolo de milho', 20);
menu.addDishToCourse('desserts', 'Pudim de leite', 22);
menu.addDishToCourse('desserts', 'Nega maluca', 26);
menu.addDishToCourse('desserts', 'SAgui', 25);

console.log(menu.courses);
console.log(menu.generateRandomMeal());

