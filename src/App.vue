<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import Accounts from './views/Accounts';

export default {
  name: 'App',
  components: {
    Accounts,
  },
  data: () => ({
    //
    
  }),
};
</script>
