'use strict';
let _ = require('lodash');
let mongoose = require('mongoose');
let daos = {};
let conn = null;
let currentDao = null;
let config = require('../config');
let mongo = config.mongo;

class MongoDB{
    constructor(daoName){
        //连接mongo
        if(conn == null){
            this.connectMongodb();
        }else{
            console.log('mongodb has already connected!');
        }

        //载入daoName,并存储实例
        try{
            var dao = require("./dao/"+daoName+".class.js");
            console.log("load module:%s from %s",daoName,"./dao/"+daoName+".class.js");
        }catch(err){
            console.error('cant not load model:',daoName);
        }
        console.log(daos);
        //实例化dao对象
        if(!daos[daoName]){
            console.log('set instance');
                daos[daoName] = new dao(conn);
                currentDao =  daos[daoName];
        }else {
            console.log('load instance from cache');
            currentDao = daos[daoName];
        }
    }

    connectMongodb(){
           conn = mongoose.createConnection(mongo.uri,mongo.options,function(err,res){
                if(err){console.log("ERROR connecting,check your mongodb config");console.error(err);}
                console.log("mongodb connect ok!");
            });
    }

    getInstance(){
        //console.log(currentDao);
        return currentDao;
    }
}

module.exports = function (daoName){
    return new MongoDB(daoName).getInstance();
};