console.log("Скрипт загружен")
let formData = document.getElementById('formpageform');

var buttonsubmit = document.getElementById('formbuttonsubmit');
if(buttonsubmit){
buttonsubmit.addEventListener( 'click' , buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();
	
    
        if(formData.name.value=="" || formData.statename.selectedindex==0 || formData.surname.value=="" 
        ||formData.cityname.value=="" ||formData.cvcname.value==""||formData.codename.value==""){
            Swal.fire(
                'Ошибка!',
                'Вы не заполнили данные',
                'error'
            )
            console.log("Вы не заполнили данные");
            return;
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

