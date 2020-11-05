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

	function generateListItem(student) {
		
		const studentList = document.querySelector('.student-list');
		const listItem = document.createElement('li');
		listItem.className = 'student-item cf';
		
		const student_details = document.createElement('div');
		student_details.className = 'student-details';

		const avatar = document.createElement('img');
		avatar['src']	= student.picture.large;
		avatar['alt'] = 'Profile Picture';
		avatar.className = 'avatar';
		student_details.appendChild(avatar);

		const name = document.createElement('h3');
		name.textContent = `${student.name.title} ${student.name.first} ${student.name.last}`;
		student_details.appendChild(name);

		const email = document.createElement('span');
		email.className = 'email';
		email.textContent = student.email;
		student_details.appendChild(email);

		listItem.appendChild(student_details);

		const joined_details = document.createElement('div');
		joined_details.className = 'joined-details';

		const date = document.createElement('span');
		date.className = 'date';
		date.textContent = `Joined ${student.registered.date}`;

		joined_details.appendChild(date);
		listItem.appendChild(joined_details);

		studentList.appendChild(listItem);

			
		

	}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

showPage(data, 2);

});