var joomla = require('joomla');
var mysql  = require('mysql');
joomla("C:\/xampp/htdocs/joomla");
var connect = require('connect');

joomla({
	db: 'joomla_db',
	user: 'nodeuser',
	host: 'localhost',
	password: 'Mysql@sudish#8021'
});

mysql.createServer(mysql.cookieParser(), function (req, res, next) {

  joomla.auth_cookies(req.cookies, function  (result) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (result !== undefined) {
      res.end(result.username + ' ' + result.userid);
    } else {
      res.end('no session');
    }
  });

}).listen(8085, "localhost");