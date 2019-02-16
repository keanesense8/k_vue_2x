<template>
  <div>
    <h1>Self</h1>
      <v-text-field
            label="Regular"
            placeholder="Placeholder"
            v-model="n"
            background-color="grey"
            box
            color="purple"></v-text-field>
    <ul>
        <li><span v-square="n"></span></li>
        <li><span v-sqrt="n"></span></li>
    </ul>
  </div>
</template>
<script>
export default {
    data: () => {
        return {
            n : 4
        }
    }
};
</script>

