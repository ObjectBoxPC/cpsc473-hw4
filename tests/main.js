var window = {};
eval(require('fs').readFileSync('scripts/datastore.js', 'utf8'));
eval(require('fs').readFileSync('scripts/truck.js', 'utf8'));
eval(require('fs').readFileSync('tests/test_datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/test_truck.js', 'utf8'));
