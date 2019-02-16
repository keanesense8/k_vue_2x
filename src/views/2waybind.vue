<template>
  <div>
    <p>Change Title</p>
    <input v-model="title" placeholder="change title" type="text" class="form-control">
    <v-divider></v-divider>
    <div class="input-group">
      <input
        v-model="newItem"
        placeholder="add shopping list item"
        type="text"
        class="form-control"
        @keyup.enter="addItem"
      >
      <span class="input-group-btn">
        <v-btn color="success" @click="addItem">Add</v-btn>
      </span>
    </div>
    <ul>
      <li>
        <h2>{{ title }}</h2>
      </li>
      <li v-for="item in items" :class="{ 'removed':item.checked }">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="item.checked">
            {{item.text }}
          </label>
        </div>
      </li>
    </ul>
    <v-divider></v-divider>
    <ul>
      <li><h1>SYNC SIMPLE</h1></li>
      <li>another child display change value</li>
      <li><aaa :vv="abcomponentvalue"></aaa></li>
      <li>bbb is child , change value</li>
      <li><bbb :vv.sync="abcomponentvalue"> </bbb></li>

      <li>father change: <v-text-field v-model:value="abcomponentvalue" ></v-text-field></li>
      <li>father:{{abcomponentvalue}}</li>
    </ul>
  </div>
</template>
<script>
import aaa from '@/components/vuejslearn/Acomponent'
import bbb from '@/components/vuejslearn/Bcomponent'

export default {
  components:{
    aaa,
    bbb
  },
  methods: {
    addItem() {
      let text = this.newItem;
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = "";
      }
    }
  },
  data: () => {
    return {
      items: [
        { text: "Bananas", checked: true },
        { text: "Apples", checked: false },
        { text: "Orange", checked: true },
        { text: "Melon", checked: false }
      ],
      title: "My Shopping List",
      newItem: "",
      abcomponentvalue:"Test"
    };
  }
};
</script>
<style>
.form-control {
  border: 1px;
}
</style>

