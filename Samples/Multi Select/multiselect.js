var ddList = ["Arunachal Prasdesh", "Andhra Pradesh", "Chandigarh", "Chatisgarh", 
"Delhi", "Daman", "Gujarat", "Himachal Pradesh", "Haryana", "Madhya Pradesh", 
"Meghalaya", "Nagaland", "Rajasthan", "Tamil Nadu", "Telungana", "Uttaranchal", 
"Uttar Pradesh", "West Bengal"];

function renderContainer() {
	var container = document.getElementsByClassName("dd-container")[0];
	var textBox = document.getElementById("dd-text");
	if(container.style.display == "none")
	{
		var ulEle = container.children[0];
		var selectedList = textBox.value.trim().split(', ');
		while(ulEle.firstElementChild)
		{
			ulEle.removeChild(ulEle.lastElementChild);
		}
		for(var i=0; i<ddList.length; i++)
		{
			var newEle = document.createElement("li");
			newEle.style.id = ddList[i];
			newEle.innerText = ddList[i];
			newEle.classList.add('dd-List');
			if(selectedList.filter(a => a.trim() == ddList[i].trim()).length > 0)
				newEle.classList.add('liselected');			
			ulEle.appendChild(newEle);
		}
		container.style.display = "block";
	} else {
		container.style.display = "none";
	}
}


window.addEventListener("click", function(e){
	
	if(event.target.classList.contains('dd-List')) {		
		var textBox = document.getElementById("dd-text");		
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
			if(textBox.value == '')
				textBox.value = e.target.innerText;
			else
				textBox.value = textBox.value + ', ' + e.target.innerText;
		}
	} else if(!event.target.classList.contains('arrow') && !event.target.classList.contains('arrow-container'))	{
		var menu = document.getElementsByClassName("dd-container")[0];
		menu.style.display = "none";
	} 

	
})