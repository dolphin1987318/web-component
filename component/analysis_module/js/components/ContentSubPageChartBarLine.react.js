/**
 * Created by wangxufeng on 2015/8/24.
 */
var React = require('react');

// echarts折线图
var ContentSubPageChartBarLine = React.createClass({
    render: function() {
        return (
            <div className="contentSubPageChart" id={this.props.id} style={{height: this.props.height+"px"}}>

            </div>
        )
    }
});

module.exports = ContentSubPageChartBarLine;