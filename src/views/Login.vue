<template>
    <v-container fluid>
        <v-row 
        align="center"
        >
            <v-col
            cols="10"
            lg="4"
            offset="1"
            >
                <login-form></login-form>
            </v-col>
        </v-row>        
        <v-footer app>
            <Footer></Footer>
        </v-footer>
    </v-container>
</template>

<script>
import Footer from '../components/layout/Footer';
import LoginForm from '../components/LoginForm';

import { auth } from '../helpers'

export default {
  components: {
    Footer,
    LoginForm,
  },
  beforeCreate(){
    let authorized = auth();

    if(authorized.token){
      this.$router.push("/accounts")
    }
  }
};
</script>

<style lang="scss" scoped>
    
    .container{
        background-image: url("../assets/backgrounds/login-bg.svg");
        background-size: 100% auto;
        background-position-y: 50%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .v-footer{
        padding:0;
        margin:0;
    }
    .row{
        height: 100%;
    }

    @media screen and (max-width: 600px){
        .container{
            background: none;
        }
    }
</style>