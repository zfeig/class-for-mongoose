'use strict';
module.exports = {
 mongo:{
    uri:'mongodb://127.0.0.1:27017/crawl',
    options:{
      server:{
        auto_reconnect:true,
        poolSize:5
      }
    }
  }
}