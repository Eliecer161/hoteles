<template>
  <v-card>
    <v-card-title primary-title>
      Hoteles en total: {{ hotels.length }}
    </v-card-title>
    <v-card-text>
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              Nombre
            </vs-th>
            <vs-th>
              Dirección
            </vs-th>
            <vs-th
              sort
              @click="hotels = $vs.sortData($event, hotels, 'department')"
            >
              Departamento
            </vs-th>
            <vs-th sort @click="hotels = $vs.sortData($event, hotels, 'city')">
              Municipio
            </vs-th>
            <vs-th sort @click="hotels = $vs.sortData($event, hotels, 'price')">
              Precio por noche
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            v-for="hotel in hotels"
            :key="hotel._id"
            @click="go(hotel._id)"
          >
            <vs-td>
              {{ hotel.name }}
            </vs-td>
            <vs-td>
              {{ hotel.address }}
            </vs-td>
            <vs-td>
              {{ hotel.department }}
            </vs-td>
            <vs-td>
              {{ hotel.city }}
            </vs-td>
            <vs-td>
              {{ hotel.price }}
            </vs-td>
          </vs-tr>
        </template>

        <template #notFound>
          Sin resultados
        </template>
      </vs-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const hotels = await $axios.$get('hotels')
    return { hotels }
  },
  methods: {
    async go(id) {
      await this.$nuxt.$router.push(`/${id}`)
    },
  },
  head: {
    title: 'Home',
  },
}
</script>
