/* eslint-disable */
import material from './components/Material.vue'
import compact from './components/Compact.vue'
import swatches from './components/Swatches.vue'
import slider from './components/Slider.vue'
import sketch from './components/Sketch.vue'
import CmykSketch from './components/CmykSketch.vue'
import chrome from './components/Chrome.vue'
import photoshop from './components/Photoshop.vue'

Vue.config.debug = true

let defaultProps = {
  hex: '#fafa1a'
}

new Vue({
  el: '#app',
  components: {
    'material-picker': material,
    'compact-picker': compact,
    'swatches-picker': swatches,
    'slider-picker': slider,
    'sketch-picker': sketch,
    'cmyk-sketch-picker': CmykSketch,
    'chrome-picker': chrome,
    'photoshop-picker': photoshop
  },
  data: {
    colors: defaultProps
  }
})
