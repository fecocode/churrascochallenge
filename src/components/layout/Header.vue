<template>
    <div>
        <v-app-bar
          app
          color="indigo"
          dark
        >
            <v-toolbar-title>{{email}}</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn
            class="ma-2"
            tile
            rounded
            color="primary"
            @click="logout"
            >
              <v-icon left>mdi-logout</v-icon> Cerrar Sesión
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import userService from '../../services/user.service'
import { auth } from '../../helpers'

export default {
  data () {
    return {
      email: "",
    }
  },
  mounted(){
    this.email = auth().email;
  },
  methods: {
    logout: function(){
      userService.logout();
      this.$router.push("/");
    }
  }
}
</script>
