/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var SegContent = require('./SegContent.react');
var ReportCardHeader = require('./ReportCardHeader.react');
var ReportCardBody = require('./ReportCardBody.react');

// 序言
var ReportPreface = React.createClass({
    render: function() {
        var prefaceNodes = this.props.initData.preface_list.map(function (prefaceItem, key) {
            return (
                <SegContent header={prefaceItem.title} content={prefaceItem.content} key={key}/>
            );
        });

        return (
            <div id="preface" className="reportCard reportPreface">
                <ReportCardHeader title={this.props.initData.preface} closable="prefaceBody" />
                <ReportCardBody id="prefaceBody" childNodes={prefaceNodes} />
            </div>
        )
    }
});

module.exports = ReportPreface;