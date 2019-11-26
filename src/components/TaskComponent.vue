<template>
  <v-container grid-list-xs>
    <v-layout justify-center v-show="!isEditing">
      <v-card min-width="400">
        <v-card-title>{{task.title}}</v-card-title>
        <v-card-text>{{task.details}}</v-card-text>
        <v-card-actions :key="task['.key']">
          <v-btn color="warning" text v-show="!task.done" @click="completeTask(task)">Progress</v-btn>
          <v-btn color="success" text v-show="task.done">completed</v-btn>
          <v-spacer></v-spacer>

          <v-btn icon @click="showForm">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon @click="deleteTask(task['.key'])">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-layout justify-center v-show="isEditing">
      <v-card min-width="400">
        <v-card-text>
          <v-text-field placeholder="Title" v-model="task.title"></v-text-field>
          <v-textarea hint="Detail" rows="1" auto-grow v-model="task.details"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="hideForm(task)">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
// import { db } from '../config/db';
export default {
  name: "TaskComponent",
  props: {
    task: {
      type: Object
    }
  },
  //  firebase: {
  //   tasks: db.ref('tasks')
  // },
  methods: {
    deleteTask(key) {
      this.$emit("delete-task", key);
      this.hideForm();
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm(task) {
      this.$emit("update-item",task);
      this.isEditing = false;
      this.dialog = false;
    },
    completeTask(task) {
       this.$emit("complete-task", task);
     
    },
    showDialog() {
      this.dialog = true;
    },
    Hidesnack() {
      this.Hide_snack = false;
    }
  },
  data() {
    return {
      isEditing: false,
      dialog: false,

      Hide_snack: false
    };
  }
};
</script>

<style scoped>
</style>