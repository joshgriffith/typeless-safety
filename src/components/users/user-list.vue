<template>
    <div class="user-list">
        <user-avatar v-for="user in users" :key="user.id" @click="$emit('select', user)">{{ user.name }}</user-avatar>
    </div>
</template>

<style lang="scss">
    .user-list {
        border: solid 1px rgb(70, 70, 70);
        background: black;
        border-radius: 30px;
        padding: 5px;

        .user-avatar {
            cursor: pointer;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>

<script setup>
    import UserAvatar from './user-avatar.vue';

    defineProps({
        users: Array
    });

    defineEmits(['select']);
</script>