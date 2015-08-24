/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var ContentSubPageTable = require('./ContentSubPageTable.react');

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;


/*
 整行表格
 tableInit 表格初始化参数
 tableData 表格数据
 */
var ContentSubPageTableBox = React.createClass({
    render: function() {
        return (
            <div>
                <div className="t-table">
                    <ContentSubPageTable tableInit={this.props.tableInit} tableData={this.props.tableData} />
                </div>
                <div className="ct-download-button"><a href="http://www.test.com" target="_blank"><Button>原始数据下载</Button></a></div>
            </div>
        );
    }
});

module.exports = ContentSubPageTableBox;