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
			tempList = ddList.filter(a => a.toLocaleLowerCase().startsWith(filterVal.toLocaleLowerCase().trim()));
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

window.addEventListener("click", function(e){
	
	if(event.target.classList.contains('dd-List')) {
		var textBox = document.getElementById("dd-text");
		textBox.value = e.target.innerText;
	}
	
	if(!event.target.classList.contains('arrow') && !event.target.classList.contains('arrow-container'))
	{
		var menu = document.getElementsByClassName("dd-container")[0];
		menu.style.display = "none";
	} 

	
})