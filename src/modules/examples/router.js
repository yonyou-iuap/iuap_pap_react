import React from 'react'
import { Route } from 'mirrorx'


import {
    ConnectedBar,
    ConnectedLine,
    ConnectedPie,
    ConnectedBarLine,
    ConnectedRadar
} from './echarts/container';

import {
    ConnectedEditor
} from './editor/container'

import {
    Upload
} from './upload/container'

import {
    ConnectedEditTable
} from './edit-table/container'

import {
    ConnectedWeekPicker
} from './week-picker/container'
/**
 * 路由说明：
 * 1、echarts 图表示例
 *      bar:柱状图
 *      line:折线图
 *      pie:饼图
 *      bar-line:柱状折线图
 * 2、富文本编辑器示例
 * 3、上传组件示例
 * 4、编辑表格示例
 * 5、周选择示例
 */
export default ({ match }) => (
    <div className="templates-route">
        <Route exact path={`${match.url}/bar`} component={ConnectedBar} />
        <Route exact path={`${match.url}/line`} component={ConnectedLine} />
        <Route exact path={`${match.url}/pie`} component={ConnectedPie} />
        <Route exact path={`${match.url}/bar-line`} component={ConnectedBarLine} />
        <Route exact path={`${match.url}/radar`} component={ConnectedRadar} />
        <Route exact path={`${match.url}/editor`} component={ConnectedEditor} />
        <Route exact path={`${match.url}/upload`} component={Upload} />
        <Route exact path={`${match.url}/edit-table`} component={ConnectedEditTable} />
        <Route exact path={`${match.url}/week-picker`} component={ConnectedWeekPicker} />
    </div>
)