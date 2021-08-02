<template>
  <v-col>
    <v-col>{{ signedmember.username }}</v-col>
    <v-col>  {{signedmember.accessToken.substring(0, 20)}} ... {{signedmember.accessToken.substr(signedmember.accessToken.length - 20)}}</v-col>
    <v-col>      {{signedmember.id}}
</v-col>
    <v-col>
    <ul>
      <li v-for="(role,index) in signedmember.roles" :key="index">{{role}}</li>
    </ul>
    </v-col>
    <v-col></v-col>
  </v-col>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    signedmember() {
      return this.$store.state.auth.member;
    },
  },
  mounted() {
    if (!this.signedmember) {
      this.$router.push("/login");
    }
  },
};
</script>