var DatabaseConfig = {
    MySQL: {
        user: "root",
        password: "",
        database: "Sappar",
        port: "3306",
        host: "doductu.com",
        secret: "minhviet@2017"
    },
    MongoDB: {
        url     : "mongodb://minhviet:minhviet@45.125.239.73:27017/sappar",
        uri     : "mongodb://45.125.239.73/sappar",
        options : {
            user : "minhviet",
            pass : "minhviet"
        }
    }
}

module.exports = DatabaseConfig;