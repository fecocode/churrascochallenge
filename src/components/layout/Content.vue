<template>
    <v-container fluid>
        <v-row 
        align="start"
        no-gutters
        >
            <v-col
            cols="10"
            md="4"
            offset="1"
            >
            <account-form></account-form>
            </v-col>
            <v-col
            cols="12"
            md="5"
            offset="0"
            offset-md="1"
            >
            <accounts-table></accounts-table>
            </v-col>
        </v-row>
    </v-container>
</template>       

<script>
import AccountForm from '../AccountForm';
import AccountsTable from '../AccountsTable'

export default {
    components: {
        AccountForm,
        AccountsTable,
    },
}
</script>

<style scoped>

    .row{
        height: 100%;
    }

</style>