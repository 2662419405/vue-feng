<template>
  <div class="layout">
    {{ count }}
    <button @click="LOGIN">增加数字</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { LOGIN } from '@/store/mutation-types'
export default {
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations([LOGIN]),
  },
}
</script>

<style scoped></style>
