<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card>
        <v-card-title primary-title>
          <v-spacer></v-spacer>
          <h3>Iniciar Sesión</h3>
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
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <vs-button
            :loading="loading"
            gradient
            block
            size="large"
            :disabled="$v.$invalid"
            @click="login"
          >
            Iniciar Sesión
            <template #animate>
              <i class="bx bx-log-in-circle"></i>
            </template>
          </vs-button>
          <vs-button border to="/register" block size="large">
            Registro
            <template #animate>
              <i class="bx bx-user-plus"></i>
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
    }
  },
  validations: {
    email: { required, email },
    password: { required },
  },
  mounted() {},
  methods: {
    async login() {
      this.loading = true
      try {
        const result = await this.$axios.$post('/auth/login', {
          email: this.email,
          password: this.password,
        })
        await this.$fireAuth.signInWithCustomToken(result.token)
        setTimeout(async () => {
          await this.$nuxt.$router.replace('/')
        }, 1000)
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
    title: 'Login',
  },
}
</script>
