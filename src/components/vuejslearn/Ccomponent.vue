<template>
  <div>
    <v-text-field v-model:value="data0" label="enter" @keyup="cadd"></v-text-field>
    <v-btn color="success" @click="cadd">sendToFatherComponent</v-btn>
  </div>
</template>
<script>
export default {
  data: () =>{
    return {
      data0 : ""
    }
  },
  methods:{
    cadd(){
      this.$emit('add' , this.data0)
    }
  }
}
</script>

