var r = require('rethinkdb'),
  util = require('util'),
  assert = require('assert'),
  logger = require('./logger');

// #### Connection details

// RethinkDB database settings. Defaults can be overridden using environment variables.
var dbConfig = {
  host: process.env.RDB_HOST || 'localhost',
  port: parseInt(process.env.RDB_PORT) || 28015,
  db: process.env.RDB_DB || 'conf',
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
module.exports.setup = function () {
  r.connect({ host: dbConfig.host, port: dbConfig.port }).then(function (connection) {
    logger.info("[db][setup] RethinkDB connection successful")
    r.dbCreate(dbConfig.db).run(connection, function (err, result) {
      if (err) {
        logger.info("[db][setup] RethinkDB database '%s' already exists", dbConfig.db);
      }
      else {
        logger.info("[db][setup] RethinkDB database '%s' created", dbConfig.db);
      }
      for (var tbl in dbConfig.tables) {
        (function (tableName) {
          r.db(dbConfig.db).tableCreate(tableName, { primaryKey: dbConfig.tables[tbl] }).run(connection, function (err, result) {
            if (err) {
              logger.info("[db][setup] RethinkDB table '%s' already exists", tableName);
            }
            else {
              logger.info("[db][setup] RethinkDB table '%s' created", tableName);
            }
          });
        })(tbl);
      }
    });
  }).catch(function (err) {
    return err;
  })
}

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
    if (err) {
      callback(err, null);
    } else {
      r.db(dbConfig['db']).table('confs').limit(Number(max_results)).run(connection, function (err, cursor) {
        if (err) {
          logger.error("[db][getConferences] %s:%s\n%s", err.name, err.msg, err.message);
          callback(null, []);
          connection.close();
        }
        else {
          cursor.toArray(function (err, results) {
            if (err) {
              logger.error("[db][getConferences][toArray] %s:%s\n%s", err.name, err.msg, err.message);
              callback(null, []);
            }
            else {
              callback(null, results);
            }
            connection.close();
          });
        }
      });
    }
  });
};

// #### Helper functions

/**
 * A wrapper function for the RethinkDB API `r.connect`
 * to keep the configuration details in a single function
 * and fail fast in case of a connection error.
 */
function onConnect(callback) {
  r.connect({ host: dbConfig.host, port: dbConfig.port }).then(function (connection) {
    callback(null, connection);
  }).catch(function (err) {
    callback(err, null)
  })
}