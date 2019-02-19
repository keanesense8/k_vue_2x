<template>
  <div>
    <v-text-field @keydown="textinput" 
    outline clearable label="Message" type="text"></v-text-field>
  </div>
</template>
<script>
export default {
  date: () => {
    return {
      in_value: "init"
    };
  },
  methods: {
    textinput(event) {
      if (event.which === 13) {
        console.log("textinput :" + event.target.value);
        /**
         * two way 
        
        1.
        this.$emit("changeArea", event.target.value);
        use <e_input @changeArea="chArea"></e_input>  in the parent
        2. */
        this.$parent.$emit("changeArea", event.target.value);
        //use   this.$on('changeArea', msg => this.chArea(msg)); in the parent
      }
    }
  }
};
</script>

<style>
</style>

