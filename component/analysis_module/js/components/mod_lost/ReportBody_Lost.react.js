/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var ReportHeader = require('../ReportHeader.react');
var ReportSubHeader = require('../ReportSubHeader.react');
var ReportPreface = require('../ReportPreface.react');
var ReportResult = require('../ReportResult.react');
var ReportMenu = require('../ReportMenu.react');
var ReportContent = require('./ReportContent_Lost.react');
var ReportAppendix = require('../ReportAppendix.react');
var ReportGuider = require('../ReportGuider.react');
var InitData = require('./InitData');

// 报告容器 for 流失
var ReportBody_Lost = React.createClass({
    getInitialState: function() {
        return {data: InitData.data, initData: InitData.initData};
    },
    componentDidMount: function() {
        this.loadInitData();
        this.loadData();
    },
    // 加载初始化数据，如页面标题等
    loadInitData: function() {
        $.ajax({
            url: this.props.initUrl,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({initData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                //console.error(this.props.initUrl, status, err.toString());
            }.bind(this)
        });
    },
    // 加载页面数据
    loadData: function() {
        $.ajax({
            url: this.props.dataUrl,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});

                drawCharts(data);
            }.bind(this),
            error: function(xhr, status, err) {
                //console.error(this.props.initUrl, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        var prependData = [
            {name:"0、序言", id:"preface"},
            {name:"1、结论与建议", id:"result"}
        ];
        return (
            <div className="reportBody" id="reportBody">
                {/* 报告标题 */}
                <ReportHeader initData={this.state.initData} reportScore={this.state.data.reportScore} gamename={this.state.data.gamename} ver={this.state.data.ver} duration={this.state.data.duration} />
                {/* 报告副标题 */}
                <ReportSubHeader initData={this.state.initData} reportAnnotation={this.state.data.annotation} />
                {/* 报告序言 */}
                <ReportPreface initData={this.state.initData} />
                {/* 报告结论 */}
                <ReportResult initData={this.state.initData} reportResult={this.state.data.result} />
                {/* 报告目录 */}
                <ReportMenu initData={this.state.initData} />
                {/* 报告内容 */}
                <ReportContent initData={this.state.initData} data={this.state.data} />
                {/* 附录 */}
                <ReportAppendix initData={this.state.initData} download={this.state.data.download} />
                {/* 右下导航 */}
                <ReportGuider initData={this.state.initData} prependData={prependData} />
            </div>
        )
    }
});

module.exports = ReportBody_Lost;