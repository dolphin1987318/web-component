/**
 * Created by wangxufeng on 2015/8/6.
 */

var React = require('react');
var initConst = require('../constants/Init');

var ReportHeader = React.createClass({
    render: function() {
        return (
            <div className="reportHeader">
                <img className="logo" src={initConst.IMG_PATH + "giant_logo_analysis.png"}/>
                <span className="title">《{this.props.gamename}》 V{this.props.ver} {this.props.initData.title} <span className="title-duration">({this.props.duration})</span></span>
                <div className="score">
                    <span>总体评分：</span><img className="reportScore" src={initConst.IMG_PATH + this.props.reportScore + ".png"}/>
                </div>
            </div>
        )
    }
});

module.exports = ReportHeader;