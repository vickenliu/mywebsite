import {bio,projects,education,work} from './constant';
import display from './display';

document.addEventListener('DOMContentLoaded', function() {
  	init();
});

function init(){
	displayBio();
	display('education',education);
	display('projects',projects);
	display('work',work);
}


function displayBio(){
	var ul=document.getElementById('bio').querySelector('ul');
	for(var item in bio){
		var newElement=document.createElement('li');
		if(item==='email'){
			newElement.innerHTML="<strong>"+item.toUpperCase()+":</strong> <a href='mailto:"+bio[item]+"'>"+bio[item]+"</a>";
		}else if(item==="mobile"){
			newElement.innerHTML="<strong>"+item.toUpperCase()+":</strong> <a href='tel:"+bio[item]+"'>"+bio[item]+"</a>";
		}else{
			newElement.innerHTML="<strong>"+item.toUpperCase()+":</strong> "+bio[item];
		}
		
		ul.appendChild(newElement);
	}
}
