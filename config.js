
// mongo
var host  = 'linus.mongohq.com',
    port  = 10037,
    db    = 'share',
    user  = 'jacques',
    pass  = 'momaddie';

exports.m = require('mongoskin')
  .db('mongo://' + user + ':' + pass + '@' + host + ':' + port + '/' + db);
