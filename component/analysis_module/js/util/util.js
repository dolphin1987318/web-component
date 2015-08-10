/**
 * Created by wangxufeng on 2015/8/6.
 */

var util = {
    // URL querystring handle
    QueryString: {
        data: {},
        Initial: function () {
            var aPairs, aTmp;
            var queryString = new String(window.location.search);
            queryString = queryString.substr(1, queryString.length);
            aPairs = queryString.split("&");
            for (var i = 0; i < aPairs.length; i++) {
                aTmp = aPairs[i].split("=");
                this.data[aTmp[0]] = aTmp[1];
            }
        },
        GetValue: function (key) {
            return this.data[key];
        }
    }
};

module.exports = util;