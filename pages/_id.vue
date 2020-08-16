<template>
  <v-card>
    <v-card-title primary-title>
      <h3>{{ hotel.name }}</h3>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item two-line>
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dirección:</v-list-item-title>
            <v-list-item-subtitle>{{ hotel.address }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-icon>
            <v-icon>mdi-city</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Ciudad:</v-list-item-title>
            <v-list-item-subtitle>{{ hotel.city }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-icon>
            <v-icon>mdi-crosshairs-gps</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Departamento:</v-list-item-title>
            <v-list-item-subtitle>{{ hotel.department }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-icon>
            <v-icon>mdi-cash-usd</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Precio por noche:</v-list-item-title>
            <v-list-item-subtitle>{{ hotel.price }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const id = params.id
    const hotel = await $axios.$get(`hotels/${id}`)
    return { hotel }
  },
  head: {
    title: 'Detalles',
  },
}
</script>
