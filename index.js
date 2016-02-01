/**
 * Created by Christianson on 29/01/2016.
 */
var ig = require('instagram-node').instagram();
var async = require('async');
var express = require('express');
var app = express();

function DataPoint(){
    this.pos = 0;
    this.value = 0;
}

ig.use({ client_id: '654ff94de9ee44cead7e4de4891d5d18',
    client_secret: 'e96b9424eee14238a947738fc4e6a753' });

app.get('/', function(req,res){

    var allMedia = [];
    var timeData = [];

    console.time('getData');

    for(var i = 0; i < 24; i++){
        timeData[i] = new DataPoint;
        timeData[i].pos = i;
    }
    var hdl = function(err, medias, pagination, remaining, limit) {
        allMedia = allMedia.concat(medias);
        if(pagination.next){
            pagination.next(hdl);
        }else {
            async.each(allMedia, function (media, callback) {

                var hour = (new Date(parseInt(media.created_time) * 1000)).getHours();

                timeData[hour].value = timeData[hour].value + media.comments.count;

                callback();

            }, function (err) {
                console.timeEnd('getData');
                res.setHeader('Content-Type', 'application/json');
                res.jsonp(timeData);
            });
        }
    };
    ig.user_media_recent('1694451619',{count: 35}, hdl);
});



//ig.user_followers('1034466',{count: 100}, function(err, users, pagination, remaining, limit) {
//    console.log(users);
//    console.log(remaining);
//});




//
//ig.media('1173296836736568362_1034466', function(err, media, remaining, limit) {
//    console.log(media);
//});

//ig.comments('1173296836736568362_1034466', function(err, result, remaining, limit) {
//    console.log(result.length);
//});

app.listen(80, function(){
   console.log('listening on port 80');
});


