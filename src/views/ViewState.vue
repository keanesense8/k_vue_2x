<template>
  <div>
    <p>{{this.$route.path}}</p>
    <p>
      <v-chip label>store.state.msg2</v-chip>:
      <v-chip lable color="red">{{msg2}}</v-chip>
    </p>
    <p class="color=red">use mapGetters of vuex</p>
    <p>
      <v-chip label>mapGetters getMsg</v-chip>:
      <v-chip lable color="red">{{getMsg}}</v-chip>
    </p>
    <p>
      <v-chip label>mapGetters getMsg mapping to msg3</v-chip>:
      <v-chip lable color="red">{{msg3}}</v-chip>
    </p>
    <v_component></v_component>
    <v-divider></v-divider>
    Use mapActions Method:<v-btn @click="work">click</v-btn> see the console log
   
    <p>Use  Action method log :  times {{count}}</p>
    <v-text-field @keyup="log($event.target.value)"> </v-text-field>
  </div>
</template>
<script>
import v_component from "@/components/vuejslearn/Vcomponent";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { MUTATION_TYPES } from "@/mutation_type";

export default {
  components: {
    v_component
  },
  //   computed:mapGetters([MUTATION_TYPES.CHANGE_MSG])
  computed: {
    msg2() {
      //  return this.$store.state.msg , dispath use action method
    //   this.$store.dispatch("log", "log => " + this.msg3);
      return this.$store.getters.getMsg;
    },
    /**
     *
     */
    ...mapGetters(["getMsg"]),
    ...mapGetters({ msg3: "getMsg" ,count: "getCount" })
  },
  methods:{
    ...mapActions(['work' , 'log'])
  }
};
</script>

