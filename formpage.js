
console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms[0].elements[7];
buttonsubmit.addEventListener( "click" , buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();
	
    let index=0;
    for(;index<6;index++){
        if(document.forms[0].elements[index].value==""){
            Swal.fire(
                'Ошибка!',
                'Вы не заполнили данные',
                'error'
            )
            console.log("Вы не заполнили данные");
            return;
        }
        else{
            formData.append(String(index),document.forms[0].elements[index].value);
        }
        index++;
    }
    if(document.forms[0].elements[6].checked==false){
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



