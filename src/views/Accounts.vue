<template>
    <v-container fluid>
        <feco-header></feco-header>
        <feco-content></feco-content>
        <v-footer app>
            <Footer></Footer>
        </v-footer>
    </v-container>
</template>

<script>
import FecoHeader from '../components/layout/Header';
import FecoContent from '../components/layout/Content';
import Footer from '../components/layout/Footer';

import { auth } from '../helpers'

export default {
  data () {
    return{
      userEmail: ""
    }
  },
  components: {
    FecoHeader,
    FecoContent,
    Footer,
  },
  beforeCreate(){
    if(!auth().token){
      this.$router.push("/login")
    }
  }
};
</script>