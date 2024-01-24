<template>
  <!в идеале использовать нативные теги, типа form>
    <div class="auth-container">
        <h1>Введите ваш ключ</h1>
        <input type="text"
            v-model="key"
            class="auth-key">
      <!почему стили не в классах?>
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
          // для чего тут page? что бы хранить 1 ?, тогда вынеси в константы
            page: '1'
        }
    },
    methods: {
        async sendRequest() {
            // mapAction лучше использовать что бы  каждый раз this.$store.dispatch
            await this.$store.dispatch('getKey', this.key) // Получили input key и сохранили

          // Запрос вынести в стор и там мутации проводить, зачем здесь?
            const response = await this.$api.request.getAllMovies(this.page)
            await this.$store.dispatch('fetchApi', response)
            await this.$store.dispatch('getStatusAuth', response.status)

          //Почему state а не getters
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
      /*даже idea подсвечивет, что нельзя писать px у 0*/
      padding: 0px 5px ;
        font-family: 'Times New Roman', Times, serif;
        text-align: center;
    }

    .auth-key:focus {
        outline: none;
    }
</style>