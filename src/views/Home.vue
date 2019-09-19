<template>
</template>

<script>

import { auth } from '../helpers'

export default {
  
  mounted(){
    let authorized = auth();

    if(authorized.token){
      this.$router.push("/accounts")
    }else{
      this.$router.push("/login")
    }
  }
};
</script>
