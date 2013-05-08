define("dist/app/index/index-debug", [ "dist/styles/nav/nav-debug", "jq-debug" ], function(require, exports) {
    var nav = require("dist/styles/nav/nav-debug");
    var jq = require("jq-debug");
    console.log(nav, jq);
    return {};
});