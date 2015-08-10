/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var GenChartDOMByType = require('./ComponentsUtil').GenChartDOMByType;

/*
 整行图表
 type 图表类型
 chartId 图表DOM id
 */
var ContentSubPageChartBox = React.createClass({
    render: function() {
        var chartType = GenChartDOMByType(this.props.type, this.props.chartId, this.props.chartHeight);
        return (
            <div className="c-chart">
                {chartType}
            </div>
        );
    }
});

module.exports = ContentSubPageChartBox;