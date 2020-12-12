console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms[0].elements[1];
buttonsubmit.addEventListener( "click" , buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();
	
	if(document.forms[0].elements[0].value == ""){
	Swal.fire(
			'Ошибка!',
			'Вы не ввели запрос',
			'error'
		)
		console.log("Вы не ввели запрос");
	}
	else{
		formData.append('Search', document.forms[0].elements[0].value);
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Ваше запрос " + formData.get("Search"),
		}
		)
		setTimeout(function() {document.location.href = "listpage.html";},1500);
		console.log("Перешли на страницу поиска");
	}
}



