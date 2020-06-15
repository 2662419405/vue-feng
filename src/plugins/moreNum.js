import Vue from 'vue'

Vue.directive('more', {
  bind: function(el, binding) {
    console.log(binding)
    el.innerHTML = binding.value > 10000 ? parseInt(binding.value / 10000) + 'w' : binding.value
  },
})
