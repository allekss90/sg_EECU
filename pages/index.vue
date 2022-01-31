<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="7">
      
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>

      <v-card>
        <h1>
         Index component
         <br>
         
        </h1>

        <v-spacer />
         <NuxtLink to="/nested/">Test nested routing</NuxtLink>
    
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

// test import
// import logo from '@/components/NuxtLogo'
// import logo from '@c/NuxtLogo.vue'



export default {
  name: 'IndexPage'
}
</script>
