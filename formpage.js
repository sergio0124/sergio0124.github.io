
console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms[1].elements[7];
buttonsubmit.addEventListener( "click" , buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();
	
    let index=0;
    for(;index<6;index++){
        if(document.forms[1].elements[index].value==""){
            Swal.fire(
                'Ошибка!',
                'Вы не заполнили данные',
                'error'
            )
            console.log("Вы не заполнили данные");
            return;
        }
        else{
            formData.append(String(index),document.forms[1].elements[index].value);
        }
        index++;
    }
    if(document.forms[1].elements[6].checked==false){
        Swal.fire(
            'Ошибка!',
            'Вы согласны.',
            'error'
        )
        return;
    }
    else{
        Swal.fire(
        'Успех',
        'Данные отправлены Банку',
        'success'
    )
        }
    console.log(formData.get('0'),formData.get('1'),formData.get('2'),formData.get('3'),formData.get('4'),formData.get('5'));
}

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

