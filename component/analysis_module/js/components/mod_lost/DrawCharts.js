/**
 * Created by wangxufeng on 2015/8/24.
 */
require.config({
    paths: {
        echarts: "../../../common/echarts"
    }
});


var drawCharts = function (data) {
    drawChart_1_1(data.menu_1.subMenu[0].data);
    drawChart_1_2_1(data.menu_1.subMenu[1].data.platform.asc);
    drawChart_1_2_2(data.menu_1.subMenu[1].data.platform.desc);
    drawChart_1_2_3(data.menu_1.subMenu[1].data.model.asc);
    drawChart_1_2_4(data.menu_1.subMenu[1].data.model.desc);

    //drawChart_2_1();
    drawChart_2_2(data.menu_2.subMenu[1].data);

    drawChart_3_1(data.menu_3.subMenu[0].data);
    drawChart_3_2(data.menu_3.subMenu[1].data);
    drawChart_3_3(data.menu_3.subMenu[2].data);
    drawChart_3_4(data.menu_3.subMenu[3].data);

    drawChart_4_1(data.menu_4.subMenu[0].data);
};


function getCommonOptionLine() {
    var option = {
        animation: false,
        title : {
            //text: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:[]
        },
        toolbox: {},
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : []
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} %'
                }
            }
        ],
        series : []
    };
    return option;
}
function getCommonOptionTopBar() {
    var option = {
        animation: false,
        title : {
            //text: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:[]
        },
        toolbox: {},
        calculable : true,
        xAxis : [
            {
                type : 'value',
                boundaryGap : [0, 0.01],
                axisLabel : {
                    formatter: '{value} %'
                }
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : []
            }
        ],
        series : []
    };
    return option;
}

function drawChart_1_1(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            var option = getCommonOptionLine();
            option.xAxis[0].data = ['启动','加载成功','登录成功','建角成功','进入游戏'];
            for (var key in data) {
                if (/-/.test(data[key].date)) {
                    continue;
                }
                option.legend.data.push(data[key].date);
                option.series.push({
                    "name": data[key].date,
                    "type": 'line',
                    "data":[
                        data[key].startup.substring(0, data[key].startup.length-1),
                        data[key].load.substring(0, data[key].load.length-1),
                        data[key].login.substring(0, data[key].login.length-1),
                        data[key].char.substring(0, data[key].char.length-1),
                        data[key].scene.substring(0, data[key].char.length-1)
                    ]
                });
            }
            var myChart = ec.init(document.getElementById("1_1"), theme);
            myChart.setOption(option);
        });
}
function drawChart_1_2_1(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            var option = getCommonOptionLine();
            option.xAxis[0].data = ['启动','加载成功','登录成功','建角成功','进入游戏'];
            for (var key in data) {
                option.legend.data.push(data[key].platform);
                option.series.push({
                    "name": data[key].platform,
                    "type": 'line',
                    "data":[
                        data[key].startup.substring(0, data[key].startup.length-1),
                        data[key].load.substring(0, data[key].load.length-1),
                        data[key].login.substring(0, data[key].login.length-1),
                        data[key].char.substring(0, data[key].char.length-1),
                        data[key].scene.substring(0, data[key].char.length-1)
                    ]
                });
            }

            var myChart = ec.init(document.getElementById("1_2_1"), theme);
            myChart.setOption(option);
        });
}
function drawChart_1_2_2(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            var option = getCommonOptionLine();
            option.xAxis[0].data = ['启动','加载成功','登录成功','建角成功','进入游戏'];
            for (var key in data) {
                option.legend.data.push(data[key].platform);
                option.series.push({
                    "name": data[key].platform,
                    "type": 'line',
                    "data":[
                        data[key].startup.substring(0, data[key].startup.length-1),
                        data[key].load.substring(0, data[key].load.length-1),
                        data[key].login.substring(0, data[key].login.length-1),
                        data[key].char.substring(0, data[key].char.length-1),
                        data[key].scene.substring(0, data[key].char.length-1)
                    ]
                });
            }

            var myChart = ec.init(document.getElementById("1_2_2"), theme);
            myChart.setOption(option);
        });
}
function drawChart_1_2_3(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            var option = getCommonOptionLine();
            option.xAxis[0].data = ['启动','加载成功','登录成功','建角成功','进入游戏'];
            for (var key in data) {
                option.legend.data.push(data[key].model);
                option.series.push({
                    "name": data[key].model,
                    "type": 'line',
                    "data":[
                        data[key].startup.substring(0, data[key].startup.length-1),
                        data[key].load.substring(0, data[key].load.length-1),
                        data[key].login.substring(0, data[key].login.length-1),
                        data[key].char.substring(0, data[key].char.length-1),
                        data[key].scene.substring(0, data[key].char.length-1)
                    ]
                });
            }

            var myChart = ec.init(document.getElementById("1_2_3"), theme);
            myChart.setOption(option);
        });
}
function drawChart_1_2_4(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            var option = getCommonOptionLine();
            option.xAxis[0].data = ['启动','加载成功','登录成功','建角成功','进入游戏'];
            for (var key in data) {
                option.legend.data.push(data[key].model);
                option.series.push({
                    "name": data[key].model,
                    "type": 'line',
                    "data":[
                        data[key].startup.substring(0, data[key].startup.length-1),
                        data[key].load.substring(0, data[key].load.length-1),
                        data[key].login.substring(0, data[key].login.length-1),
                        data[key].char.substring(0, data[key].char.length-1),
                        data[key].scene.substring(0, data[key].char.length-1)
                    ]
                });
            }

            var myChart = ec.init(document.getElementById("1_2_4"), theme);
            myChart.setOption(option);
        });
}

