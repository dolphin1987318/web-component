/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var ContentSubPageTable = require('./ContentSubPageTable.react');
var GenChartDOMByType = require('./ComponentsUtil').GenChartDOMByType;

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;


/*
 左侧图表右侧表格
 type 图表类型
 chartId 图表DOM id
 tableInit 表格初始化参数
 tableData 表格数据
 */
var ContentSubPageChartTable = React.createClass({
    render: function() {
        var chartType = GenChartDOMByType(this.props.type, this.props.chartId, this.props.chartHeight);
        return (
            <div>
                <div className="ct-chart">
                    {chartType}
                </div>
                <div className="ct-table">
                    <ContentSubPageTable tableInit={this.props.tableInit} tableData={this.props.tableData} />
                </div>
                <div className="ct-download-button"><a href="http://www.test.com" target="_blank"><Button>原始数据下载</Button></a></div>
                <div className="clear"></div>
            </div>
        );
    }
});

module.exports = ContentSubPageChartTable;