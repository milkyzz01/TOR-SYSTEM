<template>
  <div class="container mt-4">
    <h5 class="fw-bolder">Students Lists</h5>
    <div class="table-responsive mt-4 table-overflow">
      <table class="table table-hover text-center">
        <thead class="table-head">
          <tr>
            <th class="custom-thead">Student ID</th>
            <th class="custom-thead">Student Name</th>
            <th class="custom-thead">Student Address</th>
            <th class="custom-thead">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in students" :key="user.studentName">
            <td>{{ user.studentID }}</td>
            <td>{{ user.StudentName }}</td>
            <td>{{ user.StudentAddress }}</td>
            <td>
              <div class="position-relative">
                <i
                  class="fas fa-ellipsis-v cursor-pointer"
                  @click="toggleKebab(user.studentID)"
                ></i>
                <div
                  v-if="showOptions === user.studentID"
                  class="popout-menu"
                >
                  <ul class="list-unstyled">
                    <li @click="detailsStudent(user.studentID)">Details</li>
                    <li @click="deleteStudent(user.studentID)">Delete</li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          <!-- if the student has no records -->
          <tr v-if="!students.length">
            <td colspan="4">No data available</td>
          </tr>
        </tbody>
      </table>
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

/* css style for the popup when kebab is clicked */
.popout-menu {
  position: absolute;
  right: 60%;
  top: 5%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.table-head{
    position: sticky;
}

/* add an overflow to the table */
.table-overflow{
  max-height: 300px; /* Adjust the height as needed */
  overflow-y: auto;  /* Enable vertical scrolling */
  position: relative;
}
.table thead th {
  position: sticky; /* Make the header sticky */
  top: 0; /* Position the header at the top */
  z-index: 1; /* Ensure header is above the table body */
}
.popout-menu ul {
  padding: 3px;
  margin: 0;
}

.popout-menu li {
  padding: 8px 20px;
  cursor: pointer;
}

.popout-menu li:hover {
  background-color: #f1f1f1;
}
</style>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import swal from 'sweetalert2';
import { useRouter } from 'vue-router';  // Import only the hook you need

// use store
const store = useStore();
const router = useRouter();

// Access students from Vuex store
const students = computed(() => store.getters.allStudents);
const showOptions = ref(null);

// Fetch students when component is mounted
const fetchStudents = () => {
  store.dispatch('fetchStudents');
  console.log(students.data)
};

// Function to toggle the kebab menu
const toggleKebab = (studentID) => {
  showOptions.value = showOptions.value === studentID ? null : studentID;
};

// Function to delete a student
const deleteStudent = async (studentID) => {
  try {
    await store.dispatch('deleteStudent', studentID);
    swal.fire({
      title: 'Success',
      text: 'Successfully Deleted student',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
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

// Function to view details (if needed in the future)
const detailsStudent = (studentID) => {
  // Implementation for viewing student details
  router.push({ name: 'viewStudent', params: {id: studentID} });
};

// Fetch students when the component is mounted
onMounted(() => {
  fetchStudents();
});
</script>
