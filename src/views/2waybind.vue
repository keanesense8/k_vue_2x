<template>
  <div>
    <p>Change Title</p>
    <input :value="title" placeholder="change title" type="text" class="form-control">
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

import {mapGetters , mapActions} from 'vuex'

import { MUTATION_TYPES } from "@/mutation_type";

export default {
  components:{
    aaa,
    bbb
  },
  computed:{
    //  ...mapGetters({ items: "getLists" })
    items(){
      let list = this.$store.getters.getLists
      if((JSON.stringify(list) === '[]'))
        return []
      
      return list[0].items
    },
    title(){
      let list = this.$store.getters.getLists
      
      console.log("title :" + (JSON.stringify(list) === '[]'))
      
      if((JSON.stringify(list) === '[]'))
        return 'title'
      console.log('get value from list ' + list[0].title)
      return list[0].title
 
    }
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
        let list = this.$store.getters.getLists
        // console.log('list:' + list)
        list[0].items = this.items
        this.$store.commit(MUTATION_TYPES.POPULATE_SHOPPING_LISTS , list)
        this.$store.dispatch("updateList" , list[0]);
         
      }
    },
    ...mapActions(['populateList'])
  },
  mounted() {
    /** 将db.json数据导入state.shop_list */
    this.populateList()
    console.log('mounted')
    console.log(this.$store.getters.getLists)
  },
  data: () => {
    return {
      items2: [
        { text: "Bananas", checked: true },
        { text: "Apples", checked: false },
        { text: "Orange", checked: true },
        { text: "Melon", checked: false }
      ],
      title2: "My Shopping List",
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

