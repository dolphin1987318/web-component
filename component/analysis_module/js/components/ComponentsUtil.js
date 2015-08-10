/**
 * Created by wangxufeng on 2015/8/6.
 */

var ComponentsUtil = {
    // 根据类型ID获取图表组件
    GenChartDOMByType : function (typeId, id, height) {
        var typeId = typeId || 1;
        var height = height || 500;
        if (1 == typeId) {
            return (
                <ContentSubPageChartBarLine id={id} height={height} />
            );
        }
    }
};

module.exports = ComponentsUtil;