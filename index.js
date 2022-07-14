	function change(idzero) {
	idzero.innerHTML = "0";
	idzero.classList.remove("sharp");
	idzero.classList.add("zero");
	
	const idix = document.querySelectorAll(".sharp");
	console.log(idix);
	const index = Math.floor(Math.random() * idix.length);
	console.log(index);
	const idixid = idix[index];
	console.log(idixid);
				
	idixid.innerHTML = "X";
	idixid.classList.remove("sharp");
	idixid.classList.add("ix");
}
