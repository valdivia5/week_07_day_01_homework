import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
    el: "#app",
    data: {
      tasks: [
					{taskName:"Clean Garage"},
					{taskName:"Tidy up room"},
					{taskName:"Walk the dog"}
			],
      newTask: ""
    },
    methods: {
// ---------SAVE METHOD----------
      saveNewTask: function(){
        this.tasks.push({
       taskName: this.newTask
     });
     this.newTask = "";

      }
    }
  });
});
