/**
 * Created by Christianson on 2016-02-02.
 */
/**
 * Created by Christianson on 2016-02-01.
 */
/**
 * Created by Christianson on 29/01/2016.
 */
var ig = require('instagram-node').instagram();

ig.use({ client_id: '654ff94de9ee44cead7e4de4891d5d18',
    client_secret: 'e96b9424eee14238a947738fc4e6a753' });


var hd2 = function(err, medias, pagination, remaining, limit) {
    console.log(medias);
};

var test = function(err, medias, pagination, remaining, limit) {
    console.log()
};



ig.user_followers('1694451619',{count: 10}, hd2);




