<!-- src/components/SchoolAd.vue -->
<template>
  <div>
    <header class="text-black text-center py-5 mb-4">
      <div class="container">
        <h1 class="fw-bold">Welcome to Calubcub 1st National Highschool</h1>
        <p class="lead fw-semibold">Empowering the Future Leaders of Tomorrow</p>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" data-aos="fade-up">
          <div class="card h-100">
            <img src="../assets/pictures/1.jpg" class="card-img-top" alt="School Image">
            <div class="card-body">
              <h5 class="card-title">Excellence in Education</h5>
              <p class="card-text">Our school is dedicated to providing top-notch education and fostering a love for learning in our students.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4" data-aos="fade-up">
          <div class="card h-100">
            <img src="../assets/pictures/2.jpg" class="card-img-top" alt="School Image">
            <div class="card-body">
              <h5 class="card-title">State-of-the-Art Facilities</h5>
              <p class="card-text">We boast modern facilities, including fully equipped laboratories, a comprehensive library, and advanced sports amenities.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4" data-aos="fade-up">
          <div class="card h-100">
            <img src="../assets/pictures/3.jpg" class="card-img-top" alt="School Image">
            <div class="card-body">
              <h5 class="card-title">Community and Culture</h5>
              <p class="card-text">We pride ourselves on our inclusive and supportive community, promoting values of respect, integrity, and excellence.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4" data-aos="fade-up">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Join Us Today!</h5>
              <p class="card-text">Become a part of Calubcub 1st National Highschool and embark on a journey of academic and personal growth.</p>
              <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4" data-aos="fade-up">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Learn More About Our Programs</h5>
              <p class="card-text">Explore our diverse programs and find the one that best suits your interests and career aspirations.</p>
              <router-link to="/program" class="btn btn-primary">View Programs</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>




</style>
