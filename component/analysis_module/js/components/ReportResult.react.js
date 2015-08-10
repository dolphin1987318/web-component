/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var SegContent = require('./SegContent.react');
var ReportCardHeader = require('./ReportCardHeader.react');
var ReportCardBody = require('./ReportCardBody.react');

// 结论与建议
var ReportResult = React.createClass({
    render: function() {
        if (initDataLoaded && dataLoaded) {
            reportResult = this.props.reportResult;
            var resultNodes = this.props.initData.result_list.map(function (resultItem, key) {
                return (
                    <SegContent header={resultItem.title} content={reportResult[key].content} em={reportResult[key].em} key={key}/>
                );
            });
        }

        return (
            <div id="result" className="reportCard reportResult">
                <ReportCardHeader title={this.props.initData.result} closable="resultBody" />
                <ReportCardBody id="resultBody" childNodes={resultNodes} />
            </div>
        )
    }
});

module.exports = ReportResult;