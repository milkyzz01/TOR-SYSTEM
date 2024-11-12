<template>
  <div class="container mt-5">
    <div class="student-profile p-4 rounded-3 position-relative">
      <div class="row align-items-center">
        <div class="col-md-4 text-center">
          <div v-if="studentRecords.photo" class="profile-photo mb-4">
            <img
              :src="getPhotoUrl(studentRecords.photo)"
              alt="Student Photo"
              class="img-fluid rounded-circle shadow-lg"
            />
          </div>
          <div v-else>
            <h4 class="text-muted">No Photo Available</h4>
          </div>
        </div>
        <div class="col-md-8">
          <div class="student-info">
            <h2 class="student-name display-5 text-secondary fw-semibold">{{ studentRecords.StudentName }}</h2>
            <p class="lead text-muted">{{ studentRecords.email }}</p>
            <p class="mb-2"><strong>Student ID:</strong> {{ studentID }}</p>
            <p class="mb-2"><strong>Gender:</strong> {{ studentRecords.studentGender }}</p>
            <p class="mb-2"><strong>Phone:</strong> {{ studentRecords.studentPhone }}</p>
            <p class="mb-2"><strong>Date of Birth:</strong> {{ studentRecords.DateOfBirth }}</p>
          </div>
        </div>
      </div>
      <div class="profile-footer mt-4">
        <button class="btn btn-outline-danger btn-lg" @click="deleteStudent(studentID)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import swal from 'sweetalert2';
import { useStore } from 'vuex';

const route = useRoute();
const studentID = ref(null);
const studentRecords = ref({});
const store = useStore();
const router = useRouter();

const fetchSpecificStudents = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/fetchStudent/${id}`);
        if (response.data.data) {
            studentRecords.value = response.data.data;
        }
    } catch (error) {
        console.error(error);
    }
};

const getPhotoUrl = (photoPath) => {
    return `http://127.0.0.1:8000/storage/${photoPath}`;
};

const deleteStudent = async (studentID) =>{
    try {
    await store.dispatch('deleteStudent', studentID);
    swal.fire({
      title: 'Success',
      text: 'Successfully Deleted student',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    router.push({name: 'dashboard'});
    
  } catch (error) {
    console.error(error);
    swal.fire({
      title: 'Failed',
      text: 'Error deleting student',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};

onMounted(() => {
    studentID.value = route.params.id;
    fetchSpecificStudents(studentID.value);
});
</script>

<style scoped>
.container {
  background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
  padding: 20px;
  border-radius: 15px;
  max-width: 900px;
}

.student-profile {
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
}

.profile-photo img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 5px solid #fff;
}

.student-info {
  padding-left: 20px;
}

.student-name {
  margin-bottom: 10px;
}

.profile-footer {
  text-align: right;
}

.profile-footer .btn {
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 18px;
}

.btn-outline-primary {
  border-color: #007bff;
  color: #007bff;
}

.btn-outline-danger {
  border-color: #dc3545;
  color: #dc3545;
}
</style>
