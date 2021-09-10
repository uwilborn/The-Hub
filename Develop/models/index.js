const User = require('./User');
const Books = require('./books')
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

/*Constructors Here?*/
// class Model {
//   constructor() {}
// }

// class View {
//   constructor() {}
// }

// class Controller {
//   constructor(model, view) {
//     this.model = model
//     this.view = view
//   }
// }

// const app = new Controller(new Model(), new View())
module.exports = { User, Project };
