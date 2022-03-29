<template>

<v-card>
    <v-container>
        <Register class="mt-10"/> 
        </v-container>
</v-card>


</template>

<script>
import Register from '~/components/Register'
export default {

  layout : 'web',

  data () {
    return {
      e1:1
    }
  },

  components : { Register }
  
}
</script>