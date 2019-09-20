<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="font-weight-light">Iniciar Sesión</h1>
                    <h3 class="font-weight-light">Ingresa tu correo electrónico y contraseña</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-alert
                    text
                    color="red lighten-2"
                    v-show="!isAuthorized"
                    >
                      Error de autenticación. Se ha ingresado un usuario y/o contraseña erronea.
                    </v-alert>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                    :rules="[emailRules.required,emailRules.format]"
                    label="Correo Electrónico"
                    outlined
                    v-model="email"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col >
                    <v-text-field
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :rules="[passwordRules.required,]"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    label="Contraseña"
                    value=""
                    class="input-group--focused"
                    @click:append="showPassword = !showPassword"
                    outlined
                    v-model="password"
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
                    @click="login"
                    :loading="loading"
                    :disabled="loading"
                    >
                    Siguiente
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import userService from "../services/user.service"

export default {

    data () {
        return {
            email: "",
            password: "",
            isAuthorized: true,
            loading: false,

            emailRules: {
                required: value => !!value || 'Este campo es requerido.',
                format: value => /.+@.+\..+/.test(value) || 'Ingrese un correo electrónico válido.',
            },

            showPassword: false,
            passwordRules: {
                required: value => !!value || 'Este campo es requerido.',
            },
        }
    },
    methods:{
        login: function () {
            const _this = this
            this.loading = true
            userService.login(this.email, this.password)
            .then(function(response){
                if(response.token){
                    _this.$router.push("/accounts")
                }else{
                    _this.isAuthorized = false;
                    _this.password = "";
                    _this.loading = false;
                }
            })                
        }
    }
}
</script>

<style lang="scss" scoped>
    $titlecolor: #173d7a;

    h1{
        color: $titlecolor;
        font-size: 2em;
    }
</style>
