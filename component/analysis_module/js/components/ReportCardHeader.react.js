/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 内容块卡片头
var ReportCardHeader = React.createClass({
    handleCloseCardBody: function (id) {
        $("#" + id).slideToggle("fast");
    },
    render: function() {
        return (
            <a className="reportCardHeaderHandle" href="javascript:void(0);" onClick={undefined==this.props.closable?"":this.handleCloseCardBody.bind(this, this.props.closable)} >
                <div className="reportCardHeader">
                    {this.props.title}
                </div>
            </a>
        )
    }
});

module.exports = ReportCardHeader;