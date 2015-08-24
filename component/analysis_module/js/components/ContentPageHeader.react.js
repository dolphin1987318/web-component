/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var initConst = require('../constants/Init');

// 内容分段标题
var ContentPageHeader = React.createClass({
    showAnchorIcon: function() {
        var anchorIcon = React.findDOMNode(this.refs.anchorIcon);
        anchorIcon.style.display = "block";
    },
    hideAnchorIcon: function() {
        var anchorIcon = React.findDOMNode(this.refs.anchorIcon);
        anchorIcon.style.display = "none";
    },
    render: function() {
        var menuItem = undefined == this.props.menuItem ? "" : this.props.menuItem;
        return (
            <div id={this.props.id} className={"contentPageHeader" + " " + "contentScore_" + this.props.score}>
                <a href={"#"+this.props.id} className="contentPageAnchor" onMouseOver={this.showAnchorIcon} onMouseOut={this.hideAnchorIcon}>
                    <span className="contentPageAnchorIcon" ref="anchorIcon">#</span>
                    <span>{menuItem}</span>
                </a>
                <div className="score">
                    <span>该项得分：</span><img className="reportScore" src={initConst.IMG_PATH + this.props.score + ".png"}/>
                </div>
            </div>
        )
    }
});

module.exports = ContentPageHeader;