/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 内容分段段落
var ContentSubPageP = React.createClass({
    render: function() {
        var subPageP = undefined == this.props.subPageP ? "" : this.props.subPageP;
        var style = undefined == this.props.style ? null : this.props.style;
        var breakPageClass = undefined == this.props.breakpage ? "" : "break-page";
        return (
            <pre className={"contentSubPageP " + breakPageClass} style={style}>
                {subPageP}
            </pre>
        );
    }
});

module.exports = ContentSubPageP;