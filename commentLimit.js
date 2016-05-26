
var ig = require('instagram-node').instagram();


ig.use({ client_id: '654ff94de9ee44cead7e4de4891d5d18',
    client_secret: 'e96b9424eee14238a947738fc4e6a753' });

var mediaRes = function(err, medias, pagination, remaining, limit) {
    console.log(medias[0].id);
    ig.comments(medias[25].id, function(err, result, remaining, limit) {
        console.log(result.length);
    });
};
ig.user_media_recent('1694451619',{count: 35}, mediaRes);






