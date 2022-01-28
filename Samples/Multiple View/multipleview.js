var ddList = ["Arunachal Prasdesh", "Andhra Pradesh", "Chandigarh", "Chatisgarh", 
"Delhi", "Daman", "Gujarat", "Himachal Pradesh", "Haryana", "Madhya Pradesh", 
"Meghalaya", "Nagaland", "Rajasthan", "Tamil Nadu", "Telungana", "Uttaranchal", 
"Uttar Pradesh", "West Bengal"];

function renderContainer(filterVal) {
	var container = document.getElementsByClassName("dd-container")[0];
	var textBox = document.getElementById("dd-text");
	if(container.style.display == "none" || (filterVal != undefined && filterVal != ''))
	{
		var ulEle = container.children[0];
		while(ulEle.firstElementChild)
		{
			ulEle.removeChild(ulEle.lastElementChild);
		}
		if(filterVal != undefined && filterVal != '') {
			tempList = ddList.filter(a => a.toLocaleLowerCase().startsWith(filterVal.toLocaleLowerCase().trim()));
		} else {
			tempList = ddList;
		}
		for(var i=0; i<tempList.length; i++)
		{
			var newEle = document.createElement("li");
			newEle.style.id = tempList[i];
			newEle.innerText = tempList[i];
			newEle.classList.add('dd-List');
			if(textBox.value.toLocaleLowerCase().trim() == tempList[i].toLocaleLowerCase().trim())
			{
				newEle.classList.add('liselected');
			}
			ulEle.appendChild(newEle);
		}
		container.style.display = "block";
	} else {
		container.style.display = "none";
	}
}

document.addEventListener("keyup", (event) => {
	renderContainer(event.target.value);
});

function renderElement(container, textVal) {
	var dataSelected = container.dataset.selectedlist;
	var selectedList = [];
	if(dataSelected != '')
		selectedList = dataSelected.trim().split(',');
	if(selectedList.filter(a => a.toLocaleLowerCase().trim() == textVal.toLocaleLowerCase().trim()).length > 0) {
		
	} else {
		var contentDiv = document.createElement("div");
		contentDiv.classList.add('content-div');
		contentDiv.id = textVal;
		
		var contentSpan = document.createElement("div");
		contentSpan.innerText = textVal;
		contentSpan.classList.add('content-span');
		contentDiv.appendChild(contentSpan);		
		container.appendChild(contentDiv);
		
		container.dataset.selectedlist = container.dataset.selectedlist + "," + textVal;
	}
}


window.addEventListener("click", function(e){
	
	if(event.target.classList.contains('dd-List')) {
		var container = document.getElementById("contentContainer");		
		if(event.target.classList.contains('liselected')) {
			e.target.classList.remove('liselected');
			if(textBox.value.match(e.target.innerText + ', '))
				textBox.value = textBox.value.replace(e.target.innerText + ', ', '');
			else if(textBox.value.match(', ' + e.target.innerText))
				textBox.value = textBox.value.replace(', ' + e.target.innerText, '');
			else
				textBox.value = textBox.value.replace(e.target.innerText, '');
		} else {
			e.target.classList.add('liselected');
			renderElement(container, e.target.innerText)
		}
	} else if(event.target.classList.contains('text'))	{
		renderContainer(e.target.value);
	} else if(!event.target.classList.contains('text'))	{
		var menu = document.getElementsByClassName("dd-container")[0];
		menu.style.display = "none";
	}	
});