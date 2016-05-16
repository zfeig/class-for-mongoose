"use strict";
let _ = require('lodash');
let detail =  require("../model/detailSchema");
let model= {};
class  Detail{
    constructor(conn){
        if(_.isEmpty(model)){
            model = detail(conn);
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
module.exports = Detail;