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

	if( list.length === 0 ){
		ul.innerHTML = '<h3 style="font-size:2.5em">No Results</h1>';
	}

	for( let i = 0; i < list.length; i++ ){
		if ( i >= startIndex && i < endIndex ){
			const li = generateListItem( list[i] );
			ul.appendChild(li);
		}
		
	}
	
	
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
	for ( let i = 1; i <= pagesToDisplay; i++ ) {
		const listItem = document.createElement('li');
		listItem .innerHTML = `<button type="button">${i}</button>`;
		linkList.appendChild(listItem);
	}
	if (linkList.children.length > 0){
		linkList.children[0].firstElementChild.className = 'active';
	}

	linkList.addEventListener('click', (e) => {
		const target = e.target;
		if ( target.type === 'button' ) {
			for ( let i = 0; i < linkList.children.length; i++ ) {
				linkList.children[i].firstElementChild.className = ''; 
			}
		}
		target.className = 'active';
		showPage(list, target.textContent)
		
	});

}

const header = document.querySelector('header.header');
header.insertAdjacentHTML('beforeend',  `
	<label for="search" class="student-search">
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
    </label>
`);
const searchForm = document.querySelector('#search');

searchForm.addEventListener('keyup', (e) => {
	const filteredData = [];
	const searchTerm = searchForm.value;
	for( let i = 0; i < data.length; i++ ) {
		const name = data[i].name.first + ' ' + data[i].name.last;
		if ( name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)  {
			filteredData.push(data[i]);
		}
		
		
	}
	showPage(filteredData, 1);
	addPagination(filteredData);
});


// Call functions

showPage(data, 1);
addPagination(data);
