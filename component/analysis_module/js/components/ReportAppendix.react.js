/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var ReportCardHeader = require('./ReportCardHeader.react');

// 附录
var ReportAppendix = React.createClass({
    render: function() {
        var menuId = "appendix";
        var appendixId = this.props.initData.menu_list.length - 1;
        var menuId = "menu_" + appendixId;

        return (
            <div id={menuId} className="reportCard reportAppendix">
                <ReportCardHeader title={this.props.initData.appendix} closable="appendixBody" />
                <div className="reportCardBody reportCardBodyAppendix" id="appendixBody">
                    <div>本报告所涉及原始数据:</div>
                    <a href={this.props.download}><div>下载</div></a>
                </div>
            </div>
        )
    }
});

module.exports = ReportAppendix;