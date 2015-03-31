module.exports = function(app) {
  var express = require('express');
  var blogyPostsRouter = express.Router();

  blogyPostsRouter.get('/', function(req, res) {
    res.send({
      'blogy/posts': [{
          id: 1,
          title: 'Ember.js Guides',
          published: true,
          draft: false,
          locale: 'en',
          slug: 'ember-js-guides',
          format: 'html',
          storage: 'text',
          text: '<p>Welcome to the Ember.js guides! This documentation will take you from total beginner to Ember expert. It is designed to start from the basics, and slowly increase to more sophisticated concepts until you know everything there is to know about building awesome web applications.</p> <p>To help you get started, we\'ve also made a 30-minute screencast that will guide you through building a full-featured Ember.js application:</p> <p>Source code for the app we build in the video is available at  <a href="https://github.com/tildeio/bloggr-client">https://github.com/tildeio/bloggr-client</a></p> <p>Most of these guides are designed to help you start building apps right away. If you\'d like to know more about the thinking behind Ember.js, you\'ll find what you\'re looking for in the <a href="understanding-ember/the-view-layer/index.html"> Understanding Ember.js</a>section.</p> <p>These guides are written in Markdown and are <a href="https://github.com/emberjs/website/">available on GitHub</a>, inside the <code>source/guides</code> directory.  If there is something missing, or you find a typo or mistake, please help us by filing an issue or submitting a pull request. Thanks!</p> <p>We\'re excited for all of the great apps you\'re going to build with Ember.js. To get started, select a topic from the left. They are presented in the order that we think will be most useful to you as you\'re learning Ember.js, but you can also jump to whatever seems most interesting.</p> <p>Good luck!</p>',
          content: '<p>Welcome to the Ember.js guides! This documentation will take you from total beginner to Ember expert. It is designed to start from the basics, and slowly increase to more sophisticated concepts until you know everything there is to know about building awesome web applications.</p> <p>To help you get started, we\'ve also made a 30-minute screencast that will guide you through building a full-featured Ember.js application:</p> <p>Source code for the app we build in the video is available at  <a href="https://github.com/tildeio/bloggr-client">https://github.com/tildeio/bloggr-client</a></p> <p>Most of these guides are designed to help you start building apps right away. If you\'d like to know more about the thinking behind Ember.js, you\'ll find what you\'re looking for in the <a href="understanding-ember/the-view-layer/index.html"> Understanding Ember.js</a>section.</p> <p>These guides are written in Markdown and are <a href="https://github.com/emberjs/website/">available on GitHub</a>, inside the <code>source/guides</code> directory.  If there is something missing, or you find a typo or mistake, please help us by filing an issue or submitting a pull request. Thanks!</p> <p>We\'re excited for all of the great apps you\'re going to build with Ember.js. To get started, select a topic from the left. They are presented in the order that we think will be most useful to you as you\'re learning Ember.js, but you can also jump to whatever seems most interesting.</p> <p>Good luck!</p>'
        }, {
          id: 2,
          title: 'Core concepts',
          published: true,
          draft: false,
          locale: 'en',
          slug: 'core-concepts',
          format: 'markdown',
          storage: 'text',
          text: 'To get started with Ember.js, there are a few core concepts you should understand. \n Ember.js is designed to help developers build ambitiously large web applications that are competitive with native apps. Doing so requires both new tools and a new vocabulary of concepts. We\'ve spent a lot of time borrowing ideas pioneered by native application frameworks like Cocoa and Smalltalk.\n However, it\'s important to remember what makes the web special. Many people think that something is a web application because it uses technologies like HTML, CSS and JavaScript. In reality, these are just implementation details.\n Instead, __the web derives its power from the ability to bookmark and share URLs.__ URLs are the key feature that give web applications superior shareability and collaboration. Today, most JavaScript frameworks treat the URL as an afterthought, instead of the primary reason for the web\'s success.\n Ember.js, therefore, marries the tools and concepts of native GUI frameworks with support for the feature that makes the web so powerful: the URL. ### Concepts ####Templates\n A __template__, written in the Handlebars templating language, describes the user interface of your application. Each template is backed by a model, and the template automatically updates itself if the model changes.\n In addition to plain HTML, templates can contain:\n * __Expressions__, like `{{firstName}}`, which take information from the template\'s model and put it into HTML.\n * __Outlets__, which are placeholders for other templates. As users move around your app, different templates can be plugged into the outlet by the router. You can put outlets into your template using the `{{outlet}}` helper.\n * __Components__, custom HTML elements that you can use to clean up repetitive templates or create reusable controls.\n #### Router\n The __router__ translates a URL into a series of nested templates, each backed by a model. As the templates or models being shown to the user change, Ember automatically keeps the URL in the browser\'s address bar up-to-date.\n This means that, at any point, users are able to share the URL of your app. When someone clicks the link, they reliably see the same content as the original user.\n #### Components\n A __component__ is a custom HTML tag whose behavior you implement using JavaScript and whose appearance you describe using Handlebars templates. They allow you to create reusable controls that can simplify your application\'s templates.\n #### Models\n A __model__ is an object that stores `persistent state`. Templates are responsible for displaying the model to the user by turning it into HTML. In many applications, models are loaded via an HTTP JSON API, although Ember is agnostic to the backend that you choose.\n ####Route\n A __route__ is an object that tells the template which model it should display.\n ####Controllers\n A __controller__ is an object that stores `application state`. A template can optionally have a controller in addition to a model, and can retrieve properties from both.\n These are the core concepts you\'ll need to understand as you develop your Ember.js app. They are designed to scale up in complexity, so that adding new functionality doesn\'t force you to go back and refactor major  parts of your app.\n Now that you understand the roles of these objects, you\'re equipped to dive deep into Ember.js and learn the details of how each of these individual pieces work.',
          content: '<p>To get started with Ember.js, there are a few core concepts you should understand. </p> <p>Ember.js is designed to help developers build ambitiously large web applications that are competitive with native apps. Doing so requires both new tools and a new vocabulary of concepts. We\'ve spent a lot of time borrowing ideas pioneered by native application frameworks like Cocoa and Smalltalk.</p> <p>However, it\'s important to remember what makes the web special. Many people think that something is a web application because it uses technologies like HTML, CSS and JavaScript. In reality, these are just implementation details.</p> <p>Instead, <strong>the web derives its power from the ability to bookmark and share URLs.</strong> URLs are the key feature that give web applications superior shareability and collaboration. Today, most JavaScript frameworks treat the URL as an afterthought, instead of the primary reason for the web\'s success.</p> <p>Ember.js, therefore, marries the tools and concepts of native GUI frameworks with support for the feature that makes the web so powerful: the URL.</p> <h3 class="anchorable-toc" id="toc_concepts"><a class="toc-anchor" href="#toc_concepts"></a>Concepts</h3><h4 class="anchorable-toc" id="toc_templates"><a class="toc-anchor" href="#toc_templates"></a>Templates</h4> <p>A <strong>template</strong>, written in the Handlebars templating language, describes the user interface of your application. Each template is backed by a model, and the template automatically updates itself if the model changes.</p> <p>In addition to plain HTML, templates can contain:</p> <ul> <li><strong>Expressions</strong>, like <code>{{firstName}}</code>, which take information from the template\'s model and put it into HTML.</li> <li><strong>Outlets</strong>, which are placeholders for other templates. As users move around your app, different templates can be plugged into the outlet by the router. You can put outlets into your template using the <code>{{outlet}}</code> helper.</li> <li><strong>Components</strong>, custom HTML elements that you can use to clean up repetitive templates or create reusable controls.</li> </ul> <h4 class="anchorable-toc" id="toc_router"><a class="toc-anchor" href="#toc_router"></a>Router</h4> <p>The <strong>router</strong> translates a URL into a series of nested templates, each backed by a model. As the templates or models being shown to the user change, Ember automatically keeps the URL in the browser\'s address bar up-to-date.</p> <p>This means that, at any point, users are able to share the URL of your app. When someone clicks the link, they reliably see the same content as the original user.</p> <h4 class="anchorable-toc" id="toc_components"><a class="toc-anchor" href="#toc_components"></a>Components</h4> <p>A <strong>component</strong> is a custom HTML tag whose behavior you implement using JavaScript and whose appearance you describe using Handlebars templates. They allow you to create reusable controls that can simplify your application\'s templates.</p> <h4 class="anchorable-toc" id="toc_models"><a class="toc-anchor" href="#toc_models"></a>Models</h4> <p>A <strong>model</strong> is an object that stores <em>persistent state</em>. Templates are responsible for displaying the model to the user by turning it into HTML. In many applications, models are loaded via an HTTP JSON API, although Ember is agnostic to the backend that you choose.</p> <h4 class="anchorable-toc" id="toc_route"><a class="toc-anchor" href="#toc_route"></a>Route</h4> <p>A <strong>route</strong> is an object that tells the template which model it should display.</p> <h4 class="anchorable-toc" id="toc_controllers"><a class="toc-anchor" href="#toc_controllers"></a>Controllers</h4> <p>A <strong>controller</strong> is an object that stores <em>application state</em>. A template can optionally have a controller in addition to a model, and can retrieve properties from both.</p> <hr> <p>These are the core concepts you\'ll need to understand as you develop your Ember.js app. They are designed to scale up in complexity, so that adding new functionality doesn\'t force you to go back and refactor major  parts of your app.</p> <p>Now that you understand the roles of these objects, you\'re equipped to dive deep into Ember.js and learn the details of how each of these individual pieces work.</p>'
      }]
    });
  });

  blogyPostsRouter.post('/', function(req, res) {
    res.status(201).send({
      'blogy/posts': {
        id: req.params.id,
        title: 'Ember.js Guides',
        published: true,
        draft: false,
        locale: 'en',
        slug: 'ember-js-guides',
        format: 'html',
        storage: 'text',
        text: '<p>Welcome to the Ember.js guides! This documentation will take you from total beginner to Ember expert. It is designed to start from the basics, and slowly increase to more sophisticated concepts until you know everything there is to know about building awesome web applications.</p> <p>To help you get started, we\'ve also made a 30-minute screencast that will guide you through building a full-featured Ember.js application:</p> <p>Source code for the app we build in the video is available at  <a href="https://github.com/tildeio/bloggr-client">https://github.com/tildeio/bloggr-client</a></p> <p>Most of these guides are designed to help you start building apps right away. If you\'d like to know more about the thinking behind Ember.js, you\'ll find what you\'re looking for in the <a href="understanding-ember/the-view-layer/index.html"> Understanding Ember.js</a>section.</p> <p>These guides are written in Markdown and are <a href="https://github.com/emberjs/website/">available on GitHub</a>, inside the <code>source/guides</code> directory.  If there is something missing, or you find a typo or mistake, please help us by filing an issue or submitting a pull request. Thanks!</p> <p>We\'re excited for all of the great apps you\'re going to build with Ember.js. To get started, select a topic from the left. They are presented in the order that we think will be most useful to you as you\'re learning Ember.js, but you can also jump to whatever seems most interesting.</p> <p>Good luck!</p>',
        content: '<p>Welcome to the Ember.js guides! This documentation will take you from total beginner to Ember expert. It is designed to start from the basics, and slowly increase to more sophisticated concepts until you know everything there is to know about building awesome web applications.</p> <p>To help you get started, we\'ve also made a 30-minute screencast that will guide you through building a full-featured Ember.js application:</p> <p>Source code for the app we build in the video is available at  <a href="https://github.com/tildeio/bloggr-client">https://github.com/tildeio/bloggr-client</a></p> <p>Most of these guides are designed to help you start building apps right away. If you\'d like to know more about the thinking behind Ember.js, you\'ll find what you\'re looking for in the <a href="understanding-ember/the-view-layer/index.html"> Understanding Ember.js</a>section.</p> <p>These guides are written in Markdown and are <a href="https://github.com/emberjs/website/">available on GitHub</a>, inside the <code>source/guides</code> directory.  If there is something missing, or you find a typo or mistake, please help us by filing an issue or submitting a pull request. Thanks!</p> <p>We\'re excited for all of the great apps you\'re going to build with Ember.js. To get started, select a topic from the left. They are presented in the order that we think will be most useful to you as you\'re learning Ember.js, but you can also jump to whatever seems most interesting.</p> <p>Good luck!</p>'
      }
    });
  });

  blogyPostsRouter.get('/:id', function(req, res) {
    res.send({
      'blogy/posts': {
        id: req.params.id,
        title: 'Ember.js Guides',
        published: true,
        draft: false,
        locale: 'en',
        slug: 'ember-js-guides',
        format: 'html',
        storage: 'text',
        text: '<p>Welcome to the Ember.js guides! This documentation will take you from total beginner to Ember expert. It is designed to start from the basics, and slowly increase to more sophisticated concepts until you know everything there is to know about building awesome web applications.</p> <p>To help you get started, we\'ve also made a 30-minute screencast that will guide you through building a full-featured Ember.js application:</p> <p>Source code for the app we build in the video is available at  <a href="https://github.com/tildeio/bloggr-client">https://github.com/tildeio/bloggr-client</a></p> <p>Most of these guides are designed to help you start building apps right away. If you\'d like to know more about the thinking behind Ember.js, you\'ll find what you\'re looking for in the <a href="understanding-ember/the-view-layer/index.html"> Understanding Ember.js</a>section.</p> <p>These guides are written in Markdown and are <a href="https://github.com/emberjs/website/">available on GitHub</a>, inside the <code>source/guides</code> directory.  If there is something missing, or you find a typo or mistake, please help us by filing an issue or submitting a pull request. Thanks!</p> <p>We\'re excited for all of the great apps you\'re going to build with Ember.js. To get started, select a topic from the left. They are presented in the order that we think will be most useful to you as you\'re learning Ember.js, but you can also jump to whatever seems most interesting.</p> <p>Good luck!</p>',
        content: '<p>Welcome to the Ember.js guides! This documentation will take you from total beginner to Ember expert. It is designed to start from the basics, and slowly increase to more sophisticated concepts until you know everything there is to know about building awesome web applications.</p> <p>To help you get started, we\'ve also made a 30-minute screencast that will guide you through building a full-featured Ember.js application:</p> <p>Source code for the app we build in the video is available at  <a href="https://github.com/tildeio/bloggr-client">https://github.com/tildeio/bloggr-client</a></p> <p>Most of these guides are designed to help you start building apps right away. If you\'d like to know more about the thinking behind Ember.js, you\'ll find what you\'re looking for in the <a href="understanding-ember/the-view-layer/index.html"> Understanding Ember.js</a>section.</p> <p>These guides are written in Markdown and are <a href="https://github.com/emberjs/website/">available on GitHub</a>, inside the <code>source/guides</code> directory.  If there is something missing, or you find a typo or mistake, please help us by filing an issue or submitting a pull request. Thanks!</p> <p>We\'re excited for all of the great apps you\'re going to build with Ember.js. To get started, select a topic from the left. They are presented in the order that we think will be most useful to you as you\'re learning Ember.js, but you can also jump to whatever seems most interesting.</p> <p>Good luck!</p>'
      }
    });
  });

  blogyPostsRouter.put('/:id', function(req, res) {
    res.send({
      'blogy/posts': {
        id: req.params.id
      }
    });
  });

  blogyPostsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/blogy/posts', blogyPostsRouter);
};
