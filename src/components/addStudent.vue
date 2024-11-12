<template>
  <div class="container mt-3">
    <h4 class="fw-bolder mb-4">Add Student</h4>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="studentAdd.name"
            required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="studentAdd.email"
            required
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            v-model="studentAdd.phone"
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="dob" class="form-label">Date of Birth</label>
          <input
            type="date"
            class="form-control"
            id="dob"
            v-model="studentAdd.dob"
          />
        </div>

        <div class="col-md-6 mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select
            id="gender"
            class="form-select"
            v-model="studentAdd.gender"
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="col-md-6 mb-3" v-if="studentAdd.gender === 'other'">
          <label for="gender2" class="form-label">if others please specify:</label>
          <input
            type="text"
            class="form-control"
            id="gender2"
            v-model="studentAdd.gender2"
            required
          />
        </div>

        <div class="col-md-12 mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea
            class="form-control"
            id="address"
            rows="3"
            v-model="studentAdd.address"
          ></textarea>
        </div>

        <div class="col-md-6 mb-3">
        <label for="photo" class="form-label">Upload Photo</label>
        <input
          type="file"
          class="form-control"
          @change="handleFileUpload"
        />
        </div>

        <div class="col-md-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';
import swal from 'sweetalert2';

const studentAdd = reactive({
  name: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  gender2: '',
  address: '',
  photo: null // Add photo property
});

// Handle file input change
const handleFileUpload = (event) => {
  studentAdd.photo = event.target.files[0];
};

const submitForm = async () => {
  // append to the formdata because it is multipart includes files and texts
  const formData = new FormData();
  formData.append('StudentName', studentAdd.name);
  formData.append('StudentAddress', studentAdd.address);
  formData.append('studentPhone', studentAdd.phone);
  formData.append('studentGender', studentAdd.gender);
  formData.append('studentGender2', studentAdd.gender2);
  formData.append('DateOfBirth', studentAdd.dob);
  formData.append('email', studentAdd.email);
  if (studentAdd.photo) {
    formData.append('photo', studentAdd.photo);
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addStudent', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    swal.fire({
      title: 'Success',
      text: 'Student Added Successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    resetForm();
  } catch (error) {
    console.error(error);
    swal.fire({
      title: 'Error',
      text: 'Failed to add student',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};

const resetForm = () => {
  studentAdd.name = '';
  studentAdd.email = '';
  studentAdd.phone = '';
  studentAdd.dob = '';
  studentAdd.gender = '';
  studentAdd.gender2 = '';
  studentAdd.address = '';
  studentAdd.photo = null;
};
</script>


<style scoped>
/* Add any additional styles for your form here */
</style>
