<template>
  <div id="app">
    <h1>Mirage JS</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <div class="user-info">
          <span>Name: {{ user.name }}</span>
          <span>Age: {{ user.age }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: [],
    };
  },

  created() {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        this.users = json.users;
      });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  text-align: left;
}

.user-info {
  padding: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #123;

  display: flex;
  justify-content: space-between;
}
</style>
