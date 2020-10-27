var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/list', function() {
  // Load Mongoose models
  seeder.loadModels([
    'models/listModel.js',
    
  ]);
  // Clear specified collections
  seeder.clearModels(['list'], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});
// Data array containing seed data - documents organized by Model
var data = [
	{
		'model': 'list',
		'documents': [
			{
				'name': 'Doc1',
				'value': "city"
			},
			{
				'username': 'Doc2',
				'value': "DC"
			}
		]
	}
];