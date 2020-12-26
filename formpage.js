console.log("Скрипт загружен")
let formData = document.getElementById('formpageform');
if(formData){
formData.addEventListener('submit',function buttonPressed(evt) {
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
        
    
    if(formData.checkname.checked==false){
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
        setTimeout(function() {document.location.href = "index.html";},1500);
});
}


let form = document.getElementById('indexform');
form.addEventListener('submit',function Pressed(e) {
	console.log("Кнопка нажата загружен");
	e.preventDefault();
	
	if(form.indextext.value == ""){
	Swal.fire(
			'Ошибка!',
			'Вы не ввели запрос',
			'error'
		)
		console.log("Вы не ввели запрос");
    }
    
	else{
        let string = form.indextext.value;
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Ваше запрос " + string,
		}
		)
		setTimeout(function() {document.location.href = "listpage.html";},1500);
	}
})



