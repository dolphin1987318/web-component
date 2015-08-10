/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 报告容器 for Error
var ReportBody_Err = React.createClass({
    render: function() {
        return (
            <div className="reportBody" id="reportBody" style={{textAlign: "center", marginTop: "200px", fontSize: "36px"}}>
                你这是要干啥，你倒是说啊
            </div>
        )
    }
});

module.exports = ReportBody_Err;