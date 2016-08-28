/**
 * Created by Christianson on 2016-02-01.
 */
/**
 * Created by Christianson on 29/01/2016.
 */
var ig = require('instagram-node').instagram();
var async = require('async');
var jsonfile = require('jsonfile');

/*ig.use({ client_id: '654ff94de9ee44cead7e4de4891d5d18',
    client_secret: 'e96b9424eee14238a947738fc4e6a753' });*/

ig.use({ access_token: '20880329.1677ed0.1fd65ee2e9314a81a22fbfeaced66d03' });

/*ig.use({ client_id: '597b43061ec24a068d9352a403dc0738',
    client_secret: '19adac0bdfab4ceebc7cc9eec0985b0b' });*/

var allMedia = [];

var hd2 = function(err, medias, pagination, remaining, limit) {

    if(err){
        console.log(err);
        throw err;
    }

    allMedia = allMedia.concat(medias);
    if(pagination.next){
        pagination.next(hd2);
    }else {

        var file = 'users.json';

        console.log('start writing');
        jsonfile.writeFile(file, allMedia, function (err) {
            console.log('run?');
            console.error(err)
        })
    }
};

var test = function(err, medias, pagination, remaining, limit) {
    console.log()
};

ig.user_followers('20880329',{count: 100}, hd2);




