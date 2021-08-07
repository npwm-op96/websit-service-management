<template>
  <v-col class="d-flex justify-center" cols="12">
    <v-card max-width="400" width="400">
      <v-form>
        <v-container>
          <v-col cols="12" class="d-flex justify-center">
            <v-banner icon=""></v-banner>Sing Up</v-col
          >
          <v-text-field
            v-model="member.username"
            label="ชื่อผู้ใช้"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            label="รหัสผ่าน"
            v-model="member.password"
            :rules="rules"
          >
          </v-text-field>

          <v-row class="d-flex">
            <v-col cols="3">
              <v-btn @click="handlesignin" color="primary" fas>Signin</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn to="Register"  color="success" fas>Signup</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn to="Register"  color="success" fas>Sing out</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-col>
</template>
<script>
import Member from '../../models/member.js'
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    member: new Member ('',''),
    laoding: false,
    message: "",
  }),
  computed: {
    signed() {
      return this.$store.state.auth.status.signed;
    },
  },
  created() {
    if (this.signed) {
      this.$router.push("profile");
    }
  },
  methods: {
    handlesignin() {
      console.log(this.member)
      if (this.member.username && this.member.password) {
              console.log('signing')

        this.$store.dispatch("auth/signin", this.member).then(
          () => {
          this.$router.push('/Profile');
          },
          (error) => {
            (this.laoding = false),
              (this.message = error.response && error.response.data);
            error.message || error.toString();
          }
        );
      }
    },
  },
};
</script>