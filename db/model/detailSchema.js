var mongoose =require('mongoose');
var Schema =mongoose.Schema;
var detailSchema = Schema({
    is_liked:Boolean,
    channel:{type:String,default:"gengmei"},
    diary_id:Number,
    reply_num:Number,
    images:[{
        image_thumb:String,
        image:String,
        desc:String
    }],
    user:String,
    date:String,
    portrait:String,
    id:{type:Number,index:true},
    membership_level:String,
    number_days:Number,
    city:String,
    vote_num:String,
    view_num:String,
    tags_new_era:[{
        id:Number,
        name:String
    }],
    content:String
});
module.exports = function (conn) {
    return conn.model('Detail',detailSchema);
}
