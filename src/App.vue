<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <input class="taskInput" type="text" autofocus=true v-on:keyup.enter="addItem"  v-model="task" placeholder="lets rock and roll"/>
    <button v-on:click="addItem">Add</button>
    <ul>
      <li
        v-bind:key="task.id"
        v-for="task in allTasks" 
        v-on:click="checkItem(task)" 
        v-on:dblclick="deleteItem(task)"
        class="item"
      >
        <h1 v-bind:class="{item__complete: task.isComplete}">{{task.name}}</h1>
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
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  justify-content: center;
  list-style-type: none
}
.item__complete { 
  color: grey;
  text-decoration: line-through;
}
.taskInput {
  width: 200px;
  height: 40px;
  border: solid 1px black;
}
.item {
  cursor: pointer;
}
</style>
