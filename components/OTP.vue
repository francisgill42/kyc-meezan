<template>

<div> 
<h2>Enter your OTP</h2>

<v-form ref="form" class="mt-3">

<v-row>
<v-col cols="12">
<v-text-field v-model="otp" :rules="otpRules" label="OTP"></v-text-field>
<span v-show="msg" style="color:#ff5252; font-size: 13px;">{{msg}}</span>
</v-col>

<v-col cols="12">
<v-btn class="primary" @click="CheckUserIsValid">Continue</v-btn>

<v-btn :disabled="showResendOTP" class="primary" @click="resendOTP">Resend OTP {{showResendOTP}}</v-btn>

</v-col>

<v-col>
<span style="color:#ff5252; font-size: 17px;">{{counter_msg}}</span>
</v-col>
</v-row>

</v-form>
</div>

</template>
<script>

export default {


data : () => ({ 
    counter_msg : '',
    otp : '',
    otpRules : [
        v => !!v || 'This field is required'
    ],
    mins : 1,
    secs : 30,
    msg : '',
    expired_msg : '',
    showResendOTP : true,
    token : '',
    }), 


mounted (){ 
        this.counter(this.mins,this.secs);    
     },
   
methods: {
    counter (m,s) {

        localStorage.setItem('otp',this.$otp());
        this.token =  localStorage.getItem('otp');
        this.showResendOTP =  this.token ? true : false;

        if(this.token){

       
        var timer = setInterval( () => {
            s -= 1; 
            this.counter_msg = `Your OTP will expire in ${m}:${s}`;

            if(m == 0 && s == 0){

                    clearInterval(timer);
                    if(localStorage.getItem('otp')){
                        localStorage.removeItem('otp');
                    }
                    this.counter_msg = `Your OTP is expired ${m}:${m}`;
                    this.showResendOTP = false;
            }

            if(s == 0){
                m -= 1; 
                s = 6;   
            }
            
        },1000);
        } 
    },

    resendOTP () {
        this.counter(this.mins,this.secs);
    },

    

    CheckUserIsValid(){

    if(this.$refs.form.validate()){

        if(localStorage.getItem('otp') == this.otp){
            localStorage.removeItem('otp');
            this.$router.push('/login');
            this.msg = '';
        }
        else{
            this.msg = 'OTP does not match'
        }

        }

    },  

},
}
</script>