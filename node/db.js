// var mysql = require('mysql2');
// var connection = mysql.createConnection({
//     host: '0.0.0.0',
//     user: 'root',
//     password: 'root',
//     database: 'fullcycle'
// });

// connection.query('SELECT * FROM modules', function(error, results, fields) {
//     if (error) throw error;
//     console.log(results);
// });

//module.exports = connection;


module.exports = (async() => {
    const mysql = require('mysql2/promise');
    //     // create the connection
    const connection = await mysql.createConnection({
        host: 'pfa-docker-mysql', //'0.0.0.0',
        user: 'root',
        password: 'root',
        database: 'fullcycle'
    });

    return {
        connection
    };

})();


// async function main() {
//     // get the client
//     const mysql = require('mysql2/promise');
//     // create the connection
//     const connection = await mysql.createConnection({
//         host: '0.0.0.0',
//         user: 'root',
//         password: 'root',
//         database: 'fullcycle'
//     });

//     // query database
//     const [rows, fields] = await connection.execute('SELECT * FROM `modules`');
//     console.log(rows);
// }

// main();