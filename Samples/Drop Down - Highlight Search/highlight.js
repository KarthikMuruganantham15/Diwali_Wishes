var ddList = ["Arunachal Prasdesh", "Andhra Pradesh", "Chandigarh", "Chatisgarh", 
"Delhi", "Daman", "Gujarat", "Himachal Pradesh", "Haryana", "Madhya Pradesh", 
"Meghalaya", "Nagaland", "Rajasthan", "Tamil Nadu", "Telungana", "Uttaranchal", 
"Uttar Pradesh", "West Bengal"];

var tempList = [];

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
		if(filterVal == undefined || filterVal == '')
		{
			tempList = ddList;
		} else {
			filterVal = filterVal.trim();
			tempList = ddList.filter(a => a.toLocaleLowerCase().match(filterVal.toLocaleLowerCase()) != null);
		}
		for(var i=0; i<tempList.length; i++)
		{
			var newEle = document.createElement("li");
			newEle.style.id = tempList[i];
			newEle.classList.add('dd-List');
			newEle.id = tempList[i];
			if(textBox.value.toLocaleLowerCase().trim() == tempList[i].toLocaleLowerCase().trim())
			{
				newEle.classList.add('liselected');
			}
			if(filterVal != undefined && filterVal != '') {
				var startText = tempList[i].substr(0, tempList[i].toLocaleLowerCase().match(filterVal.toLocaleLowerCase()).index);
				var highlightText = tempList[i].substr(tempList[i].toLocaleLowerCase().match(filterVal.toLocaleLowerCase()).index, filterVal.length);
				var endText =  tempList[i].substr(startText.length + filterVal.length);
				newEle.appendChild(renderHighlightedElement(startText, false));
				newEle.appendChild(renderHighlightedElement(highlightText, true));
				newEle.appendChild(renderHighlightedElement(endText, false));
			} else {
				newEle.innerText = tempList[i];
			}
			
			ulEle.appendChild(newEle);
		}
		container.style.display = "block";
	} else {
		container.style.display = "none";
	}
}

function renderHighlightedElement(textVal, isHighLight) {
	var highLightEle = document.createElement("span");
	highLightEle.innerText = textVal;
	if(isHighLight)
		highLightEle.classList.add('highlight');
	return highLightEle;
}
	
document.addEventListener("keyup", (event) => {
                renderContainer(event.target.value);
            });

window.addEventListener("click", function(e){
	
	if(event.target.classList.contains('dd-List') || event.target.parentElement.classList.contains('dd-List') ) {
		var textBox = document.getElementById("dd-text");
		if(event.target.classList.contains('dd-List'))		
			textBox.value = e.target.id;
		else
			textBox.value = e.target.parentElement.id;
	}
	
	if(!event.target.classList.contains('arrow') && !event.target.classList.contains('arrow-container'))
	{
		var menu = document.getElementsByClassName("dd-container")[0];
		menu.style.display = "none";
	} 

	
})