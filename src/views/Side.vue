<template>
     <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
   
              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
                @click="goto(subItem.title)"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>
</template>
<script>
export default {
    methods:{
      goto(to){
        this.$router.push({path:to})
      }
    },
    data: () => {
    return {
      items: [
        {
          action: 'local_activity',
          title: 'VueJsLearning',
           active: true,
          items: [
            { title: '2waybind' },
            { title: 'selfplugin' }
          ]
        },
        {
          action: 'local_activity',
          title: 'Reactive Bind Data',
          active: true,
          items: [
            { title: 'reactivebinddata' }
          ]
        },
        {
          action: 'local_activity',
          title: 'Vuex',
           active: true,
          items: [
            { title: 'viewstate' }
          ]
        }
      ]
    }
  }
}
</script>

