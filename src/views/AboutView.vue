<template>
    <sidebar/>
    <main>
    </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
    name: "About",
    components: { Sidebar },
}
</script>

<style lang="scss" scoped>

main {
    background-color: #4faa00;
}

</style>