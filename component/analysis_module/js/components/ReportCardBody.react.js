/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 内容块卡片体
var ReportCardBody = React.createClass({
    render: function() {
        return (
            <div className={"reportCardBody " + this.props.classname} id={this.props.id}>
                {this.props.childNodes}
            </div>
        )
    }
});

module.exports = ReportCardBody;