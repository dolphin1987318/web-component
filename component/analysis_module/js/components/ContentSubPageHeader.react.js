/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 内容分段子标题
var ContentSubPageHeader = React.createClass({
    render: function() {
        var subMenuItem = undefined == this.props.subMenuItem ? "" : this.props.subMenuItem;
        var subMenuItemAnnotation = undefined == this.props.subMenuItemAnnotation ? "" : this.props.subMenuItemAnnotation;
        return (
            <div className="contentSubPageHeader">
                <span className="title">{subMenuItem}</span><span className="title">{subMenuItemAnnotation}</span>   {/* class annotation -> title */}
            </div>
        )
    }
});

module.exports = ContentSubPageHeader;