<template>
  <v-app>
    <v-main class="px-12">

      <v-row no-gutters class="py-12" style="z-index: 10;">
        <v-col cols="auto">
          <router-link to="#home">
            <v-ico class="zoom text-white" name="oi-home" scale="2.2"/>
          </router-link>
        </v-col>
        <v-col cols="auto" class="pl-8">
          <router-link to="#me">
            <v-ico class="zoom text-white" name="oi-person" scale="2.35" />
          </router-link>
        </v-col>
        <v-col cols="auto" class="pl-8">
          <router-link to="#me">
            <v-ico class="zoom text-white" name="hi-folder-open" scale="2.35" />
          </router-link>
        </v-col>
        <v-col cols="auto" class="pl-8">
          <router-link to="#me">
            <v-ico class="zoom text-white" name="bi-mailbox" scale="2.45" />
          </router-link>
        </v-col>
        <v-col></v-col>
        <v-col cols="auto" class="pl-8">
          <router-link to="#me">
            <v-ico class="zoom text-white" name="ri-github-line" scale="2.2" />
          </router-link>
        </v-col>
        <v-col cols="auto" class="pl-8">
          <router-link to="#me">
            <v-ico class="zoom text-white" name="co-linkedin-in" scale="2.45" />
          </router-link>
        </v-col>
        <v-col cols="auto" class="pl-8">
          <router-link to="#me">
            <v-ico class="zoom text-white mt-2" name="logo-x" scale="2.15" />
          </router-link>
        </v-col>
      </v-row>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>

<style scoped>

.zoom {
  transition: all 0.2s;
}

.zoom:hover {
  transform: scale(1.2);
}
</style>