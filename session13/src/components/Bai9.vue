<template>
    <div>
        <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Company"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Phone No"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Message"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Send</v-btn>
    </v-form>
  </v-sheet> 
    </div>
</template>
<script setup>
</script>
<style>
    
</style>