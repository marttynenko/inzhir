
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
let regHeader = document.querySelector('.registration-wrap-header').clientHeight
let regFooter = document.querySelector('.registration-wrap-fixed').clientHeight
let reg = document.querySelector('.registration').clientHeight
let regForm = document.querySelector('.registration-form')




// console.log(regHeader)
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--header', `${regHeader}px`);
document.documentElement.style.setProperty('--footer', `${regFooter}px`);

// regForm.style.height = (reg) + 'px'
window.addEventListener('resize', () => {
//   regForm.style.height = (reg) + 'px'
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--header', `${regHeader}px`);
  document.documentElement.style.setProperty('--footer', `${regFooter}px`);


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
               required: 'Примите соглашение',
            },
            checkbox1: {
               required: 'Примите подтверждение',
            },
            checkbox2: {
               required: 'Примите подтверждение',
            },
            sms: {
               required: 'Введите код'
            }
            // text: {
            //    required: "asdasd",
            // },


         },
         submitHandler: function(form) { // <- pass 'form' argument in
            $(".registration-btn").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        }
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
   let phoneInput = document.getElementById('phone');
    // Маска для даты
    if(documentInput) {
      var element = document.getElementById('date');
      var maskOptions = {
         placeholder: '00-00-0000',
         mask: '00-00-0000'
      };
      var mask = IMask(element, maskOptions);
    }

    // Маска для телеофона
    if(phoneInput) {
      var phone = document.getElementById('phone');
      var maskOptions = {
         placeholder: '+{7}(000)000-00-00',
         mask: '+{7}(000)000-00-00'
      };
      var mask = IMask(phone, maskOptions);
    }

   // let emptyInput;
   // let emptyTextarea;
   // let emptyCheckbox = true;

   // $('form * input[type="checkbox"]').change(() => {
   //    $('input[type="checkbox"]').each(function(index) {
   //       if($(this).val() === "true") {
   //          $(this).val(false)
   //          return emptyCheckbox = false;
   //       } else if($(this).val() === "false") {
   //          $(this).val(true)
   //          return emptyCheckbox = true;
   //       }
   //    });
   // })

   // $(document).on('keyup', function(e) {
   //    emptyInput = false;
   //    emptyTextarea = false;
   //    console.log(emptyInput)
   //    $('form * input').each(function() {
   //       if($(this).val() === '') {
   //          return emptyInput = true;
   //       }
   //    });

   //    $('form * textarea').each(function() {
   //       if($(this).val() === '') {
   //          return emptyTextarea = true;
   //       }
   //    });
   // });

   // $(document).mouseover(() => {
   //    // console.log($('form * textarea').length)
   //    if($('form * textarea').length != 0 && $('form * input').length != 0 && $('form * input[type="checkbox"]').length != 0) {
   //       console.log("Есть всё")
   //       if(emptyCheckbox || emptyInput || emptyTextarea) {
   //          $('#register').attr('disabled', 'disabled');
   //          $('#register').addClass('btn-disabled');
   //       } else {
   //          $('#register').removeAttr('disabled');
   //          $('#register').removeClass('btn-disabled');
   //       }
   //    } else {
   //       console.log('Take me to church')
   //    }
      
   //  })



   $('#registration-form input').bind('keyup blur click', function () { // fires on every keyup & blur
      if ($('#registration-form').validate().checkForm()) {                   // checks form for validity
         $('#submit').removeClass('btn-disabled').prop('disabled', false); // enables button
      } else {
         $('#submit').addClass('btn-disabled').prop('disabled', true);   // disables button
      }
 });

    
});

