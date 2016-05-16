'use strict';
let co = require('co');
let diary = require('./db/MongoDB')('diary');
let detail = require('./db/MongoDB')('detail');
let test =  require('./db/MongoDB')('diary');
let test1 =  require('./db/MongoDB')('diary');
let test2 =  require('./db/MongoDB')('diary');

co(function*(){
     let diaryData = yield test.findAll({diary_id:17316});
     console.log('diary data is %s',JSON.stringify(diaryData));

    let detailData = yield detail.findAll({diary_id:17316});
    console.log('detail data is %s',JSON.stringify(detailData));

}).catch(function(err){
	console.log('err found');
});