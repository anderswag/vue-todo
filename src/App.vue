<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <input class="taskInput" type="text" autofocus=true v-on:keyup.enter="addItem"  v-model="task" placeholder="lets rock and roll"/>
    <ul>
      <li
        v-bind:key="task.id"
        v-for="task in allTasks" 
        v-on:click="checkItem(task)" 
        v-on:dblclick="deleteItem(task)"
        class="item"
      >
        <h1 v-bind:class="{item__gradient: true, item__complete: task.isComplete}">{{task.name}}</h1>
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
body {
  margin: 0;
}

#app {
  display:flex;
  height: 100vh;
  /* background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
ul {
  justify-content: center;
  list-style-type: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}
.item {
  cursor: pointer;
}

.item__gradient {
  background: -webkit-linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); 
  /* text-decoration: initial; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.item__complete { 
  color: grey;
  text-decoration: line-through;
  -webkit-background-clip: text;
  -webkit-text-fill-color: inherit;
}
.taskInput {
  width: 200px;
  height: 40px;
  border: solid 1px black;
}
</style>
