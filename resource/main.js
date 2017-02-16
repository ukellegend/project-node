/**
 * Created by uk on 2017/2/14.
 */

// 引入服务配置，路由配置
var server = require("./server");
var router = require("./router");

// 启动一个http请求
server.start(router.route);