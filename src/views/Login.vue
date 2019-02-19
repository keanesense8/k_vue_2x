<template>
  <div>Status:
    <v-chip color="primary" text-color="white">{{login}}</v-chip>
   
     <v-btn v-show="this.$store.getters.getStatus === 1" dark @click="logout">LoginOut</v-btn>
    
    <form>
      <v-text-field v-model="name" :counter="10" label="Name" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => {
    return {
      name: "",
      email: ""
    };
  },
  computed: {
    login() {
      let status = this.$store.getters.getStatus;
      if (status === 1) return "login";
      return "no login";
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("login", this.name);
    },
    clear() {
      this.name = "";
      this.email = "";
    },
    ...mapActions(["logout" , "logined"])

  }
};
</script>

<style>
</style>
