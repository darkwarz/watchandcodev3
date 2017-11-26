var todoList = {  
  todos: ['item 1', 'item 2', 'item 3']
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  }
};


//var myComputer = {
//    operatingSystem: 'mac',
//    screenSize: '15 inches',
//    purchaseYear: 2011
//};

//myComputer 
//Object {operartingSystem:"mac", screenSize: "15 inches", purchaseYear: 2011}
//myComputer.operatingSystem
//operatingSystem: mac

//var gordon = {
//    name: 'Gordon',
//    sayName: function() {
//        console.log(this.name);
//        }
//    }
//gordon.sayName();
//Object {name: "Gordon"}