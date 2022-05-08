<template>
    <form class="input-field" @submit.prevent="onSubmit">
        <input v-model="input" type="text" autofocus />
    </form>
</template>

<style lang="scss">
    .input-field {
        display: flex;

        input {
            flex: 1;
            height: 20px;
            background: rgb(180, 180, 180);
            border: solid 2px black;
            border-radius: 4px;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';

    let input = ref();
    let emit = defineEmits(['submit']);

    function onSubmit() {
        if(input.value && input.value.length) {
            emit('submit', input.value);
            input.value = '';
        }
    }
</script>