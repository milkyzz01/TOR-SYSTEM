<template>
  <div class="bg-image d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4" style="width: 35rem;">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="text" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 mb-3">Login</button>
      </form>
    </div>
  </div>
</template>
<style scoped>

</style>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import swal from 'sweetalert2';
import router from '@/router';

const email = ref('');
const password = ref('');


// sweetalert for success login
const showAlertSuccessLogin = () => {
  swal.fire({
    title: 'Success',
    text: 'You Have Successfully LogIn',
    icon: 'success',
    confirmButtonText: 'Ok'
  });
};
// sweetalert for failed to login
const showAlertFailedLogin = () => {
  swal.fire({
    title: 'Failed',
    text: 'You Have Failed to LogIn',
    icon: 'error',
    confirmButtonText: 'Ok'
  });
};


//Login functionality
const login = async () => {
  try{
  const response = await axios.post('http://127.0.0.1:8000/api/wwlog', {
    email: email.value,
    password: password.value
  }
  );
  if(response.status === 200){
    showAlertSuccessLogin()
      router.push('/Content')
    
    console.log(response.data);
  }
  } catch(error){
    console.error(error)
    showAlertFailedLogin();
    email.value = '';
    password.value = '';
  }
};
</script>