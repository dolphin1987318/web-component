/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Table = ReactBootstrap.Table;

// 表格
var ContentSubPageTable = React.createClass({
    render: function() {
        var tableHeader = null;
        tableHeader = this.props.tableInit.header.map(function (colname, key) {
            return (
                <th key={key}>{colname}</th>
            );
        });

        var tableBody = null;
        var props = this.props;
        tableBody = props.tableData.map(function (dataRow, key) {
            var tableBodyRow = props.tableInit.data.map(function (colkey, key2) {
                var styleClass = ("undefined"==typeof dataRow[colkey + "_score"]) ? "" : "score"+dataRow[colkey + "_score"];
                var colVal = ("undefined"==typeof dataRow[colkey]) ? "--" : dataRow[colkey];
                return (
                    <td key={key2} className={styleClass}>{colVal}</td>
                )
            });
            return (
                <tr key={key}>
                    {tableBodyRow}
                </tr>
            )
        });

        return (
            <Table responsive striped hover>
                <thead>
                <tr>
                    {tableHeader}
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </Table>
        )
    }
});

module.exports = ContentSubPageTable;