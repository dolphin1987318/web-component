/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

// 内容分段标题重点
var ContentPageHeaderEm = React.createClass({
    render: function() {
        var emItem = undefined == this.props.emItem ? "" : this.props.emItem;
        return (
            <div className="contentPageHeaderEm">
                {this.props.emItem}
            </div>
        )
    }
});

module.exports = ContentPageHeaderEm;