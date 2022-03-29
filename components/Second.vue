<template>
<v-container>
<v-form ref="form">

<v-container grid-list-xl>
<v-layout wrap>


 <v-flex md12>
   <label class="mb-3">1.Age? </label>
   <v-radio-group>
   <v-radio label="A. 60 Above" value="60 Above"></v-radio>
   <v-radio label="B. 40-60" value="40-60"></v-radio>
   <v-radio label="C. 30-35" value="30-35"></v-radio>
   <v-radio label="D. 30 Below" value="30 Below"></v-radio>
   </v-radio-group>

   </v-flex>

   <v-flex md12>
   <label class="mb-3">2. What is your investment horizon? </label>
   <v-radio-group>
   <v-radio label="A. Up to 6 months" value="Up to 6 months"></v-radio>
   <v-radio label="B. Up to 1 year" value="Up to 1 year"></v-radio>
   <v-radio label="C. 1-3 years" value="1-3 years"></v-radio>
   <v-radio label="D. More than 3 years" value="More than 3 years"></v-radio>
   </v-radio-group>

   </v-flex>

   <v-flex md12>
   <label class="mb-3">3. Define your investment knowledge?</label>
   <v-radio-group>
   <v-radio label="A. Up to 6 months" value="Up to 6 months"></v-radio>
   <v-radio label="B. Up to 1 year" value="Up to 1 year"></v-radio>
   <v-radio label="C. 1-3 years" value="1-3 years"></v-radio>
   <v-radio label="D. More than 3 years" value="More than 3 years"></v-radio>
   </v-radio-group>

   </v-flex>

   <v-flex md12>
   <label class="mb-3">4. What is your risk appetite?</label>
   <v-radio-group>
   <v-radio label="A. Lower" value="Lower"></v-radio>
   <v-radio label="B. Low" value="Low"></v-radio>
   <v-radio label="C. Moderate" value="Moderate"></v-radio>
   <v-radio label="D. High" value="High"></v-radio>
   </v-radio-group>

   </v-flex>

    <v-flex md12>
   <label class="mb-3">5. How will you define your investment experience by asset classes? You may select multiple options*</label>
   <v-radio-group>
   <v-radio label="A. Bank Deposists" value="A. Bank Deposists"></v-radio>
   <v-radio label="B. Money Market/National Savings" value="B. Money Market/National Savings"></v-radio>
   <v-radio label="C. Fixed Income/Dept" value="C. Fixed Income/Dept"></v-radio>
   <v-radio label="D. Equity/Forex/Commodity" value="D. Equity/Forex/Commodity"></v-radio>
   </v-radio-group>

   </v-flex>

    <v-flex md12>
   <label class="mb-3">6. Investment Objective?</label>
   <v-radio-group>
   <v-radio label="A. Liquidity Management" value="A. Liquidity Management"></v-radio>
   <v-radio label="B. Regular Income" value="B. Money Market/National Savings"></v-radio>
   <v-radio label="C. Medium term capital appreciation" value="C. Medium term capital appreciation"></v-radio>
   <v-radio label="D. Long term wealth accumulation" value="D. Long term wealth accumulation"></v-radio>
   </v-radio-group>

   </v-flex>

</v-layout>
</v-container>

</v-form>

<div class="error--text"></div>
</v-container>

</template>