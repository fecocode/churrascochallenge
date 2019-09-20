<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols=12>
                    <h2 class="font-weight-light">Carga de perfiles</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    v-model="fields.email"
                    :rules="[emailRules.required,emailRules.format]"
                    label="Correo Electrónico"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    v-model="fields.firstname"
                    :rules="[nameRules.required]"
                    label="Nombre"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    v-model="fields.lastname"
                    label="Apellido"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=12>
                    <v-text-field
                    v-model="fields.avatar"
                    label="Avatar"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                
                <v-col offset="0" offset-md="6" cols-md=6 cols-sm="12" class="text-lg-right">
                    <v-btn depressed color="error" small text
                    @click="dialog = true"
                    >
                    Reiniciar
                    </v-btn>
                    <v-btn depressed color="success" small
                    @click = "commitForm"
                    >
                    Guardar
                    </v-btn>
                </v-col>
                <v-dialog v-model="dialog" max-width="310"
                >
                    <v-card>
                    <v-card-title class="headline">Reiniciar</v-card-title>
            
                    <v-card-text>
                        ¿Estás seguro que quieres reiniciar el formulario?
                    </v-card-text>
            
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
            
                        <v-btn color="green darken-1" text @click="dialog = false"
                        >
                        Cancelar
                        </v-btn>
            
                        <v-btn color="error" @click="resetForm"
                        >
                        Reiniciar
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
    data () {
        return { 

            emailRules: {
                required: value => !!value || 'Este campo es requerido.',
                format: value => /.+@.+\..+/.test(value) || 'Ingrese un correo electrónico válido.',
            },
            nameRules: {
                required: value => !!value || 'Este campo es requerido.',
            },
            fields: {
                email: "",
                firstname: "",
                lastname: "",
                avatar: ""
            },
            dialog: false,
        }
    },
    methods: {
        resetForm: function () {
            for (var field in this.fields){
                this.fields[field] = "";
            }

            this.dialog = false;
        },
        commitForm: function () {
            
            var accountAvatar = this.fields.avatar;
            if(accountAvatar==""){
                accountAvatar = "http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png";
            }

            this.$store.commit('addAccount',{
                email:this.fields.email,
                firstname: this.fields.firstname,
                lastname: this.fields.lastname,
                avatar: accountAvatar,
            })
        },
    }
}
</script>


<style lang="scss" scoped>


</style>