<<template>
<v-container grid-list-md text-xs-center>
   <v-layout row wrap>
       <v-flex xs5>
           <p>Child input: </p>
           <e_input @changeArea="chArea"></e_input>
           <!-- <e_input ></e_input> -->
       </v-flex>
       <v-flex xs5 >
          <v-chip v-for="v in areaText" color="primary" text-color="white" >{{v}}</v-chip>
         
       </v-flex>
   </v-layout>
   </v-container>
</template>

<script>
import e_input from "@/components/vuejslearn/EventTestComponent";

export default {
  data: () => {
    return {
        areaText: []
        }
  },
  components: {
    e_input
  },
  methods: {
    chArea(msg) {
        // this.areaText = this.areaText + '\n' + msg
        this.areaText.push(msg)
    }
  },created() {
     this.$on('changeArea', msg => this.chArea(msg));
    //  this.$on('changeArea', msg => console.log(msg));
  },

};
</script>

<style>
</style>
