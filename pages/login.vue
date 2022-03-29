<template>

<v-card>
    <v-container>
        <Login class="mt-10"/> 
    </v-container>
</v-card>

</template>

<script>

import Login from '~/components/Login'

export default {
    
    layout : 'web',

    components : { Login }  
}
</script>