/**
 * Created by uk on 2017/2/15.
 */

// 处理服务器相关操作
var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // 传递参数到路由，以便路由根据不同的链接进行处理不同的操作
        route(pathname);

        // 返回数据，后续也可单独抽出去处理
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    // 启动监听端口
    http.createServer(onRequest).listen(8888);
    console.log("Server has started."); // 输出日志
}

exports.start = start;