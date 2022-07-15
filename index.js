function change(idzero) {
	if (idzero.classList.contains("sharp") ) {		
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
}
