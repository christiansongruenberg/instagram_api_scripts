/**
 * Created by Christianson on 2016-02-01.
 */
/**
 * Created by Christianson on 29/01/2016.
 */
var ig = require('instagram-node').instagram();
var async = require('async');
var jsonfile = require('jsonfile')

ig.use({ client_id: '654ff94de9ee44cead7e4de4891d5d18',
    client_secret: 'e96b9424eee14238a947738fc4e6a753' });

var allMedia = [];

var hd2 = function(err, medias, pagination, remaining, limit) {


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

ig.user_followers('1523697664',{count: 100}, hd2);




