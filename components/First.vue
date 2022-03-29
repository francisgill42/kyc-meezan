<template>
  <v-container>
    <v-form ref="form">
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="name"
              label="Name"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="fathername"
              label="Father Name"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs6 md6>
            <v-text-field
              class="red_class"
              @keyup="add_dash"
              v-model="cnic"
              :rules="cnicRules"
              :counter="15"
              label="CNIC"
              placeholder="XXXXX-XXXXXXX-X"
            >
            </v-text-field>
          </v-flex>

          <v-flex xs6 md6>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              max-width="290"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  style="font-size: 21px"
                  :value="formatted_date2"
                  clearable
                  placeholder="dd/mm/yyyy"
                  label="CNIC Issue Date"
                  v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
                :max="today"
                v-model="date2"
                @change="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs6 md6>
            <v-menu
              v-model="menu3"
              :close-on-content-click="false"
              max-width="290"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  style="font-size: 21px"
                  :value="formatted_date2"
                  clearable
                  placeholder="dd/mm/yyyy"
                  label="CNIC Expiry Date"
                  v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
                :max="today"
                v-model="date2"
                @change="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 md6>
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              max-width="290"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  style="font-size: 21px"
                  :value="formatted_date1"
                  :rules="GroupBy"
                  clearable
                  placeholder="dd/mm/yyyy"
                  label="Date Of Birth"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                :max="today"
                v-model="date1"
                @change="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="nationality"
              label="Nationality"
              :value="Caps"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="religion"
              label="Religion"
              :value="Caps"
            ></v-text-field>
          </v-flex>
          <v-flex md12>
            <label class="mb-3">Gender </label>
            <v-radio-group v-model="gender">
              <v-radio name="male" label="Male" value="male"></v-radio>
              <v-radio name="femail" label="Female" value="female"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex md12>
            <label class="mb-3">Zakat Deuction</label>

            <v-radio-group v-model="zakat">
              <v-radio name="male" label="No" value="no"></v-radio>
              <v-radio name="femail" label="Yes" value="yes"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex md12>
            <v-text-field
              class="red_class"
              @keyup="add_dash"
              v-model="cnic"
              :rules="cnicRules"
              :counter="15"
              label="NTN"
              placeholder="XXXXX-XXXXXXX-X"
            >
            </v-text-field>
          </v-flex>

          <v-flex md12>
            <label class="mb-3">Tax Status</label>
            <v-radio-group v-model="tax_status">
              <v-radio name="filer" label="Filer" value="filer"></v-radio>
              <v-radio
                name="non_filer"
                label="Non-Filer"
                value="non_filer"
              ></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex md12>
            <label class="mb-3">Do you have other Nationalities?</label>
            <v-radio-group v-model="tax_status">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex md12>
            <label class="mb-3"
              >Do you hold US Permanent Resident Card (Green Card)?</label
            >
            <v-radio-group v-model="tax_status">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex md12>
            <label class="mb-3">Are you a US Resident?</label>
            <v-radio-group v-model="tax_status">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex xs12>
            <v-textarea
              :value="Caps"
              v-model="address"
              :rules="addressRules"
              :counter="150"
              label="Address"
            ></v-textarea>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="tel"
              label="Tel No (Res)"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="tel_office"
              label="Office"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="fax"
              label="Fax"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="mobile_no"
              label="Mobile No"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="whatsapp"
              label="WhatsApp No"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              class="red_class"
              v-model="email"
              label="Email"
              :value="Caps"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <!-- <div v-if="err" style="color: #ff1744 !important;">{{err}}</div> -->
            <v-btn
              style="display:"
              class="primary"
              :loading="loading"
              @click="submit"
              >Continue</v-btn
            >
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <div class="error--text"></div>
  </v-container>
</template>
<script>
import axios from "axios";
// import moment from 'moment/src/moment'

