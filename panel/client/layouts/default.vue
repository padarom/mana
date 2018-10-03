<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="active">Dashboard</li>
          <li>Servers</li>
          <li>Nodes</li>
          <li>Users</li>
          <li class="user">
            <a>user@example.org</a>
          </li>
        </ul>
      </nav>
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
