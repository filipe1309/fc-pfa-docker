module.exports = (async() => {
    const mysql = require('mysql2/promise');
    //     // create the connection
    const connection = await mysql.createConnection({
        host: 'pfa-docker-mysql', //'0.0.0.0',
        user: 'root',
        password: 'root',
        database: 'fullcycle',
        charset: 'utf8'
    });

    return {
        connection
    };
})();