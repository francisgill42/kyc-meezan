<template>
<div>
<h2>Registration</h2>
   
<v-form ref="form" class="mt-3">

<v-row>

<v-col cols="12">
<v-text-field v-model="register.email" :value="UpperCase.email" :rules="EmailRules" label="Email"></v-text-field>
</v-col>

<v-col cols="6">
<v-text-field type="password" v-model="register.password" :value="UpperCase.password" :rules="PasswordRules" label="Password"></v-text-field>
</v-col>

<v-col cols="6">
<v-text-field type="password" v-model="register.confirm_password" :value="UpperCase.confirm_password" :rules="ConfirmPasswordRules" label="Confirm"></v-text-field>
</v-col>

<v-col cols="12">
  <vue-recaptcha 
    :sitekey="this.$secrets.sitekey"
    @verify="mxVerify">    
    </vue-recaptcha>
    <span v-show="showGRC" style="color:#ff5252; font-size: 13px;">This field is required </span>
</v-col>

<v-col>

<v-btn class="primary" @click="registerUser">Continue</v-btn>
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

    reCaptcha : null,
    
    showGRC : false,

    register : {

        name : '',

        email : '',

        cell : '',

        password : '',

        confirm_password : '',
    },

    e1: 0,

    NameRules: [ 
        v => !!v || 'This field is required',
        v => /^[a-zA-Z]+$/.test(v) || 'This field must be contains aplhabets', 
        v => v.length < 25 || 'Name must be less than 25 characters',
    ],

    CellRules: [
        v => !!v || 'This field is required',  
        v => /^\d+$/.test(v) || 'Must be a number',
        v => (v.length <= 15) || 'Cell must be less than or equal to 15 characters',
    ],

    EmailRules: [ 
        v => !!v || 'This field is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],

    PasswordRules: [ 
        v => !!v || 'This field is required',
        // v => /^[A-Z]+[0-9]+[\$\+@\+]$/.test(v) || 'Password must be strong (hint : A-Z)'
    ],

    ConfirmPasswordRules: [ 
        v => !!v || 'This field is required',
        v => v == this.register.password || 'Password field does not match',
    ],
     grRules: [ 
        v => !!v || 'This field is required'
    ],
    

}

},

computed : {
    UpperCase () {
        let d = this.register;

        return [
            d.name = d.name.toUpperCase(),
            d.email = d.email.toUpperCase(),
            d.password = d.password.toUpperCase(),
            d.confirm_password = d.confirm_password.toUpperCase()
        ]
    }
},


methods: {


mxVerify(res){
    this.reCaptcha = res;
    this.showGRC = this.reCaptcha ? false : true ;
},

registerUser(){

    this.showGRC = this.reCaptcha ? false : true ;

    if(this.$refs.form.validate() && this.reCaptcha){

        localStorage.setItem('otp',this.$otp); 

        this.$router.push('/otp');

    }

},  

},
}
</script>