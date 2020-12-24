console.log("Скрипт загружен")
let formData = document.getElementById('formpageform');

var buttonsubmit = document.getElementById('formbuttonsubmit');
buttonsubmit.addEventListener( 'click' , buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();
	
    let index=0;
    for(;index<6;index++){
        if(formData.elements[index].value==""){
            Swal.fire(
                'Ошибка!',
                'Вы не заполнили данные',
                'error'
            )
            console.log("Вы не заполнили данные");
            index=0;
            return;
        }
        else{     
            index++;
        }
    }
    if(formData.elements[6].checked==false){
        Swal.fire(
            'Ошибка!',
            'Мы не можем принять даннее, пока вы не согласны с пользовательским соглашением.',
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
}

let form = document.getElementById('indexform');
var button = document.getElementById('indexbutton');
button.addEventListener( "click" , Pressed);

function Pressed(e) {
	console.log("Кнопка нажата загружен");
	e.preventDefault();
	
	if(indexform.elements[0].value == ""){
	Swal.fire(
			'Ошибка!',
			'Вы не ввели запрос',
			'error'
		)
		console.log("Вы не ввели запрос");
    }
    
	else{
        let string = indexform.elements[0].value;
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Ваше запрос " + string,
		}
		)
		setTimeout(function() {document.location.href = "listpage.html";},1500);
	}
}

