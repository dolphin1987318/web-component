/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 分段内容
var SegContent = React.createClass({
    handleAnchor: function (id) {
        $("html, body").animate({
            scrollTop: $("#"+id).offset().top + "px"
        }, {
            duration: 1000
        });
    },
    render: function() {
        var self = this;
        // 标题
        var content_header = "";
        if (undefined != this.props.header) {
            var sub_content_header = (
                <div className="pageHeader">
                    {this.props.header}
                </div>
            );
            if (undefined != this.props.headerAnchor) {
                content_header = (
                    <a className="menuLink" href="javascript:void(0);" onClick={self.handleAnchor.bind(self, this.props.headerAnchor)}>
                        {sub_content_header}
                    </a>
                )
            } else {
                content_header = sub_content_header;
            }
        }
        // 标题重点
        var content_em = "";
        if (undefined != this.props.em) {
            content_em = (
                <div className="pageHeaderEm">{this.props.em}</div>
            )
        }
        // 内容
        var content = "";
        if (undefined != this.props.content) {
            content = (
                <pre className="pageContent">
                    {this.props.content}
                </pre>
            )
        }
        return (
            <div className="segContent">
                {content_header}
                {content_em}
                {content}
            </div>
        )
    }
});

module.exports = SegContent;