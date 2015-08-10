/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

var util = require('./util/util');
var mConst = require('./constants/Modules');
var initConst = require('./constants/Init');

// parse query string
util.QueryString.Initial();
var am = util.QueryString.GetValue('m');

switch (am) {
    case mConst.MODULE_LOST:
        var ReportBody = require('./components/ReportBody_Lost.react');
        break;
    default:
        var ReportBody = require('./components/ReportBody_Err.react');
}

React.render(
    <ReportBody initUrl={initConst.INIT_URL} dataUrl={initConst.DATA_URL} />,
    $("body")[0],
    function() {
        if ($.cookie("modLostRead")) {
            $("#prefaceBody").hide();
        } else {
            $.cookie("modLostRead", "true");
        }
    }
);