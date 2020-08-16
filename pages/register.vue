<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card>
        <v-card-title primary-title>
          <v-spacer></v-spacer>
          <h3>Registrarse</h3>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            prepend-inner-icon="mdi-email"
            label="Email"
            outlined
            dense
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            prepend-inner-icon="mdi-key"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Contraseña"
            outlined
            dense
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="show = !show"
          ></v-text-field>
          <v-text-field
            v-model="name"
            prepend-inner-icon="mdi-account"
            label="Nombre"
            outlined
            dense
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <vs-button
            :loading="loading"
            gradient
            block
            size="large"
            :disabled="$v.$invalid"
            @click="register"
          >
            Registro
            <template #animate>
              <i class="bx bx-user-plus"></i>
            </template>
          </vs-button>
          <vs-button border to="/login" block size="large">
            Iniciar Sesión
            <template #animate>
              <i class="bx bx-log-in-circle"></i>
            </template>
          </vs-button>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  layout: 'blank',
  data() {
    return {
      loading: false,
      show: false,
      email: '',
      password: '',
      name: '',
    }
  },
  validations: {
    email: { required, email },
    password: { required },
    name: { required },
  },
  methods: {
    async register() {
      this.loading = true
      try {
        await this.$axios.$post('/auth/register', {
          email: this.email,
          password: this.password,
          name: this.name,
        })
        this.$vs.notification({
          sticky: true,
          color: 'success',
          position: 'top-left',
          title: 'Usuario creado correctamente',
          text: 'Ya puedes iniciar sesión',
          icon: "<i class='bx bxs-happy-beaming'></i>",
          progress: 'auto',
        })
        this.loading = false
      } catch (error) {
        this.loading = false
        this.$vs.notification({
          sticky: true,
          color: 'danger',
          position: 'top-left',
          title: error.message,
          icon: "<i class='bx bxs-bug' ></i>",
          progress: 'auto',
        })
      }
    },
  },
  head: {
    title: 'Registro',
  },
}
</script>
