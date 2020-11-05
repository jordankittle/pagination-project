/**
  * Pagination project - Treehouse techdegree project 2 - Data Pagination and Filtering
**/

// Declare students per page once so functionality is easy to change if desired
const studentsPerPage = 9;

/** showPage function
  * Determine students to show via page number and search parameters
  * Cycle through student data and call generateListItem for each student
  * Append each returned list item to the unordered list
**/
function showPage(list, page) {
	
	const startIndex = (page * studentsPerPage) - studentsPerPage ;
	const endIndex = page * studentsPerPage;
	const ul = document.querySelector('.student-list');
	ul.innerHTML = '';
	console.log(ul);
	for( let i = 0; i < list.length; i++ ){
		if ( i >= startIndex && i < endIndex ){
			const li = generateListItem( list[i] );
			ul.appendChild(li);
		}
		
	}
	
	addPagination(list);
}


/** Generate List Item function
  * Create an LI element on the page and populate its innerHTML with student details
  * Return the LI
**/
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
	return listItem;

}

/**
  *Create the `addPagination` function
  *This function will create and insert/append the elements needed for the pagination buttons
**/
function addPagination ( list ) {
	const pagesToDisplay = Math.ceil( (list.length / studentsPerPage) );
	const linkList = document.querySelector('.link-list');
	linkList.innerHTML = '';
	for ( let i = 0; i < pagesToDisplay; i++ ) {
		const listItem = document.createElement('li');
		listItem .innerHTML = `<button type="button">${i}</button>`;
		linkList.appendChild(listItem);
	}
	
	linkList.children[0].firstElementChild.className = 'active';

}



// Call functions

showPage(data, 1);
