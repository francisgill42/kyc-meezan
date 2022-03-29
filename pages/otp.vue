<template>

<v-card>
    <v-container>
        <OTP class="mt-10"/> 
    </v-container>
</v-card>

</template>

<script>

import OTP from '~/components/OTP'

export default {
    
    layout : 'web',

    components : { OTP }  
}
</script>