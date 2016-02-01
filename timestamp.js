/**
 * Created by Christianson on 29/01/2016.
 */
var async = require('async');

var media = { attribution: null,
    tags:
    [ 'jyd2point0',
        'sixblackto',
        'newera',
        'cff',
        'teamcarroll',
        'blessed',
        'staypositive' ],
        location: null,
    comments: { count: 4, data: [ [Object], [Object], [Object], [Object] ] },
    filter: 'Normal',
    created_time: '1454090171',
    link: 'https://www.instagram.com/p/BBIdI8TmVPm/',
    likes: { count: 751, data: [ [Object], [Object], [Object], [Object] ] },
    images:
    { low_resolution:
    { url: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12547342_1667094963544206_773076065_n.jpg',
        width: 320,
        height: 320 },
        thumbnail:
        { url: 'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12547342_1667094963544206_773076065_n.jpg',
            width: 150,
            height: 150 },
        standard_resolution:
        { url: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12547342_1667094963544206_773076065_n.jpg',
            width: 640,
            height: 640 } },
    users_in_photo: [],
        caption:
    { created_time: '1454090171',
        text: 'Thank you fans for your tremendous support using #SIXBLACKTO and/or purchasing the collaborative #NewEra charitable hat. Let\'s keep the momentum going! Every effort helps the @cffwebelieve foundation! ?\n\nFor the signed shoe and jersey giveaway, I         am happy to announce @nailbar_on14th has won. Thank you for purchasing the hat! ?\n\nPlease DM me your info. #JYD2Point0 #TeamCarroll #Blessed #StayPositive #CFF',
        from:
        { username: 'demarrecarroll1',
            profile_picture: 'https://scontent.cdninstagram.com/t51.2885-19/10354335_1466622040315017_574720817_a.jpg',
            id: '1694451619',
            full_name: 'DeMarre Carroll' },
        id: '1173317524307660880' },
    type: 'image',
        id: '1173315860787975142_1694451619',
    user:
    { username: 'demarrecarroll1',
        profile_picture: 'https://scontent.cdninstagram.com/t51.2885-19/10354335_1466622040315017_574720817_a.jpg',
        id: '1694451619',
        full_name: 'DeMarre Carroll' }
}

var date = new Date(parseInt(media.created_time)*1000);
var hour = date.getHours();
console.time('1');
console.log(date);
console.timeEnd('1');