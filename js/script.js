/*

Pagination project - Treehouse techdegree project 2 - Data Pagination and Filtering
*/


document.addEventListener('DOMContentLoaded', () => {
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
	function showPage(list, page) {
		const studentsPerPage = 9;
		const startIndex = (page * studentsPerPage) - studentsPerPage ;
		const endIndex = page * studentsPerPage;
		const ul = document.querySelector('.student-list');
		ul.innerHTML = '';
		console.log(ul);
		for( let i = 0; i < list.length; i++ ){
			if ( i >= startIndex && i < endIndex ){
				const li = generateListItem( list[i] )
			}
			
		}
	}

	

	function generateListItem (student) {
		const studentList = document.querySelector('.student-list');
		const listItem = document.createElement('li');
		listItem.className = 'student-item cf'; 
		listItem.innerHTML = `
			<div class="student-details">
				<img class="avatar" src="${student.picture.large}">
				<h3>${student.name.first} ${student.name.last}</h3>
				<span class="email">${student.email}</span>
			</div>
			<div class="joined-details">
				<span class="date">Joined ${student.registered.date}</span>
			</div>
		`;
		studentList.appendChild(listItem);

	}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

showPage(data, 1);

});