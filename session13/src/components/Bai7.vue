<template>
    <div>
        <div class="text-center">
            <v-pagination
                v-model="page"
                :length="4"
                rounded="circle"
            ></v-pagination>

            <v-pagination
                v-model="page"
                :length="4"
                rounded="0"
            ></v-pagination>
        </div>  
    </div>
</template>
<script setup>
</script>
<style>
    
</style>