
export default function display(id,obj){
	let divEdu=document.getElementById(id),head=document.createElement('h2');
	head.innerHTML=id.toUpperCase();
	divEdu.appendChild(head);
	for(let key in obj){
		obj[key].forEach((item)=>{
			let newElement=document.createElement('div');
			let newChild='';
			for(let _key in item){
				if(_key==='link'){
					newChild+=`<h3><strong>${_key.toUpperCase()}: </strong><a href="${item[_key]}"  target='_blank'>live site</a></h3>`;
				}else{
					newChild+=`<h3><strong>${_key.toUpperCase()}: </strong>${item[_key]}</h3>`;
				}	
			}
			newElement.className+=`educationRecord group`;
			newElement.innerHTML+=newChild;
			divEdu.appendChild(newElement);
		});
	}
}
