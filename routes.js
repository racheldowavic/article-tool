const articleController = require('./articleController');

module.exports = (app) => {

  app.get('/', articleController.ArticleList);
  app.get('/new', (req, res) => {
    res.render('create.ejs');
  });
  app.post('/new', articleController.CreateArticle);
  app.get('/:id', articleController.GetArticle);
  app.post('/:id/delete', articleController.DeleteArticle);
  app.post('/:id/update', articleController.UpdateArticle);
}
