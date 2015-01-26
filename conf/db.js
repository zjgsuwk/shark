/**
 * Created by wk on 2015/1/26.
 */
var Settings = require('setting.js');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

module.exports = new Db(Settings.db,new Server(Settings.host,Connection.DEFAULT_PORT,{}));