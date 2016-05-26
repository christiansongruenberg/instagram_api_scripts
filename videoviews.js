/**
 * Created by Christianson on 3/11/2016.
 */
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

var allMedia = [];
var timeData = [];

console.time('getData');

var hdl = function(err, medias, pagination, remaining, limit) {
    console.log(medias)
};
ig.user_media_recent('1694451619',{count: 8}, hdl);



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




