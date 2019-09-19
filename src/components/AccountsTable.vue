<template>
    <v-container fluid>
        <v-row 
        align="start"
        no-gutters
        >
            <v-col
            cols="12"
            >
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="10"
                  hide-default-footer
                  class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>       

<script>

export default {
    data () {
    return {
      headers: [
        { text: 'Avatar', value: 'avatar',},
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo electrónico', value: 'email' },
      ],
      desserts: [
        {
          avatar: "",
          nombre: "Franco",
          apellido: "Colares",
          email: "hola@fecocode.com"
        },
        ]
    }
    }
}
</script>

<style scoped>

    .row{
        height: 100%;
    }

</style>


