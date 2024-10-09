<template>
    <div>
        <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        label="Name"
      ></v-text-field>

      <v-text-field
        label="Company"
      ></v-text-field>

      <v-text-field
        label="Email"
      ></v-text-field>

      <v-text-field
        label="Phone No"
      ></v-text-field>

      <v-text-field
        label="Message"
      ></v-text-field>

      <v-btn class="mt-2" block>Send</v-btn>
    </v-form>
  </v-sheet> 
    </div>
</template>
<script setup>
</script>
<style>
    
</style>