/**
 * Created by wangxufeng on 2015/8/6.
 */
var React = require('react');
var ReportCardHeader = require('./ReportCardHeader.react');
var ContentPageHeader = require('./ContentPageHeader.react');
var ContentPageHeaderEm = require('./ContentPageHeaderEm.react');
var ContentSubPageHeader = require('./ContentSubPageHeader.react');
var ContentSubPageChartTable = require('./ContentSubPageChartTable.react');
var ContentSubPageP = require('./ContentSubPageP.react');
var ContentSubPageChartBox = require('./ContentSubPageChartBox.react');
var ContentSubPageTableBox = require('./ContentSubPageTableBox.react');

// 内容 for 流失
var ReportContent_Lost = React.createClass({
    render: function() {
        return (
            <div className="reportCard reportContent">
                <ReportCardHeader title={this.props.initData.content} closable="contentBody" />
                <div className="reportCardBody reportCardContentBody" id="contentBody">
                    {/* 1 */}
                    <ContentPageHeader id="menu_0" menuItem={initDataLoaded?this.props.initData.menu_list[0]:""} score={dataLoaded?this.props.data.menu_1.score:""} />
                    <ContentPageHeaderEm emItem={dataLoaded?this.props.data.menu_1.em:""} />
                    {/* 1.1 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_1.subMenu[0].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_1.subMenu[0].title_annotation:""}/>
                    <ContentSubPageChartTable chartId="1_1" chartHeight="420" tableInit={initDataLoaded?this.props.initData.menu_1.subMenu[0].table:""} tableData={dataLoaded?this.props.data.menu_1.subMenu[0].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_1.subMenu[0].summary:""} />
                    {/* 1.2 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_1.subMenu[1].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_1.subMenu[1].title_annotation:""}/>
                    <ContentSubPageP subPageP={initDataLoaded?this.props.initData.menu_1.subMenu[1].p1_1:""} />
                    <ContentSubPageChartTable chartId="1_2_1" chartHeight="300" tableInit={initDataLoaded?this.props.initData.menu_1.subMenu[1].table[0]:""} tableData={dataLoaded?this.props.data.menu_1.subMenu[1].data.platform.asc:""} />
                    <ContentSubPageP subPageP={initDataLoaded?this.props.initData.menu_1.subMenu[1].p1_2:""} />
                    <ContentSubPageChartTable chartId="1_2_2" chartHeight="300" tableInit={initDataLoaded?this.props.initData.menu_1.subMenu[1].table[0]:""} tableData={dataLoaded?this.props.data.menu_1.subMenu[1].data.platform.desc:""} />
                    <ContentSubPageP subPageP={initDataLoaded?this.props.initData.menu_1.subMenu[1].p2_1:""} />
                    <ContentSubPageChartTable chartId="1_2_3" chartHeight="300" tableInit={initDataLoaded?this.props.initData.menu_1.subMenu[1].table[1]:""} tableData={dataLoaded?this.props.data.menu_1.subMenu[1].data.model.asc:""} />
                    <ContentSubPageP subPageP={initDataLoaded?this.props.initData.menu_1.subMenu[1].p2_2:""} />
                    <ContentSubPageChartTable chartId="1_2_4" chartHeight="300" tableInit={initDataLoaded?this.props.initData.menu_1.subMenu[1].table[1]:""} tableData={dataLoaded?this.props.data.menu_1.subMenu[1].data.model.desc:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_1.subMenu[1].summary:""} style={{marginBottom: "100px"}} breakpage />

                    {/* 2 */}
                    <ContentPageHeader id="menu_1" menuItem={initDataLoaded?this.props.initData.menu_list[1]:""} score={dataLoaded?this.props.data.menu_2.score:""} />
                    <ContentPageHeaderEm emItem={dataLoaded?this.props.data.menu_2.em:""} />
                    {/* 2.1 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_2.subMenu[0].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_2.subMenu[0].title_annotation:""}/>
                    <ContentSubPageTableBox tableInit={initDataLoaded?this.props.initData.menu_2.subMenu[0].table:""} tableData={dataLoaded?this.props.data.menu_2.subMenu[0].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_2.subMenu[0].summary:""} />
                    {/* 2.2 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_2.subMenu[1].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_2.subMenu[1].title_annotation:""}/>
                    <ContentSubPageChartBox chartId="2_2" chartHeight="300" />
                    <ContentSubPageTableBox tableInit={initDataLoaded?this.props.initData.menu_2.subMenu[1].table:""} tableData={dataLoaded?this.props.data.menu_2.subMenu[1].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_2.subMenu[1].summary:""} style={{marginBottom: "100px"}} breakpage />

                    {/* 3 */}
                    <ContentPageHeader id="menu_2" menuItem={initDataLoaded?this.props.initData.menu_list[2]:""} score={dataLoaded?this.props.data.menu_3.score:""} />
                    <ContentPageHeaderEm emItem={dataLoaded?this.props.data.menu_3.em:""} />
                    {/* 3.1 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_3.subMenu[0].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_3.subMenu[0].title_annotation:""}/>
                    <ContentSubPageChartTable chartId="3_1" chartHeight="200" tableInit={initDataLoaded?this.props.initData.menu_3.subMenu[0].table:""} tableData={dataLoaded?this.props.data.menu_3.subMenu[0].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_3.subMenu[0].summary:""} />
                    {/* 3.2 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_3.subMenu[1].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_3.subMenu[1].title_annotation:""}/>
                    <ContentSubPageChartTable chartId="3_2" chartHeight="200" tableInit={initDataLoaded?this.props.initData.menu_3.subMenu[1].table:""} tableData={dataLoaded?this.props.data.menu_3.subMenu[1].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_3.subMenu[1].summary:""} />
                    {/* 3.3 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_3.subMenu[2].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_3.subMenu[2].title_annotation:""}/>
                    <ContentSubPageChartTable chartId="3_3" chartHeight="200" tableInit={initDataLoaded?this.props.initData.menu_3.subMenu[2].table:""} tableData={dataLoaded?this.props.data.menu_3.subMenu[2].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_3.subMenu[2].summary:""} />
                    {/* 3.4 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_3.subMenu[3].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_3.subMenu[3].title_annotation:""}/>
                    <ContentSubPageChartTable chartId="3_4" chartHeight="200" tableInit={initDataLoaded?this.props.initData.menu_3.subMenu[3].table:""} tableData={dataLoaded?this.props.data.menu_3.subMenu[3].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_3.subMenu[3].summary:""} style={{marginBottom: "100px"}} breakpage />

                    {/* 4 */}
                    <ContentPageHeader id="menu_3" menuItem={initDataLoaded?this.props.initData.menu_list[3]:""} score={dataLoaded?this.props.data.menu_4.score:""} />
                    <ContentPageHeaderEm emItem={dataLoaded?this.props.data.menu_4.em:""} />
                    {/* 4.1 */}
                    <ContentSubPageHeader subMenuItem={initDataLoaded?this.props.initData.menu_4.subMenu[0].title:""} subMenuItemAnnotation={dataLoaded?this.props.data.menu_4.subMenu[0].title_annotation:""}/>
                    <ContentSubPageChartTable chartId="4_1" chartHeight="450" tableInit={initDataLoaded?this.props.initData.menu_4.subMenu[0].table:""} tableData={dataLoaded?this.props.data.menu_4.subMenu[0].data:""} />
                    <ContentSubPageP subPageP={dataLoaded?this.props.data.menu_4.subMenu[0].summary:""} />

                </div>
            </div>
        )
    }
});

module.exports = ReportContent_Lost;