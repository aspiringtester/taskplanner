// showing current date using date object
let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}.`;

const showDate = document.querySelector("#showDate");
showDate.innerHTML= "Today:"+" "+fullDate;
// adding task 
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const description = document.querySelector("#description");
	const assignedTo = document.querySelector("#assignedTo");
	const dueDate = document.querySelector("#dueDate");
    const status = document.querySelector("#status")

	const list_el = document.querySelector("#tasks");
    
	form.addEventListener('submit', (e) => {
		e.preventDefault();
      
		
       
		


		const task_el = document.createElement('div');
		const task_content_el = document.createElement('div');//task will be added here in content div
		task_el.appendChild(task_content_el);
         // taskname added
		const task_input_el = document.createElement('input');
		task_input_el.type = 'text';
		task_input_el.value = input.value;;// input value goes here
		task_input_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el);

        // Description added
		const ds_el = document.createElement('input');
		ds_el.type = 'textarea';
		ds_el.value = description.value;// input value goes here
		ds_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(ds_el);

		 //Assigned To added
         const assign_el = document.createElement('input');
		assign_el.type = 'text';
		assign_el.value = dueDate.value;// input value goes here
		assign_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(assign_el);


		 //Date added

		 const dt_el= document.createElement('input');
		 dt_el.type = 'Date';
		 dt_el.value = assignedTo.value;// input value goes here
		 dt_el.setAttribute('readonly', 'readonly');
		 task_content_el.appendChild(dt_el);


		 //Status added 
         document.createElement('div').innerHTML= status.value;


       // edit and delete and done  buttons of tasks 

	   /* Done button
	   const task_done_el = document.createElement('div');
	   const task_done_el = document.createElement('button');
	   task_done_el.innerText = 'Done';

      */

		const task_actions_el = document.createElement('div');
		const task_edit_el = document.createElement('button');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		//task_delete_el.classList.add('className');
		task_delete_el.innerText = 'Delete';


		//task_actions_el.appendChild(task_done_el);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		description.value="";
		assign_el.value="";
		dt_el.value="";
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				// remove readonly property from all input field
				task_input_el.removeAttribute("readonly");
				ds_el.removeAttribute("readonly");
				assign_el.removeAttribute("readonly");
				dt_el.removeAttribute("readonly");
				// focus on input fields 
				task_input_el.focus();
				ds_el.focus();
				assign_el.focus();
				dt_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});