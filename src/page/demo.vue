<template>
    <div>
        {{ count }}
        <button @click="LOGIN">增加数字</button>
        <Sidebar />
    </div>
</template>

<script>
import Sidebar from '../components/common';
import { mapState, mapMutations } from 'vuex';
import { LOGIN } from '../store/mutation-types';
export default {
    components: {
        Sidebar,
    },
    computed: {
        ...mapState(['count']),
    },
    methods: {
        ...mapMutations([LOGIN]),
    },
};
</script>

<style></style>
