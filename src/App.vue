<script>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
export default {
  mounted() {
    document.body.style.backgroundColor = '#f0f0f0'; // Set the desired background color
  },
  setup(){
  const a = ref("hello");

  // Return Variables or functions
  return{
   a,
  }
  }
}
</script>

<template>
<div><RouterView /></div>
</template>

<style scoped>

</style>
