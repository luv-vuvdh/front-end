/*
	Show hide group
*/
function showHideGroup(){
	var existGroup = document.getElementById("exist-group");
    var newGroup = document.getElementById("new-group");

    if (newGroup.style.display == "none") {
        newGroup.style.display = "";
    } else {
       newGroup.style.display = "none";
    }

    if (existGroup.style.display == "none") {
        existGroup.style.display = "";
    } else {
        existGroup.style.display = "none";
    }
}

/*
	Create new row in Answer
*/
function createNewRow(){
	var tableAnswer = document.getElementById("tableAnswer");
	var rowCount = tableAnswer.rows.length;
	var row = tableAnswer.insertRow();

	row.id = "id"+ (rowCount + 1);

	var column1 = row.insertCell(0);
	var column2 = row.insertCell(1);
	var column3 = row.insertCell(2);

	var element1 = document.createElement('input');
	element1.type = "text";
	element1.name = "question";
	element1.class = "textBox";
	element1.style.width = "400px";
	element1.style.height = "25px";
	column2.appendChild(element1);


	var element2 = document.createElement('input');
	element2.type = "radio";
	element2.name = "correct";
	element2.class = "textBox";
	column3.appendChild(element2);

	column1.innerHTML = "Answer " + (rowCount + 1);
}

/*
	Delete added row in Answer
*/
function deleteNewRow(){
	var tableAnswer = document.getElementById("tableAnswer");
	var rowCount = tableAnswer.rows.length;
	var idRemove = "id" + rowCount;
	var child = document.getElementById(idRemove);

	if (rowCount > 3) {
		child.parentNode.removeChild(child);
	}
}