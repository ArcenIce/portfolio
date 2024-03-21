<template>
  <v-app>
    <v-main class="px-12">

      <v-row no-gutters class="py-12" style="z-index: 10;">
        <v-col cols="auto">
          <v-ico name="oi-home" scale="1.6" />
        </v-col>
        <v-col cols="auto" class="pl-8">
          <v-ico name="oi-person" scale="1.75" />
        </v-col>
        <v-col cols="auto" class="pl-8">
          <v-ico name="hi-folder-open" scale="1.75" />
        </v-col>
        <v-col cols="auto" class="pl-8">
          <v-ico name="bi-mailbox" scale="1.85" />
        </v-col>
        <v-col></v-col>
        <v-col cols="auto" class="pl-8">
          <v-ico name="ri-github-line" scale="1.6" />
        </v-col>
        <v-col cols="auto" class="pl-8">
          <v-ico name="co-linkedin-in" scale="1.85" />
        </v-col>
        <v-col cols="auto" class="pl-8">
          <v-ico name="logo-x" scale="1.6" />
        </v-col>
      </v-row>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>
