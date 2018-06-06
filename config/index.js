'use strict';
module.exports = {
    mongo: {
        uri: 'mongodb://user:password@127.0.0.1:27017/crawl',
        options: {
            auth: {
                authSource: "admin"
            },
            server: {
                auto_reconnect: true,
                poolSize: 5
            }
        }
    }
}