<template>
    <div class="chat-app">
        <user-list :users="friends" @select="recipient = $event"></user-list>

        <div v-if="recipient" class="conversation">
            <list-view :items="filteredMessages" delimiter=": "></list-view>
            <input-field @submit="add"></input-field>
        </div>
    </div>
</template>

<style lang="scss">
    .chat-app {
        display: flex;
        justify-content: center;

        .user-list {
            position: absolute;
            left: 10px;
            top: 10px;
            bottom: 10px;
        }

        .conversation {
            display: flex;
            flex-direction: column;
            width: 800px;
            height: 600px;

            .list-view {
                flex: 1;
            }

            .input-field {
                margin-top: 10px;
            }
        }
    }
</style>

<script setup>
    import { computed, ref } from 'vue';
    import { ListView, InputField, UserList } from './';

    const user = { id: 1, name: 'You' };

    const friends = [
        { id: 2, name: 'Mack' },
        { id: 3, name: 'Andy' },
        { id: 4, name: 'Chris' }
    ];

    const recipient = ref();
    const messages = ref([]);

    const filteredMessages = computed(() => {
        return messages.value.filter(each => each.recipient == recipient.value.id);
    });

    function add(content) {
        
        messages.value.push({
            id: messages.value.length + 1,
            recipient: recipient.value.id,
            name: user.name,
            content: content,
            toString() {
                return this.name + ': ' + this.content;
            }
        });
    }
    
</script>