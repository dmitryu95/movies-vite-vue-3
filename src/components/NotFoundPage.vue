<template>
  <div class="not-found-page"
    @click="routToAuth">
    <h1 class="not-found-page__title">
      404 - Страница не найдена
    </h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import router from "../routers/router.js";
export default defineComponent({
  name: 'not-found-page',
  methods: {
    routToAuth () {
      router.push({name: 'AuthPage'})
    }
  }
})

</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
