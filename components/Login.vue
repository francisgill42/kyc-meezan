<template>
<div>
<h2>Login</h2>
   
<v-form ref="form" class="mt-3">

<v-row>
<v-col cols="12">
<v-text-field v-model="login.email" :value="UpperCase.email" :rules="EmailRules" label="Email"></v-text-field>
</v-col>
<v-col cols="12">
<v-text-field type="password" v-model="login.password" :value="UpperCase.password" :rules="PasswordRules" label="Password"></v-text-field>
</v-col>

<v-col cols="12">
  <vue-recaptcha 
    :sitekey="sitekey"
    @verify="mxVerify">    
    </vue-recaptcha>
    <span v-show="showGRC" style="color:#ff5252; font-size: 13px;">This field is required </span>
</v-col>

<v-col>
<v-btn class="primary" @click="loginUser">Continue</v-btn>
</v-col>
</v-row>

</v-form>
</div>

</template>
<script>

import VueRecaptcha from 'vue-recaptcha';


export default {

components: { VueRecaptcha },

data () {
return {
    
    sitekey : '6LeZeykaAAAAAILTse8_kZa6-PSKvC7NFaZuOa7l',
    
    reCaptcha : null,
    
    showGRC : false,

    login : { email : '',password : ''},

   
    EmailRules: [ 
        v => !!v || 'This field is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],

    PasswordRules: [ 
        v => !!v || 'This field is required',
        // v => /^[A-Z]+[0-9]+[\$\+@\+]$/.test(v) || 'Password must be strong (hint : A-Z)'
    ],


}

},

computed : {
    UpperCase () {
        let d = this.login;

        return [
            d.email = d.email.toUpperCase(),
            d.password = d.password.toUpperCase(),
        ]
    }
},

mounted (){},
   
methods: {
    mxVerify(res){
    this.reCaptcha = res;
    this.showGRC = this.reCaptcha ? false : true ;
},

    loginUser(){
     this.showGRC = this.reCaptcha ? false : true ;

    if(this.$refs.form.validate() && this.reCaptcha){

        this.$router.push('/');

    }

    //if(this.$refs.form.validate()){}

    },  

},
}
</script>