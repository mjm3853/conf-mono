var r = require('rethinkdb'),
    util = require('util'),
    assert = require('assert');

// #### Connection details

// RethinkDB database settings. Defaults can be overridden using environment variables.
var dbConfig = {
  host: process.env.RDB_HOST || 'localhost',
  port: parseInt(process.env.RDB_PORT) || 28015,
  db  : process.env.RDB_DB || 'conf',
  tables: {
    'confs': 'id'
  }
};

/**
 * Connect to RethinkDB instance and perform a basic database setup:
 *
 * - create the `RDB_DB` database (defaults to `conf`)
 * - create table `confs` in this database
 */
module.exports.setup = function() {
  r.connect({host: dbConfig.host, port: dbConfig.port }, function (err, connection) {
    assert.ok(err === null, err);
    r.dbCreate(dbConfig.db).run(connection, function(err, result) {
      if(err) {
        console.log("[DEBUG] RethinkDB database '%s' already exists (%s:%s)\n%s", dbConfig.db, err.name, err.msg, err.message);
      }
      else {
        console.log("[INFO ] RethinkDB database '%s' created", dbConfig.db);
      }
      for(var tbl in dbConfig.tables) {
        (function (tableName) {
          r.db(dbConfig.db).tableCreate(tableName, {primaryKey: dbConfig.tables[tbl]}).run(connection, function(err, result) {
            if(err) {
              console.log("[DEBUG] RethinkDB table '%s' already exists (%s:%s)\n%s", tableName, err.name, err.msg, err.message);
            }
            else {
              console.log("[INFO ] RethinkDB table '%s' created", tableName);
            }
          });
        })(tbl);
      }
    });
  });
};

/**
 * Gets a list of conferences equal to or less than the specified max_results
 *
 * @param {Number} max_results
 *    Maximum number of results to be retrieved from the db
 *
 * @param {Function} callback
 *    callback invoked after collecting all the results
 *
 * @returns {Array} an array of messages
 */
module.exports.getConferences = function (max_results, callback) {
  onConnect(function (err, connection) {
    r.db(dbConfig['db']).table('confs').limit(max_results).run(connection, function(err, cursor) {
      if(err) {
        console.log("[ERROR][%s][getConferences] %s:%s\n%s", connection['_id'], err.name, err.msg, err.message);
        callback(null, []);
        connection.close();
      }
      else {
        cursor.toArray(function(err, results) {
          if(err) {
            console.log("[ERROR][%s][getConferences][toArray] %s:%s\n%s", connection['_id'], err.name, err.msg, err.message);
            callback(null, []);
          }
          else {
            callback(null, results);
          }
          connection.close();
        });
      }
    });
  });
};

// #### Helper functions

/**
 * A wrapper function for the RethinkDB API `r.connect`
 * to keep the configuration details in a single function
 * and fail fast in case of a connection error.
 */ 
function onConnect(callback) {
  r.connect({host: dbConfig.host, port: dbConfig.port }, function(err, connection) {
    assert.ok(err === null, err);
    connection['_id'] = Math.floor(Math.random()*10001);
    callback(err, connection);
  });
}