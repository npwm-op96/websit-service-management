<template>
  <!-- <v-card class="mx-auto" width="300"> -->

  <v-list>
    <v-col class="d-flex justify-center" > ADMIN MANAGEMENT </v-col>

    <v-col class="pt-2 d-flex justify-center" >
      <v-avatar color="grey darken-1" size="200">
        <v-img
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        ></v-img>
      </v-avatar>
    </v-col>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="child in item.items" :key="child.title">
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
  <!-- </v-card> -->
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
      {
        action: "mdi-run",
        items: [{ title: "List Item" }],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "List Item" }],
        title: "Health",
      },
      {
        action: "mdi-content-cut",
        items: [{ title: "List Item" }],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [{ title: "List Item" }],
        title: "Promotions",
      },
    ],
  }),
};
</script>