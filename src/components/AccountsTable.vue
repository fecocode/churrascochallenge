<template>
    <v-container fluid>
             
        <v-list two-line subheader>
        <v-subheader inset>Accounts</v-subheader>
  
        <v-list-item
          v-for="account in accounts"
          :key="account.email"
        >
          <v-list-item-avatar>
            <v-img :src="account.avatar"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title v-text="account.email"></v-list-item-title>
            <v-list-item-subtitle v-text="account.firstname + ' ' + account.lastname"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        </v-list>
    </v-container>
</template>       

<script>
import { mapState } from 'vuex';

export default {
    
    computed:mapState(['accounts']),

}
</script>

<style scoped>

    .row{
        height: 100%;
    }

</style>


