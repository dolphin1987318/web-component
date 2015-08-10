/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 报告副标题
var ReportSubHeader = React.createClass({
    render: function() {
        return (
            <div className="reportSubHeader">
                <div className="intro">{this.props.initData.intro}</div>
                <div className="annotation">{this.props.reportAnnotation}</div>
            </div>
        )
    }
});

module.exports = ReportSubHeader