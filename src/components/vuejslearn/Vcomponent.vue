<template>
  <div>
    <p>sub</p>
    <v-text-field label="change state " @keyup="changestate"></v-text-field>
    
  </div>
</template>
<script>
import {MUTATION_TYPES} from '@/mutation_type'
export default {
    methods:{
        changestate(e){
            // console.log(this.$store.state.msg)
            // console.log(e.target.value)
            //change state in store
                    
            this.$store.commit(MUTATION_TYPES.CHANGE_MSG , e.target.value)
        }
    }
};
</script>

