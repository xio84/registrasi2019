<template>
  <v-app>
    <v-content>
      <Registration/>
    </v-content>
  </v-app>
</template>

<script>
import Registration from "./components/Registration";

export default {
  name: 'App',
  components: {
      Registration,
  },
  data () {
    return {
      //
    }
  }
}
</script>
