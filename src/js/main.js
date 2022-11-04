
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;





// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function () {


    // Валидация формы
        $("#registration-form").validate({
           errorElement: 'span',
           errorPlacement: function (error, element) {
              if (element.attr("type") == "checkbox") {
                 return element.next('label').append(error);
              }
              error.insertAfter($(element));
           },
           rules: {
              name: {
                 required: true,
                 lettersonly: true,
              },
              secondname: {
                 required: true,
                 lettersonly: true,
              },
              date: {
               required: true,
               date: true,
              },
              city: {
               required: true,
               lettersonly: true,
              },
              adress: {
               required: true,
              },
              document: {
               required: true,
              },
              text: {
               required: true,
              },
              phone: {
               required: true,
              },
              checkbox: {
               required: true,
              },
              checkbox1: {
               required: true,
              },
              checkbox2: {
               required: true,
              },
              sms: {
               required: true,
              }


           },
           messages: {

            name: {
               required: "Введите своё имя",
               lettersonly: "Введите корректное имя",
            },
            secondname: {
               required: "Введите свою фамилию",
               lettersonly: "Введите корректную фамилию",
            },
            date: {
               required: "Введите дату",
               date: "Введите корректную дату",
            },
            city: {
               required: "Введите вашу страну",
               lettersonly: "Введите корректное имя страны",
            },
            adress: {
               required: "Введите ваш адресс",
            },
            document: {
               required: "Введите номер документа",
            },
            text: {
               required: "Введите дополнительные данные",
            },
            checkbox: {
               required: 'Обязательное поле',
            },
            checkbox1: {
               required: 'Обязательное поле',
            },
            checkbox2: {
               required: 'Обязательное поле',
            },
            sms: {
               required: 'Введите код'
            }
         },
        });
        jQuery.validator.addMethod(
            "lettersonly",
            function (value, element) {
              return this.optional(element) || /^[a-zA-ZА-Яа-я\s,ё]+$/i.test(value);
            },
            "Incorrect format"
          );

        jQuery.validator.addMethod(
            "telephone",
            function (value, element) {
              return (
                this.optional(element) ||
                /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
              );
            },
            "Incorrect format"
          );



   let documentInput = document.getElementById('document');
    // Маска для даты
    if(documentInput) {
      var element = document.getElementById('date');
      var maskOptions = {
         placeholder: '00-00-0000',
         mask: '00-00-0000'
      };
      var mask = IMask(element, maskOptions);
    }
  

// Disables button
   $('#registration-form input').bind('keyup blur click', function () { 
      if ($('#registration-form').validate().checkForm()) {                   
         $('#submit').removeClass('btn-disabled').prop('disabled', false); 
      } else {
         $('#submit').addClass('btn-disabled').prop('disabled', true);   
      }
 });

    
});



