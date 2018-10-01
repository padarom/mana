<template>
  <form class="form" @submit.prevent="attemptLogin">
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  layout: 'login',

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async attemptLogin () {
      await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })

      this.$router.push('/')
    }
  }
}
</script>
