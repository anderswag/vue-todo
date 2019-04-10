<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <input type="text" autofocus=true v-on:keyup.enter="addItem"  v-model="task" placeholder="lets rock and roll"/>
    <button v-on:click="addItem">Add</button>
    <ul>
      <li 
        v-for="task in allTasks" 
        v-on:click="checkItem(task)" 
        v-on:dblclick="deleteItem(task)"
      >
        <h1 v-bind:class="{complete: task.isComplete}">{{task.name}}</h1>
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapActions } from 'vuex'

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addItem: function() {
      this.$store.dispatch('addItem', this.task)
      this.task = ''
    },
    deleteItem: function(task) {
      let itemId = task.id
      this.$store.dispatch('deleteItem', itemId)
    },
    checkItem: function(task) {
      let itemId = task.id
      this.$store.dispatch('checkItem', itemId)
    },
  },
  computed: {
    allTasks() {
      return this.$store.state.items
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none
}
.complete { 
  color: grey;
  text-decoration: line-through;
}
</style>
