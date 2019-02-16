<template>
    <div>
        <v-text-field
          label="empty"
          solo
          :value="vv"
          disabled
        >
            
        </v-text-field>
  </div>
</template>
<script>
export default {
    props:{
        'vv' : String
    }
}
</script>

