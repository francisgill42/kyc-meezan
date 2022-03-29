export default ({app},inject) => {
   
    const otp = () => {
      var lower = 'abcdefghijklmnopqrstuvwxyz';
      var upper = lower.toUpperCase();
      var numbers = '0123456789';
      var finalString = lower+upper+numbers;
      var arr = finalString.split('');
      var length = arr.length;
  
      var otp = '';
      let i = 1;
  
      for (; i < 5; i++) {
  
      var random = Math.floor(Math.random() * length);
      otp += arr[random];
  
      }
      return otp;
    }

    inject('otp', otp)
  }