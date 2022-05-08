import user from '@/domain/user';

export default {

    data: {
        account: {
            type: user,
            get(user) {
                return {
                    id: user.id,
                    username: user.name
                }
            }
        }
    }
};