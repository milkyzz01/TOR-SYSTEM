<!-- Navbar.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-white" href="#">CNHS</a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto d-none d-lg-flex">
            <li class="nav-item">
              <router-link to="/home" @click="toggleLandingPage" class="nav-link fw-semibold text-white">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" @click="toggleLandingPage" class="nav-link fw-semibold text-white">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Offcanvas Sidebar -->
    <div class="offcanvas offcanvas-end" tabindex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header bg-primary">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CNHS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/home" @click="toggleLandingPage" class="nav-link fw-semibold">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" @click="toggleLandingPage" class="nav-link fw-semibold">Login</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- View Handing -->
    <div v-if="showHome"><homess /></div>
    <router-view v-else></router-view>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import homess from '../components/Home.vue'

// variables
const showHome = ref(true);

//Functions
const toggleLandingPage = () =>{
  showHome.value = false;
  console.log(showHome.value)
}

</script>

<style scoped>
/* Custom styles */
/* Keyframes for fade-up animation */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation class */
.fade-up {
  animation: fadeUp 0.5s ease-out;
}

</style>
