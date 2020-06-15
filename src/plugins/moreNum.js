import Vue from 'vue'
import { fromNow } from '@/utils/time'

Vue.directive('more', {
  bind: function(el, binding) {
    el.innerHTML = binding.value > 1000 ? (binding.value / 1000).toFixed(1) + 'w' : binding.value
  },
})

Vue.directive('time-to-now', {
  bind: function(el, binding) {
    el.innerHTML = fromNow(binding.value)
  },
})
