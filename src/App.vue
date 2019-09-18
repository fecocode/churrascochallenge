<template>
  <v-app>
    <v-content>
      <Login></Login>
    </v-content>
  </v-app>
</template>
<script>
import Login from './views/Login';

export default {
  name: 'App',
  components: {
    Login,
  },
  data: () => ({
    //
    
  }),
};
</script>
