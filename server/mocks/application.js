module.exports = function(app) {
  var express = require('express');
  var applicationRouter = express.Router();

  applicationRouter.get('/locales', function(req, res) {
    res.send({
      'ui': {
        'application': {
          'nav': {
            'home': 'Home',
            'list': 'List',
            'new': 'New post'
          }
        },
        'blogy': {
          'post': {
            'edit': {
              'all': 'View all',
              'edit': 'Edit',
              'view': 'View'
            }
          }
        }
      }
    });
  });

  app.use('/api', applicationRouter);
};
