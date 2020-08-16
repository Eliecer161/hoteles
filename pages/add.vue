<template>
  <v-card>
    <v-card-title primary-title>
      <v-spacer></v-spacer>
      <h3>Agregar hotel</h3>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="name"
        prepend-inner-icon="mdi-text"
        label="Nombre"
        outlined
        dense
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="address"
        prepend-inner-icon="mdi-map-marker"
        label="Dirección"
        outlined
        dense
        @input="$v.address.$touch()"
        @blur="$v.address.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="city"
        prepend-inner-icon="mdi-city"
        label="Ciudad"
        outlined
        dense
        @input="$v.city.$touch()"
        @blur="$v.city.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="department"
        prepend-inner-icon="mdi-crosshairs-gps"
        label="Departamento"
        outlined
        dense
        @input="$v.department.$touch()"
        @blur="$v.department.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="price"
        type="number"
        prepend-inner-icon="mdi-cash-usd"
        label="Precio por noche"
        outlined
        dense
        @input="$v.price.$touch()"
        @blur="$v.price.$touch()"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <vs-button
        :loading="loading"
        gradient
        size="large"
        :disabled="$v.$invalid"
        @click="add"
      >
        Agregar hotel
        <template #animate>
          <i class="bx bx-plus-circle"></i>
        </template>
      </vs-button>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      loading: false,
      show: false,
      name: '',
      address: '',
      city: '',
      department: '',
      price: '',
    }
  },
  validations: {
    name: { required },
    address: { required },
    city: { required },
    department: { required },
    price: { required, numeric },
  },
  mounted() {},
  methods: {
    async add() {
      this.loading = true
      try {
        await this.$axios.$post('/hotels/create', {
          name: this.name,
          address: this.address,
          city: this.city,
          department: this.department,
          price: this.price,
        })
        this.$vs.notification({
          sticky: true,
          color: 'success',
          position: 'top-left',
          title: 'Agregado correctamente',
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
    title: 'Add hotel',
  },
}
</script>
