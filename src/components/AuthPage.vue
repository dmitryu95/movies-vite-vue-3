<template>
    <div class="auth-container">
        <h1>Введите ваш ключ</h1>
        <input type="text"
            v-model="key"
            class="auth-key">
        <button type="button"
            style="width:100%;
                margin-top: 50px;"
            @click="sendRequest">Войти</button>
    </div>
</template>

<script>

export default {
    name: 'auth-page',
    data() {
        return {
            key: '',
            page: '1'
        }
    },
    methods: {
        async sendRequest() {
            await this.$store.dispatch('getKey', this.key) // Получили input key и сохранили
            const response = await this.$api.request.getAllMovies(this.page)
            await this.$store.dispatch('fetchApi', response)
            await this.$store.dispatch('getStatusAuth', response.status)
            if(this.$store.state.auth.statusAuth) { 
                this.$router.push({ name: 'MoviesList'})
            } else this.$router.push({ name: 'AuthPage'})
        },
    }
}
</script>

<style scoped>
.auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 300px;
    }
    .auth-key {
        height: 40px;
        width: 350px; 
        border: 4px solid #88b3f7;
        border-radius: 12px;
        font-size: 20px;
        padding: 0px 5px ;
        font-family: 'Times New Roman', Times, serif;
        text-align: center;
    }

    .auth-key:focus {
        outline: none;
    }
</style>