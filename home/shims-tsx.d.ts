/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 15:09:27
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2020-12-17 16:24:44
 * @Description:
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
