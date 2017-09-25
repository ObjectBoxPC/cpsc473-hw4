var window = {};
eval(require('fs').readFileSync('../scripts/datastore.js', 'utf8'));
eval(require('fs').readFileSync('../scripts/truck.js', 'utf8'));
eval(require('fs').readFileSync('test_datastore.js', 'utf8'));
eval(require('fs').readFileSync('test_truck.js', 'utf8'));