<template>
<div>
    <v-app>
      <v-toolbar-title flat  v-text="`test`" />
            <v-app-bar app class="primary">
            <!-- {{title}} -->
            <span class="white--text" > <b>Know Your Customer</b></span>
            <v-spacer />
            <!-- <span class="white--text">logout</span> -->
            <!-- <span v-if="this.$auth.user" > Welcome, <b>{{this.$auth.user.name}}</b> -->
            <!-- <v-btn text> -->
            <!-- {{logout_btn.label}} -->

            <!-- </v-btn> -->
            <!-- </span> -->
            </v-app-bar>

            <v-main>
              
<v-container>
       <nuxt />
</v-container>
</v-main>
<v-footer app class="primary white--text">
<span>&copy; {{new Date().getFullYear()}}</span> 
</v-footer>
  </v-app>


</div>
</template>