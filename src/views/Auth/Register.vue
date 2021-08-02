<template>
  <v-col class="d-flex justify-center" cols="12">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        min="8"
        :rules="nameRules"
        label="Username"
        required
      ></v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="password_show ? 'text' : 'password'"
            :rules="[passwordRules]"
            name="input-10-1"
            label="password"
            hint="At least 8 characters"
            @click:append="password_show = !password_show"

            counter
          ></v-text-field>
            <v-text-field
            v-model="cf_password"
            :append-icon="cfpassword_show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="cfpassword_show ? 'text' : 'password'"
            :rules="[CfpasswordRules,passwordConfirmationRule]"
            name="input-10-1"
            label="confirm password"
            counter
            @click:append="cfpassword_show = !cfpassword_show"

          ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn  color="success" class="mr-4" @click="register">
        Register
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation" class="mr-4">
        Reset Validation
      </v-btn>
      <v-btn to="Login" class="mr-4" color=""> Login </v-btn>
    </v-form>
  </v-col>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    password_show: false,
    cfpassword_show: true,
    name: "",
    password:'',
    cf_password:'',
    matchpassword:'',
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    // emailRules: [
    //   (v) => !!v || "E-mail is required",
    //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    // ],
    passwordRules: [(v) => !!v || "Password is required"],
    CfpasswordRules:[
        (v) => !!v || "Password is required",
        // (v)=> (v== "jaker1234")  || "Password Mismatch"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
computed: {
    passwordConfirmationRule() {
        return () => (this.cf_password === this.password) || 'Password must match'
    },
},
  methods: {
    register(){
        // if (this.passwordConfirmationRule) {
        // //     console.log('register success')
            
        // }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

  },
};
</script>