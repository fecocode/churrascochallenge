<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols=12>
                    <h1 class="font-weight-light">Iniciar Sesión</h1>
                    <h3 class="font-weight-light">Ingresa tu correo electrónico y contraseña</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-alert
                    text
                    color="red lighten-2"
                    >
                      Error de autenticación. Se ha ingresado un usuario y/o contraseña erronea.
                    </v-alert>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    label="Correo Electrónico"
                    outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    :append-icon="show3 ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Contraseña"
                    hint="Al menos 8 caracteres"
                    value=""
                    class="input-group--focused"
                    @click:append="show3 = !show3"
                    outlined
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=6>
                    <v-checkbox
                    label="Recordar usuario"
                    value="remember"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols=6 class="text-lg-right">
                    <v-btn 
                    rounded
                    depressed 
                    color="primary" 
                    large
                    >
                    Siguiente
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {

    data () {
        return {
        show3: false,
        password: 'Password',
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        },
        }
    }
}
</script>

<style lang="scss">
    $titlecolor: #173d7a;
    $subtitlecolor: #000;

    h1{
        color: $titlecolor;
        font-size: 2em;
    }
</style>
