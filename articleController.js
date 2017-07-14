const Article = require('./article');
const mongoose = require('mongoose');
const _ = require('lodash');


exports.ArticleList = (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) {
      return done(err);
    } else {
      res.render('viewAll.ejs', { articles: articles });
    }
  });
}

 exports.CreateArticle = (req, res) => {
   const a = new Article();

   const { title, subtitle, body } = req.body;

   a.title = title;
   a.subtitle = subtitle;
   a.body = _.escape(body);
   a.created_at = new Date();

   a.save((err) => {
     if (err) {
       throw err;
     }
     res.redirect(200, '/');
   });
 }

exports.GetArticle = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err)
      throw err;
    else {
      article.body = _.unescape(article.body);
      res.render('editArticle.ejs', { article : article })
    }
  });
}

exports.UpdateArticle = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) throw err;

    const { title, subtitle, body } = req.body;
    article.title = title;
    article.subtitle = subtitle;
    article.body = _.escape(body);
    article.updated_at = new Date();

    article.save((err) => {
      if (err) throw err;
      res.redirect(200, '/');
    });
  });
}

exports.DeleteArticle = (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err) => {
    if (err)
     throw err;
    else {
      res.redirect(200, '/');
    }
  });
}
