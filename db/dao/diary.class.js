"use strict";
let _ = require('lodash');
let diary =  require("../model/diarySchema");
let model= {};
class  Diary{
    constructor(conn){
        if(_.isEmpty(model)){
            model = diary(conn);
        }
    }

    /**
     * @查找所有符合条件的记录
     * @param condition
     * @param option
     * @returns {*|T}
     */
     findAll(condition,option){
        return  model.find(condition,option).exec();
    }
}
module.exports = Diary;