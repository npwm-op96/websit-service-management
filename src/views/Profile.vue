<template>
  <!-- <v-card> -->
  <!-- <v-col>
      <v-parallax height="220" src="https://picsum.photos/1500/800">
        <v-col class="d-flex justify-center">
          <v-avatar color="primary" size="200">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://scontent.fbkk24-1.fna.fbcdn.net/v/t1.6435-9/199235668_2909896515949454_4752354366449354318_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGNbgEMKZUmAeXW_OVFsAvuKFOo6Lq8s7koU6jouryzuW8GFgTBN_eK1yAXmbm-EhLL4-xf1h6FWh0FbspZszF1&_nc_ohc=K9YWZSyvmTkAX-CtVt3&_nc_ht=scontent.fbkk24-1.fna&oh=7816723650bce5a4c65928dee419c9e8&oe=61328A39"
            ></v-img>
          </v-avatar>
        </v-col>
      </v-parallax>
      <v-col>{{ signedmember.username }}</v-col>
      <v-col>
        {{ signedmember.accessToken.substring(0, 20) }} ...
        {{
          signedmember.accessToken.substr(signedmember.accessToken.length - 20)
        }}</v-col
      >
      <v-col> {{ signedmember.id }} </v-col>
      <v-col>
        <ul>
          <li v-for="(role, index) in signedmember.roles" :key="index">
            {{ role }}
          </li>
        </ul>
      </v-col> -->
  <v-col>
    <v-card class="overflow-hidden">
      <v-toolbar flat>
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light">
          User Profile
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title
          v-for="(role, index) in signedmember.roles"
          :key="index"
          class="font-weight-light"
        >
          <v-chip class="ma-2" color="red" text-color="white">
            {{ role }}
          </v-chip>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="error darken-3" fab small @click="isEditing = !isEditing">
          <v-icon v-if="isEditing"> mdi-close </v-icon>
          <v-icon v-else> mdi-pencil </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-parallax height="220" src="https://picsum.photos/1500/800">
          <v-col class="d-flex justify-center">
            <v-avatar color="primary" size="200">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                src="https://scontent.fbkk24-1.fna.fbcdn.net/v/t1.6435-9/199235668_2909896515949454_4752354366449354318_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGNbgEMKZUmAeXW_OVFsAvuKFOo6Lq8s7koU6jouryzuW8GFgTBN_eK1yAXmbm-EhLL4-xf1h6FWh0FbspZszF1&_nc_ohc=K9YWZSyvmTkAX-CtVt3&_nc_ht=scontent.fbkk24-1.fna&oh=7816723650bce5a4c65928dee419c9e8&oe=61328A39"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-parallax>
        <v-row>
          <v-col cols="5" xs="12">
            <v-text-field
              v-model="member.fname"
              :disabled="!isEditing"
              color="white"
              label="FirstName"
            ></v-text-field>
          </v-col>
          <v-col cols="5" xs="12">
            <v-text-field
              v-model="member.lname"
              :disabled="!isEditing"
              color="white"
              label="Lastname"
            ></v-text-field>
          </v-col>
          <v-col cols="5" xs="12">
            <v-text-field
              v-model="member.position"
              :disabled="!isEditing"
              color="white"
              label="Position"
            ></v-text-field
          ></v-col>
          <v-col cols="5" xs="12">
            <v-text-field
              v-model="member.department"
              :disabled="!isEditing"
              color="white"
              label="Department"
            ></v-text-field>
          </v-col>
          <v-col cols="5" xs="12"> </v-col>
        </v-row>
        <v-autocomplete
          :disabled="!isEditing"
          :items="states"
          :filter="customFilter"
          color="white"
          item-text="name"
          label="State"
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!isEditing" color="success" @click="saveProfile">
          Save
        </v-btn>
      </v-card-actions>
      <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        Your profile has been updated
      </v-snackbar>
    </v-card>
    <!-- </v-col> -->
  </v-col>
  <!-- </v-card> -->
</template>
<script>
export default {
  data: () => ({
    member: "",
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 },
    ],
  }),
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
  created() {
    this.getprofile();
  },
  methods: {
    async getprofile() {
      // console.log(this.signedmember.id_user)
      let profile = await this.$store.dispatch(
        "user/getProfile",
        this.signedmember.id_user
      );
      this.member = await profile;
    },
    saveProfile() {
      console.log(this.member);
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>