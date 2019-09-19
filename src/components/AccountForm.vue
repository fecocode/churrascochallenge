<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols=12>
                    <h2 class="font-weight-light">Carga de perfiles</h2>
                </v-col>
            </v-row>
            <!--<v-row>
                
                <v-col cols=12>
                    <v-alert
                    text
                    color="red lighten-2"
                    >
                      Error de autenticación. Se ha ingresado un usuario y/o contraseña erronea.
                    </v-alert>
                </v-col>
            </v-row>-->
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    label="Correo Electrónico"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    label="Nombre"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    label="Apellido"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    label="Avatar"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                
                <v-col 
                offset-md="6"
                cols=6 
                class="text-lg-right">
                    <v-btn 
                    depressed 
                    color="error" 
                    small
                    text
                    >
                    Reiniciar
                    </v-btn>
                    <v-btn 
                    depressed 
                    color="success" 
                    small
                    >
                    Guardar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<style lang="scss" scoped>


</style>