// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      students: []
    };
  },
  mutations: {
    SET_STUDENTS(state, students) {
      state.students = students;
    },
    REMOVE_STUDENT(state, studentID) {
      state.students = state.students.filter(student => student.studentID !== studentID);
    }
  },
  actions: {
    async fetchStudents({ commit }) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/students');
        console.log(response.data);
        commit('SET_STUDENTS', response.data.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    },
    async deleteStudent({ commit }, studentID) {
      try {
        await axios.post('http://127.0.0.1:8000/api/deleteStudents', {
          studentID: studentID
        });
        commit('REMOVE_STUDENT', studentID);
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  },
  getters: {
    allStudents: state => state.students
  }
});
