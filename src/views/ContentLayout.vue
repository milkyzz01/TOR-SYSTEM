<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-black" href="#">CNHS</a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto fw-bold">
            <li class="nav-item">
              <router-link to="/login" class="nav-link cursor-pointer text-black">Signout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Offcanvas Sidebar -->
    <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header bg-primary">
        <h5 class="offcanvas-title text-white fw-bold" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login" class="nav-link cursor-pointer text-black">Signout</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- menu container -->
    <div class="row mt-4">
      <div class="col-md-4 mb-4" data-aos="fade-up">
        <div class="card card-fixed-height d-none d-md-block">
          <div class="card-body">
            <h5 class="card-title">Menu</h5>
            <ul class="list-group">
              <li class="list-group-item"><router-link to="/dashboard">Dashboard</router-link></li>
              <li class="list-group-item"><router-link to="/addStudent" @click="toggleDashboard">Add Records</router-link></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Router View container and main content -->
      <div class="col-md-8 mb-4" data-aos="fade-up">
        <div class="card card-fixed-height border-1 scrollable-card">
          <div class="card-body">
            <!--The router view section-->
            <router-view  />
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<style scoped>
.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba%280, 0, 0, 1%29" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E');
}

.cursor-pointer {
  cursor: pointer;
}

.card-title {
  font-size: 1.3rem;
  font-weight: bold;
  padding-top: 20px;
  padding-left: 15px;
}

.card-fixed-height {
  height: 80vh; /* Sets the fixed height to 80% of viewport height */
}

.list-group-item {
  font-size: 1rem;
  padding: 10px 15px;
  border: none; /* Removes the border */
  border-radius: 0; /* Ensures no border radius */
}

.list-group-item a {
  text-decoration: none;
  color: black; /* Sets the text color to black */
}

.list-group-item a:hover {
  color: #0056b3; /* Darker shade for hover effect */
}

.list-group {
  padding-top: 5px;
}

/* change the bg color of the table headers */
.custom-thead {
  background-color: #007bff; /* Bootstrap primary color */
  color: white;
}

/*add an scroll when overflow*/ 
.scrollable-card{
  overflow-y: auto;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import swal from 'sweetalert2';
import router from '@/router';
import dashboards from '../components/dashboard.vue';

        

        

</script>

  