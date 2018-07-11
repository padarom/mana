<template>
  <div id="app">
    <h1 id="title">
      Mana
    </h1>

    <header id="header">
      <a href="#" class="user">
        Your Username <img class="avatar" src="https://placehold.it/40x40">
      </a>
      <a href="#">
        Settings
      </a>
      <a href="#">
        Sign out
      </a>
    </header>

    <server-navigation id="navigation"></server-navigation>

    <nuxt id="content" />
  </div>
</template>

<script>
import ServerNavigation from '~/components/Navigation.vue'

export default {
  components: {
    ServerNavigation
  }
}
</script>