//function drawChart_2_1() {
//    require([
//            'echarts',
//            'echarts/theme/blue',
//            'echarts/chart/line',
//            'echarts/chart/bar'
//        ],
//        function (ec, theme) {
//            var myChart = ec.init(document.getElementById("2_1"), theme);
//            myChart.setOption(genOption_1_1());
//        });
//}
function drawChart_2_2(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            var option = getCommonOptionLine();
            option.xAxis[0].data = ['2日留存','3日留存','4日留存','5日留存','6日留存', '7日留存', '14日留存', '21日留存', '30日留存'];
            for (var key in data) {
                if (/-/.test(data[key].date)) {
                    continue;
                }
                option.legend.data.push(data[key].date);
                option.series.push({
                    "name": data[key].date,
                    "type": 'line',
                    "data":[
                        data[key].d2.substring(0, data[key].d2.length-1),
                        data[key].d3.substring(0, data[key].d3.length-1),
                        data[key].d4.substring(0, data[key].d4.length-1),
                        data[key].d5.substring(0, data[key].d5.length-1),
                        data[key].d6.substring(0, data[key].d6.length-1),
                        data[key].d7.substring(0, data[key].d7.length-1),
                        data[key].d14.substring(0, data[key].d14.length-1),
                        data[key].d21.substring(0, data[key].d21.length-1),
                        data[key].d30.substring(0, data[key].d30.length-1)
                    ]
                });
            }

            var myChart = ec.init(document.getElementById("2_2"), theme);
            myChart.setOption(option);
        });
}

function drawChart_3_1(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            data.sort(byLostNumDesc);
            var option = getCommonOptionTopBar();
            option.series = [{
                "name": "等级次日流失率",
                "type": "bar",
                "data": []
            }];
            option.legend.data = ["等级次日流失率"];
            for (var key in data) {
                option.yAxis[0].data.push(data[key].lv + "级");
                option.series[0].data.push(
                    data[key].lostrate.substring(0, data[key].lostrate.length-1)
                );
            }

            var myChart = ec.init(document.getElementById("3_1"), theme);
            myChart.setOption(option);
        });
}
function drawChart_3_2(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            data.sort(byLostNumDesc);
            var option = getCommonOptionTopBar();
            option.series = [{
                "name": "等级周流失率",
                "type": "bar",
                "data": []
            }];
            option.legend.data = ["等级周流失率"];
            for (var key in data) {
                option.yAxis[0].data.push(data[key].lv + "级");
                option.series[0].data.push(
                    data[key].lostrate.substring(0, data[key].lostrate.length-1)
                );
            }

            var myChart = ec.init(document.getElementById("3_2"), theme);
            myChart.setOption(option);
        });
}
function drawChart_3_3(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            data.sort(byLostNumDesc);
            var option = getCommonOptionTopBar();
            option.series = [{
                "name": "等级半月流失率",
                "type": "bar",
                "data": []
            }];
            option.legend.data = ["等级半月流失率"];
            for (var key in data) {
                option.yAxis[0].data.push(data[key].lv + "级");
                option.series[0].data.push(
                    data[key].lostrate.substring(0, data[key].lostrate.length-1)
                );
            }

            var myChart = ec.init(document.getElementById("3_3"), theme);
            myChart.setOption(option);
        });
}
function drawChart_3_4(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            data.sort(byLostNumDesc);
            var option = getCommonOptionTopBar();
            option.series = [{
                "name": "等级月流失率",
                "type": "bar",
                "data": []
            }];
            option.legend.data = ["等级月流失率"];
            for (var key in data) {
                option.yAxis[0].data.push(data[key].lv + "级");
                option.series[0].data.push(
                    data[key].lostrate.substring(0, data[key].lostrate.length-1)
                );
            }

            var myChart = ec.init(document.getElementById("3_4"), theme);
            myChart.setOption(option);
        });
}

function drawChart_4_1(data) {
    require([
            'echarts',
            'echarts/theme/blue',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec, theme) {
            data.sort(byLostSuspendNumDesc);
            var option = getCommonOptionTopBar();
            option.series = [{
                "name": "任务关卡滞留率",
                "type": "bar",
                "data": []
            }];
            option.legend.data = ["任务关卡滞留率"];
            for (var key in data) {
                option.yAxis[0].data.push(data[key].taskname);
                option.series[0].data.push(
                    0 == data[key].lost_take ? 0 : (data[key].lost_suspend/data[key].lost_take)*100
                );
            }

            var myChart = ec.init(document.getElementById("4_1"), theme);
            myChart.setOption(option);
        });
}


/* tools ↓ */
function byLostNumDesc(a, b) {
    return a.lost - b.lost;
}
function byLostSuspendNumDesc(a, b) {
    return (0==a.lost_take?0:a.lost_suspend/a.lost_take) - (0==b.lost_take?0:b.lost_suspend/b.lost_take);
}
/* tools ↑ */