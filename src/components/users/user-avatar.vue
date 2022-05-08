<template>
    <div class="user-avatar" :style="{ background: color }">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .user-avatar {
        color: white;
        text-shadow:
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
        border: solid 1px rgb(150, 150, 150);
        border-radius: 32px;
        width: 48px;
        height: 48px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: saturate(40%);
        font-size: 0.9em;
    }
</style>

<script setup>

    defineProps({
        color: {
            type: String,
            default: ()=> {
                return '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        }
    });
    
</script>