<template>
     <div>
        <!-- <v-text-field :value="vv" @input="$emit('update:vv', $event)"> -->
           <v-text-field :value="vv" @input="onInput">
        </v-text-field>
     </div>
</template>
<script>
export default {
    props:{
        "vv" : String
    },
    methods:{
       onInput: function (event) {
           //input event.target.value
        this.$emit('update:vv', event)
      }
    }
}
</script>

