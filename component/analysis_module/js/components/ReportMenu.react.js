/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var SegContent = require('./SegContent.react');
var ReportCardHeader = require('./ReportCardHeader.react');
var ReportCardBody = require('./ReportCardBody.react');

// 目录
var ReportMenu = React.createClass({
    render: function() {
        var menuNodes = this.props.initData.menu_list.map(function (menuItem, key) {
            return (
                <SegContent header={menuItem} headerAnchor={"menu_"+key} key={key}/>
            );
        });

        return (
            <div className="reportCard reportMenu">
                <ReportCardHeader title={this.props.initData.menu} closable="menuBody" />
                <ReportCardBody id="menuBody" childNodes={menuNodes} />
            </div>
        )
    }
});

module.exports = ReportMenu;