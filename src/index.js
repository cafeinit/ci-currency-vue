/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.14
 */

import CICurrency from './CICurrency.vue'

CICurrency.plug = plug

if (window.Vue) {
  Vue.use(plug)
}

export default CICurrency

function plug(Vue) {
  Vue.component(CICurrency.name, CICurrency)
}
