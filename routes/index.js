const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');


//route, routing 방식
//app.get('/', (req, res) => res.send('Hello World!'))
router.get('/', function(req, res) {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(req._list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src="/images/hello.jpg" style="width:300px;display:block;margin-top:10px">
      `,
      `<a href="/topic/create">create</a>`
    );
    res.send(html);
  });

module.exports = router;
