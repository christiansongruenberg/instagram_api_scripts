/**
 * Created by Christianson on 03/02/2016.
 */
/**
 * Created by Christianson on 29/01/2016.
 */
var ig = require('instagram-node').instagram();
var fs = require('fs');
var json2csv = require('json2csv');

var minute = 0;

ig.use({ client_id: '654ff94de9ee44cead7e4de4891d5d18',
    client_secret: 'e96b9424eee14238a947738fc4e6a753' });

(function(){
    var lastFollowed;

    var fileName = 'starbucks10sec.csv';

    fs.appendFile(fileName, new Date() + "\n" + "time, Net Follower Change \n", function(err) {
        if (err) throw err;
        console.log('file saved');
    });

    var hdl = function(err, result, remaining, limit) {
        var dataPoint = [];
        dataPoint[0] = {};
        dataPoint[0].netFollowersChange = lastFollowed ? result.counts.followed_by - lastFollowed : 0;

        json2csv({ data: dataPoint}, function(err, csv) {
            if (err) console.log(err);
            console.log(csv.split("\n")[1]);


            fs.appendFile(fileName, csv.split("\n")[1] + "\n", function(err) {
                if (err) throw err;
                console.log('file saved');
            });
        });

        console.log(result.counts.followed_by);
        console.log(lastFollowed ? result.counts.followed_by - lastFollowed : 0);
        lastFollowed = result.counts.followed_by;
    };

    setInterval(function(){
        ig.user('1034466', hdl);
    }, 10000);
})();

(function(){
    var lastFollowed;

    var fileName = 'adidas10sec.csv';

    fs.appendFile(fileName, new Date() + "\n" + "time, Net Follower Change \n", function(err) {
        if (err) throw err;
        console.log('file saved');
    });

    var hdl = function(err, result, remaining, limit) {
        var dataPoint = [];
        dataPoint[0] = {};
        dataPoint[0].netFollowersChange = lastFollowed ? result.counts.followed_by - lastFollowed : 0;

        json2csv({ data: dataPoint}, function(err, csv) {
            if (err) console.log(err);
            console.log(csv.split("\n")[1]);


            fs.appendFile(fileName, csv.split("\n")[1] + "\n", function(err) {
                if (err) throw err;
                console.log('file saved');
            });
        });

        console.log(result.counts.followed_by);
        console.log(lastFollowed ? result.counts.followed_by - lastFollowed : 0);
        lastFollowed = result.counts.followed_by;
    };

    setInterval(function(){
        ig.user('20269764', hdl);
    }, 10000);
})();

(function(){
    var lastFollowed;

    var fileName = 'uber10sec.csv';

    fs.appendFile(fileName, new Date() + "\n" + "time, Net Follower Change \n", function(err) {
        if (err) throw err;
        console.log('file saved');
    });

    var hdl = function(err, result, remaining, limit) {
        var dataPoint = [];
        dataPoint[0] = {};
        dataPoint[0].netFollowersChange = lastFollowed ? result.counts.followed_by - lastFollowed : 0;

        json2csv({ data: dataPoint}, function(err, csv) {
            if (err) console.log(err);
            console.log(csv.split("\n")[1]);


            fs.appendFile(fileName, csv.split("\n")[1] + "\n", function(err) {
                if (err) throw err;
                console.log('file saved');
            });
        });

        console.log(result.counts.followed_by);
        console.log(lastFollowed ? result.counts.followed_by - lastFollowed : 0);
        lastFollowed = result.counts.followed_by;
    };

    setInterval(function(){
        ig.user('463005569', hdl);
    }, 10000);
})();