export default {
  computed: {
    err() {
      // return this.$store.state.err;
    },
    loading() {
      // return this.$store.state.loading;
    },
    Caps() {
      return {
        name: (this.name = this.name.toUpperCase()),
        fathername: (this.fathername = this.fathername.toUpperCase()),
        mothername: (this.mothername = this.mothername.toUpperCase()),
        email: (this.email = this.email.toUpperCase()),
        occ_name: (this.occ_name = this.occ_name.toUpperCase()),
        designation: (this.designation = this.designation.toUpperCase()),
        department: (this.department = this.department.toUpperCase()),
        org_emp_bes_name: (this.org_emp_bes_name =
          this.org_emp_bes_name.toUpperCase()),
        no_of_dependants: (this.no_of_dependants =
          this.no_of_dependants.replace(/\D+/g, "")),
        working_experience: (this.working_experience =
          this.working_experience.replace(/\D+/g, "")),
        age_of_business: (this.age_of_business = this.age_of_business.replace(
          /\D+/g,
          ""
        )),
        other_education: (this.other_education =
          this.other_education.toUpperCase()),
        other_refused_account_by_institute:
          (this.other_refused_account_by_institute =
            this.other_refused_account_by_institute.toUpperCase()),
        other_high_value_item: (this.other_high_value_item =
          this.other_high_value_item.toUpperCase()),
        address: (this.address = this.address.toUpperCase()),
      };
    },
    today() {
      // return moment(new Date()).format('YYYY-MM-DD');
    },
    formatted_date1() {
      // return this.date1 ? moment(this.date1).format('DD/MM/YYYY') : ''
    },
    formatted_date2() {
      // return this.date2 ? moment(this.date2).format('DD/MM/YYYY') : ''
    },
  },
  data() {
    return {
      //col: 12,

      date1: "",

      date2: "",

      menu1: false,

      menu2: false,

      menu3: false,

      name: "",

      nationality : "",

      religion : "",

      gender : "",

      tax_status : false,

      tel : "",

      tel_office : "",

      whatsapp : "",

      fax  : "",

      mobile_no : "",

      channel: !this.$route.params.user_id ? "Web" : "SA",

      user_id: this.$route.params.user_id || 0,

      fathername: "",

      mothername: "",

      dob: "",

      cnic: "",

      cnic_fileSize: false,

      soi_fileSize: false,

      zk_fileSize: false,

      issue_date: "",

      pob: "",

      email: "",

      cell: "",

      occupation: "",

      occs: [],

      occ_name: "",

      designation: "",

      department: "",

      org_emp_bes_name: "",

      working_experience: "",

      age_of_business: "",

      education: "",

      other_education: "",

      marital_status: "",

      marital_list: [],

      no_of_dependants: "",

      public_figure: "",

      average_annual_income: "",

      average_annual_income_list: [],

      refused_account_by_institute: "",

      other_refused_account_by_institute: "",

      high_value_item: "",

      other_high_value_item: "",

      soi: "",

      address: "",

      pob_city: "",

      pob_country: "",

      resi_city: "",

      resi_country: "",

      pob_cities_by_id: [],

      resi_cities_by_id: [],

      countries: [],

      zakat: "",

      zakat_options: "",

      valid4zakat_certificate: "",

      zakat_certificate: {
        name: "",
      },

      qq: "",

      education_list: [
        { id: 1, title: "Undergraduate" },

        { id: 2, title: "Graduate" },

        { id: 3, title: "Postgraduate" },

        { id: 4, title: "Professional" },

        { id: 5, title: "Other" },
      ],

      sois: [],

      e1: 0,

      value: "",

      email4zakat: "info@hblasset.com",

      GroupBy: [(v) => !!v || "This field is "],

      cnicRules: [
        (v) => !!v || "This field is ",
        (v) =>
          (v.length >= 15 && v.length <= 15) ||
          "CNIC must be equal to 15 characters",
      ],

      emailRules: [
        (v) => !!v || "This field is ",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],

      cellRules: [
        (v) => !!v || "This field is ",
        (v) =>
          v.length <= 15 || "Cell must be less than or equal to 15 characters",
      ],

      addressRules: [
        (v) => !!v || "This field is ",
        (v) => v.length <= 150 || "Address must be less than 15 characters",
      ],
      userScore: "",
    };
  },
  created() {},
  methods: {
    submit() {
      let payload = {
        name: this.name,
        fathername: this.fathername,
        mothername: this.mothername,
        dob: this.date1,
        cnic: this.cnic,
        cnic_issue_date: this.date2,
        pob_country_id: this.pob_country.split("|")[0],
        pob_country: this.pob_country.split("|")[1],
        pob_city_id: this.pob_city.split("|")[0],
        pob_city: this.pob_city.split("|")[1],
        email: this.email,
        cell: this.cell,
        occupation_id: this.occupation.split("|")[0],
        occupation: this.occupation.split("|")[1],
        occ_name: this.occ_name,
        designation: this.designation,
        department: this.department,
        org_emp_bes_name: this.org_emp_bes_name,
        working_experience: this.working_experience,
        age_of_business: this.age_of_business,
        education: this.other_education == "" ? this.education : this.other_education,
        marital_status_id: this.marital_status.split("|")[0],
        marital_status: this.marital_status.split("|")[1],
        no_of_dependants: this.no_of_dependants,
        public_figure: this.public_figure,
        average_annual_income_id: this.average_annual_income.split("|")[0],
        average_annual_income: this.average_annual_income.split("|")[1],

        refused_account_by_institute:
          this.refused_account_by_institute == "yes"
            ? this.other_refused_account_by_institute
            : this.refused_account_by_institute,

        high_value_item:
          this.high_value_item == "yes"
            ? this.other_high_value_item
            : this.high_value_item,

        soi_id: this.soi.split("|")[0],

        soi: this.soi.split("|")[1],

        address: this.address,

        country1_id: this.resi_country.split("|")[0],

        country1: this.resi_country.split("|")[1],

        city1_id: this.resi_city.split("|")[0],

        city1: this.resi_city.split("|")[1],

        zakat: this.zakat,

        zakat_options: this.zakat == "yes" ? "" : this.zakat_options,

        zakat_certificate: this.zakat == "no" ? this.zakat_certificate : "",

        qq: this.qq,

        channel: this.channel,

        user_id: this.user_id,
      };
      

      // const date = new Date();
      // let condition_year = date.getFullYear() - 18;
      // let selected_year = parseInt(this.date1.split("-")[0]);
      // payload.under_age = selected_year <= condition_year ? false : true;
      // console.log(payload.under_age);
      // this.$store.dispatch("hold_ci", payload);


      if (this.$refs.form.validate()) {
         window.scrollTo(0, 0);
         this.$store.dispatch("move", 2);
         let class_to_be_remove =
         document.getElementsByClassName("error--text")[0];
         class_to_be_remove.parentNode.removeChild(class_to_be_remove);

      } else {
        setTimeout(() => {
          window.scrollTo(
            0,
            document.getElementsByClassName("error--text")[0].offsetTop
          );
        }, 100);
      }
    },

    add_dash() {
      let v = this.cnic;
      let arr = v.split("");
      let dash1 = v.length == 5 ? "-" : "";
      let dash2 = v.length == 13 ? "-" : "";
      let filtered_cnic =
         v.slice(0, 5) + dash1 +
         v.slice(5, 14) + dash2 +
         v.slice(14, 15);
      this.cnic = filtered_cnic;

      // for (let a in arr) {
      //   let reg = /['a-z']/g;
      //   if (reg.test(arr[a])) {
      //     this.cnic = v.slice(0, -1);
      //   } else {
      //     let dash1 = v.length == 5 ? "-" : "";
      //     let dash2 = v.length == 13 ? "-" : "";
      //     let filtered_cnic =
      //       v.slice(0, 5) +
      //       dash1 +
      //       v.slice(5, 14) +
      //       dash2 +
      //       v.slice(14, 15);
      //     this.cnic = filtered_cnic;
      //   }
      // }
    },

    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>

<style>
/* html {
scroll-behavior: smooth;
} */

.z_radio label {
  margin-left: 15px;
}

.dob label {
  font-size: 20px;
}

.dob input {
  font-size: 16px;
}

.cell label {
  margin-left: 20px !important;
}

.email4zakat label,
.courier label {
  color: #000 !important;
}
.upl_cer {
  margin-left: -60px !important;
  margin-top: -10px;
}

@media only screen and (min-width: 1366px) {
  .upl_cer {
    margin-left: -45px !important;
    margin-top: -10px;
  }
}

@media only screen and (max-width: 1024px) {
  .upl_cer {
    margin-left: -23px !important;
    margin-top: -10px;
  }
}

@media only screen and (max-width: 800px) {
  .upl_cer {
    margin-left: -10px !important;
    margin-top: -10px;
  }
}
</style>