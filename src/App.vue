<template>
  <v-app>
    <v-app-bar v-if="login" app>

      <v-app-bar-nav-icon v-if="login" @click="drawer_sidebar = !drawer_sidebar"></v-app-bar-nav-icon>
      <v-toolbar-title>NPWM.OP APP </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-spacer></v-spacer>

      <!-- <v-container class="py-0 fill-height"> -->

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>
        <v-btn to="/Login">Login</v-btn>

        <!-- <v-spacer></v-spacer> -->

        <!-- <v-responsive max-width="260">

        </v-responsive> -->
      <!-- </v-container> -->
    </v-app-bar>

    <v-navigation-drawer
    v-if="login"
    fixed
      width="300"
      v-model="drawer_sidebar"
      app
    >
    <Sidebar/>
      
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
              <router-view>dfdf</router-view>

        <!-- <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
  export default {
    components:{
      Sidebar
    },
    data: () => ({ 
      login:false,
      drawer_sidebar: null,
      links: [
        'Portfoilo',
        'Contract',
        'Profile',
        'Updates',
      ],
       }),
  }
</script>