/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var OverlayTrigger = ReactBootstrap.OverlayTrigger,
    Tooltip = ReactBootstrap.Tooltip;

// 右下导航栏
var ReportGuider = React.createClass({
    handleSideCatalogBtn: function () {
        $("#sideCatalog").toggle("slow");
    },
    handleAnchor: function (id) {
        $("html, body").animate({
            scrollTop: $("#"+id).offset().top + "px"
        }, {
            duration: 1000
        });
    },
    handleScrollTop: function () {
        $("html, body").animate({
            scrollTop: "0px"
        }, {
            duration: 500
        });
    },
    handlePrint: function () {
        $("#sideCatalog").hide("fast", function() {
            var index = 0;
            $(".reportCardBody").show("fast", function() {
                index++;
                if (index >= $(".reportCardBody").length)
                    window.print();
            });
        });
    },
    autoShowGuider: function () {
        $(document).scroll(function() {
            var curScrollTop = $(document).scrollTop();
            if (curScrollTop >= $("#menuBody").offset().top) {
                $("#sideCatalog").show("slow");
            } else {
                $("#sideCatalog").hide("slow");
            }
        });
    },
    render: function() {
        this.autoShowGuider();

        var self = this;
        var menuNodes = this.props.prependData.map(function (menuItem, key) {
            return (
                <dd className="sideCatalog-item1" id={"sideToolbar-item-0-"+(key+1)} key={key}>
                    <span className="sideCatalog-index1">{key+1}</span>
                    <a href="javascript:void(0);" onClick={self.handleAnchor.bind(self, menuItem.id)}>{menuItem.name.substring(2)}</a>
                    <span className="sideCatalog-dot"></span>
                </dd>
            );
        });

        var keyOffset = menuNodes.length + 1;
        var menuNodesMore = this.props.initData.menu_list.map(function (menuItem, key) {
            return (
                <dd className="sideCatalog-item1" id={"sideToolbar-item-0-"+(key+keyOffset)} key={key+keyOffset}>
                    <span className="sideCatalog-index1">{key+keyOffset}</span>
                    <a href="javascript:void(0);" onClick={self.handleAnchor.bind(self, "menu_"+key)}>{menuItem.substring(2)}</a>
                    <span className="sideCatalog-dot"></span>
                </dd>
            );
        });

        menuNodes = menuNodes.concat(menuNodesMore);

        return (
            <div className="reportGuider">
                <div id="sideToolbar">
                    <div id="sideCatalog" className="sideCatalogBg">
                        <div id="sideCatalog-sidebar">
                            <OverlayTrigger placement="right" overlay={<Tooltip>顶部</Tooltip>} trigger={["hover", "focus"]}>
                                <a href="javascript:void(0)" onClick={this.handleScrollTop}>
                                    <div className="sideCatalog-sidebar-top"></div>
                                </a>
                            </OverlayTrigger>
                            <div className="sideCatalog-sidebar-bottom"></div>
                        </div>
                        <div id="sideCatalog-updown">
                            <div id="sideCatalog-up" className="sideCatalog-up-disable" title="向上翻页"></div>
                            <div id="sideCatalog-down" className="sideCatalog-down-enable" title="向下翻页"></div>
                        </div>
                        <div id="sideCatalog-catalog">
                            <dl>
                                {menuNodes}
                            </dl>
                        </div>
                    </div>
                    <OverlayTrigger placement="right" overlay={<Tooltip>显示/隐藏</Tooltip>} trigger={["hover", "focus"]}>
                        <a id="sideCatalogBtn" href="javascript:void(0)" onClick={this.handleSideCatalogBtn}></a>
                    </OverlayTrigger>
                    <OverlayTrigger placement="right" overlay={<Tooltip>打印</Tooltip>} trigger={["hover", "focus"]}>
                        <a id="sideToolbar-print" href="javascript:void(0)" onClick={this.handlePrint}></a>
                    </OverlayTrigger>
                    <OverlayTrigger placement="right" overlay={<Tooltip>回到顶部</Tooltip>} trigger={["hover", "focus"]}>
                        <a id="sideToolbar-up" href="javascript:void(0)" onClick={this.handleScrollTop}></a>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
});

module.exports = ReportGuider;