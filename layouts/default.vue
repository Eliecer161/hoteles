<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hoteles',
    }
  },
  methods: {
    async logout() {
      await this.$fireAuth.signOut()
      await this.$nuxt.$router.replace('/login')
    },
  },
}
</script>
