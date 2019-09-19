<template>
    <v-container fluid>
        <v-row 
        align="start"
        no-gutters
        >
            <v-col
            cols="4"
            offset-md="1"
            >
            <account-form></account-form>
            </v-col>
            <v-col
            offset-md="1"
            cols="5"
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