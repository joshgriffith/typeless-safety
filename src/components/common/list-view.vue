<template>
    <div class="list-view">
        <div v-for="item in items" :key="item.id" class="item">{{ formatter(item) }}</div>
    </div>
</template>

<style lang="scss">
    .list-view {
        min-height: 100px;
        background: rgb(10, 10, 10);
        border: solid 2px black;
        border-radius: 4px;
        padding: 5px;

        .item {
            color: white;
        }
    }
</style>

<script setup>
    defineProps({
        items: Array,
        formatter: {
            type: Function,
            default: function(item) {
                return item.toString();
            }
        }
    });
</script>