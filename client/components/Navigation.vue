<template>
  <nav>
    <ul>
      <li v-for="server in servers" :key="server">
        <img src="https://placehold.it/100x100">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      servers: ['a', 'b', 'c', 'd']
    }
  }
}
</script>