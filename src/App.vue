<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <router-view :key="$route.fullPath"/>
</template>

<style>
body {
  /* height: 2000px; */
  margin: 0px;
  padding: 0px;
}
</style>
