//Создание модального окна
function createModalForm(open, close) {
  const modal = document.createElement('div'),
    modalContent = document.createElement('div'),
    modalCloseBtn = document.createElement('button');

    modal.classList.add('modal');
    modalContent.classList.add('modal__content');
    modalCloseBtn.classList.add('modal__close-btn');
    modal.id = 'modal';

    modalContent.append(modalCloseBtn)
    modal.append(modalContent);

    open(modal, modalContent);

    modalCloseBtn.addEventListener('click', () => {
      modal.remove();
    })

    modal.addEventListener('click', (e) => {
      const click = e.composedPath().includes(modalContent)
      if (!click) {
        modal.remove()
      }
    })

    document.body.append(modal);
}

//модальное окно "Вход"
createModalForm(
  function(modal, content){

    let imgLogo = document.createElement('img'),
        title = document.createElement('h1'),
        errorBlock = document.createElement('div'),
        form = document.createElement('form'),

        inputEmailContainer = document.createElement('div'),
        InputEmail = document.createElement('input'),
        labelEmail = document.createElement('label'),

        inputPasswordContainer = document.createElement('div'),
        iconPassword = document.createElement('a'),
        InputPassword = document.createElement('input'),
        labelPassword = document.createElement('label'),

        marksBlock = document.createElement('div'),
        labelRemember = document.createElement('label'),
        checkRemember = document.createElement('input'),
        checkText = document.createElement('span'),
        forgotLink = document.createElement('a'),

        btnsBlock = document.createElement('div'),
        btnIn = document.createElement('button'),
        btnCancel = document.createElement('button'),
        btnOtherIn = document.createElement('button'),

        btnRegister = document.createElement('button');



        imgLogo["src"] = "img/logo.png";
        forgotLink['href'] = "#"
        iconPassword['href'] = "#"

        form.id = 'form'
        InputEmail.id = 'email'
        InputPassword.id = 'password'
        checkRemember.id = 'check'

        InputEmail.placeholder = 'E-mail'
        InputPassword.placeholder = 'Пароль'

        InputPassword.type = 'password'
        checkRemember.type = 'checkbox'
        labelRemember.htmlFor = 'check'
        btnIn.disabled = true

        title.textContent = 'Добро пожаловать!'
        labelEmail.textContent = 'E-mail'
        labelPassword.textContent = 'Пароль'
        checkText.textContent = 'Запомнить меня на этом компьютере'
        forgotLink.textContent = 'Забыли пароль?'
        btnIn.textContent = 'войти'
        btnCancel.textContent = 'отмена'
        btnOtherIn.textContent = 'вход через JINR SSO'
        btnRegister.textContent = 'Регистрация для входа на сайт'



        imgLogo.classList.add('modal__img')
        title.classList.add('modal__title')
      
        inputEmailContainer.classList.add('input__container')
        InputEmail.classList.add('modal__input')
        labelEmail.classList.add('modal__label')

        inputPasswordContainer.classList.add('input__container')
        iconPassword.classList.add('input__icon')
        InputPassword.classList.add('modal__input', 'margin')
        labelPassword.classList.add('modal__label')
        
        marksBlock.classList.add('modal__marks')
        labelRemember.classList.add('label__remember')
        checkText.classList.add('check__text')
        forgotLink.classList.add('modal__forgot')

        btnsBlock.classList.add('modal__btns')
        btnIn.classList.add('btn__in', 'btn')
        btnCancel.classList.add('btn__cancel', 'btn')
        btnOtherIn.classList.add('btn__olterIn', 'btn')

        btnRegister.classList.add('btn__register', 'btn')



        //Валидация
        function createError(text) {
          const parent = errorBlock;
          const errorLabel = document.createElement('span');

          errorLabel.classList.add('error-label')
          errorLabel.textContent = text
          parent.classList.add('error')

          parent.append(errorLabel);
        }

        function validation(form) {
          errorBlock.innerHTML = ''

          const allInputs = form.querySelectorAll('.modal__input');

          for (let i = 0; i < allInputs.length-1; i++) {
            if (allInputs[i].value == ''){
              allInputs.forEach(element => {
                element.classList.add('error')
              });
              createError('Ошибка. E-mail или пароль введены неверно.')
              btnIn.disabled = true
            } else {
              allInputs.forEach(element => {
                element.classList.remove('error')
              });
            }
          }

          //проверка почты
          if (!InputEmail.value.includes('@')) {
            allInputs.forEach(element => {
              element.classList.add('error')
            });
            createError('Ошибка. E-mail или пароль введены неверно.')
            btnIn.disabled = true
          } 

          //проверка пароля
          if (InputPassword.value.length <= 5) {
            allInputs.forEach(element => {
              element.classList.add('error')
            });
            createError('Ошибка. E-mail или пароль введены неверно.')
            btnIn.disabled = true
          } 

          InputEmail.addEventListener('input', () => {
            btnIn.disabled = false
            allInputs.forEach(element => {
              element.classList.remove('error')
            });
          })

          InputPassword.addEventListener('input', () => {
            btnIn.disabled = false
            allInputs.forEach(element => {
              element.classList.remove('error')
            });
          })
        }


        btnIn.addEventListener('click', (e) => {
          e.preventDefault()
          validation(form)
        })

        InputEmail.oninput = () => {
          btnIn.disabled = false
        }

        InputEmail.onfocus = () => {
          labelEmail.classList.add('visible')
        }

        InputPassword.onfocus = () => {
          labelPassword.classList.add('visible')
        }

        InputEmail.onblur = () => {
          if (InputEmail.value == '') {
            labelEmail.classList.remove('visible')
          }
        }

        InputPassword.onblur = () => {
          if (InputPassword.value == '') {
            labelPassword.classList.remove('visible')
          }
          
        }

        // Скрыть/показать пароль
        iconPassword.onclick = () => {
          if (InputPassword.getAttribute('type') == 'password') {
            iconPassword.classList.add('view');
            InputPassword.setAttribute('type', 'text');
          } else {
            iconPassword.classList.remove('view');
            InputPassword.setAttribute('type', 'password');
          }
        }

        //Модальное окно "Забыли пароль?"
        forgotLink.addEventListener('click', () => {
          modal.remove()

          createModalForm(
            function(modal, content) {
              let imgLogo = document.createElement('img'),
                  title = document.createElement('h1'),
                  subtitle = document.createElement('p'),

                  inputEmailContainer = document.createElement('div'),
                  InputEmail = document.createElement('input'),
                  labelEmail = document.createElement('label'),

                  btnsBlock = document.createElement('div'),
                  btnChange = document.createElement('button'),
                  btnCancel = document.createElement('button');

                  imgLogo["src"] = "img/logo.png";
                  InputEmail.placeholder = 'E-mail'

                  title.textContent = 'Забыли пароль?'
                  subtitle.textContent = 'Вам будет отправлена ссылка на вашу почту для создания нового пароля.'
                  labelEmail.textContent = 'E-mail'
                  btnChange.textContent = 'изменить пароль'
                  btnCancel.textContent = 'отмена'


                  imgLogo.classList.add('modal__img')
                  title.classList.add('modal__title-forgor')
                  subtitle.classList.add('modal__subtitle')
                
                  inputEmailContainer.classList.add('input__container', 'forgot__container')
                  InputEmail.classList.add('modal__input')
                  labelEmail.classList.add('modal__label')

                  btnsBlock.classList.add('modal__btns-block')
                  btnChange.classList.add('btn__in', 'btn__change', 'btn')
                  btnCancel.classList.add('btn__cancel-fogot', 'btn')

                  InputEmail.onfocus = () => {
                    labelEmail.classList.add('visible')
                  }

                  //Модальное окно "Оповещение о восстановлении пароля"
                  btnChange.addEventListener('click', () => {
                    modal.remove()

                    createModalForm(
                      function(modal, content) {
                        let imgLogo = document.createElement('img'),
                            mailText = document.createElement('p'),
                            mailLink = document.createElement('a'),
                            text = document.createElement('p'),
                            btnClose = document.createElement('button');

                            imgLogo["src"] = "img/mail.png";
                            mailLink['href'] = "#"

                            mailText.textContent = 'Проверьте'
                            mailLink.textContent = 'почту'
                            text.textContent = 'Вам было направлено письмо для изменения пароля.'
                            btnClose.textContent = 'закрыть'

                            imgLogo.classList.add('modal__img')
                            mailText.classList.add('modal__mail-text')
                            mailLink.classList.add('modal__mail-link')
                            text.classList.add('modal__mail-text', 'margin__mail')
                            btnClose.classList.add('btn__in', 'btn', 'btn__close')


                        btnClose.addEventListener('click', () => {
                          modal.remove()
                        })
                            
                        mailText.append(mailLink)
                        content.append(imgLogo, mailText, text, btnClose)
                        modal.append(content)    
                      }
                    )
                  })

              
              inputEmailContainer.append(InputEmail, labelEmail)
              btnsBlock.append(btnChange, btnCancel)
              content.append(imgLogo, title, subtitle, inputEmailContainer, btnsBlock)
              modal.append(content)
            }
          )
        })


        //Модальное окно "Регистрация"
        btnRegister.addEventListener('click', () => {
          modal.remove()

          createModalForm(
            function(modal, content) {
              let imgLogo = document.createElement('img'),
                  title = document.createElement('h2'),
                  subtitle = document.createElement('p'),
                  form = document.createElement('form'),

                  inputEmailContainer = document.createElement('div'),
                  InputEmail = document.createElement('input'),
                  labelEmail = document.createElement('label'),

                  inputPasswordContainer = document.createElement('div'),
                  iconPassword = document.createElement('a'),
                  InputPassword = document.createElement('input'),
                  labelPassword = document.createElement('label'),
                  
                  ruleText = document.createElement('p'),

                  inputPasswordAgainContainer = document.createElement('div'),
                  iconPasswordAgain = document.createElement('a'),
                  InputPasswordAgain = document.createElement('input'),
                  labelPasswordAgain = document.createElement('label'),

                  marksBlock = document.createElement('div'),
                  labelRemember = document.createElement('label'),
                  checkRemember = document.createElement('input'),
                  checkText = document.createElement('span'),
                  ruleLink = document.createElement('a'),

                  btnsBlock = document.createElement('div'),
                  btnIn = document.createElement('button'),
                  btnCancel = document.createElement('button'),
                  btnOtherIn = document.createElement('button');

                  imgLogo["src"] = "img/logo.png";
                  ruleLink['href'] = "#"
                  iconPassword['href'] = "#"
                  iconPasswordAgain['href'] = "#"
                  btnIn.disabled = true
                  checkRemember.id = 'check'

                  InputEmail.placeholder = 'E-mail'
                  InputPassword.placeholder = 'Пароль'
                  InputPasswordAgain.placeholder = 'Повторите пароль'

                  InputPassword.type = 'password'
                  InputPasswordAgain.type = 'password'
                  checkRemember.type = 'checkbox'
                  labelRemember.htmlFor = 'check'

                  title.textContent = 'Создайте свой аккаунт'
                  subtitle.textContent = 'Подтверждение регистрации придет на указанный E-mail'
                  labelEmail.textContent = 'E-mail'
                  labelPassword.textContent = 'Пароль'
                  ruleText.textContent = 'Пароль должен быть не менее 6 символов'
                  labelPasswordAgain.textContent = 'Повторите пароль'
                  checkText.textContent = 'Нажимая на кнопку, я принимаю условия'
                  ruleLink.textContent = 'Соглашения'
                  btnIn.textContent = 'зарегестрироваться'
                  btnCancel.textContent = 'отмена'
                  btnOtherIn.textContent = 'вход'

              
                  imgLogo.classList.add('modal__img')
                  title.classList.add('modal__title-forgor')
                  subtitle.classList.add('modal__subtitle')
                
                  inputEmailContainer.classList.add('input__container')
                  InputEmail.classList.add('modal__input')
                  labelEmail.classList.add('modal__label')

                  inputPasswordContainer.classList.add('input__container')
                  iconPassword.classList.add('input__icon')
                  InputPassword.classList.add('modal__input', 'margin__input')
                  labelPassword.classList.add('modal__label')

                  ruleText.classList.add('modal__rule-text')

                  inputPasswordAgainContainer.classList.add('input__container')
                  iconPasswordAgain.classList.add('input__icon')
                  InputPasswordAgain.classList.add('modal__input', 'margin')
                  labelPasswordAgain.classList.add('modal__label')
                  
                  marksBlock.classList.add('modal__marks')
                  labelRemember.classList.add('label__remember')
                  checkText.classList.add('check__text')
                  ruleLink.classList.add('modal__forgot', 'modal__rule-link')

                  btnsBlock.classList.add('modal__btns', 'modal__btns-register')
                  btnIn.classList.add('btn__in', 'btn')
                  btnCancel.classList.add('btn__cancel', 'btn')
                  btnOtherIn.classList.add('btn__olterIn', 'btn')



              InputEmail.oninput = () => {
                btnIn.disabled = false
              }

              InputEmail.onfocus = () => {
                labelEmail.classList.add('visible')
              }

              InputPassword.onfocus = () => {
                labelPassword.classList.add('visible')
              }

              InputPasswordAgain.onfocus = () => {
                labelPasswordAgain.classList.add('visible')
              }

              iconPassword.onclick = () => {
                if (InputPassword.getAttribute('type') == 'password') {
                  iconPassword.classList.add('view');
                  InputPassword.setAttribute('type', 'text');
                } else {
                  iconPassword.classList.remove('view');
                  InputPassword.setAttribute('type', 'password');
                }
              }

              iconPasswordAgain.onclick = () => {
                if (InputPasswordAgain.getAttribute('type') == 'password') {
                  iconPasswordAgain.classList.add('view');
                  InputPasswordAgain.setAttribute('type', 'text');
                } else {
                  iconPasswordAgain.classList.remove('view');
                  InputPasswordAgain.setAttribute('type', 'password');
                }
              }

              //Модальное окно "Подтверждение регистрации"
              btnIn.addEventListener('click', () => {
                modal.remove()

                 createModalForm(
                      function(modal, content) {
                        let imgLogo = document.createElement('img'),
                            textBlock = document.createElement('div'),
                            mailText1 = document.createElement('p'),
                            mailLink = document.createElement('a'),
                            mailText2 = document.createElement('p'),
                            text = document.createElement('p'),
                            btnClose = document.createElement('button');

                            imgLogo["src"] = "img/mail.png";
                            mailLink['href'] = "#"

                            mailText1.textContent = 'Проверьте'
                            mailLink.textContent = 'почту.'
                            mailText2.textContent = ' Вам было направлено письмо для '
                            text.textContent = 'подтверждения регистрации и входа в личный кабинет.'
                            btnClose.textContent = 'закрыть'

                            imgLogo.classList.add('modal__img')
                            mailText1.classList.add('modal__mail-text', 'flex')
                            mailLink.classList.add('modal__mail-link')
                            mailText2.classList.add('modal__reg-text')
                            text.classList.add('modal__mail-text', 'margin__mail')
                            btnClose.classList.add('btn__in', 'btn', 'btn__close')


                        btnClose.addEventListener('click', () => {
                          modal.remove()
                        })
                            
                        mailText1.append(mailLink, mailText2)
                        content.append(imgLogo, mailText1, text, btnClose)
                        modal.append(content)    
                      }
                    )
              })


              
              labelRemember.append(checkRemember, checkText)
              inputEmailContainer.append(InputEmail, labelEmail)
              inputPasswordContainer.append(InputPassword, labelPassword, iconPassword)
              inputPasswordAgainContainer.append(InputPasswordAgain, labelPasswordAgain, iconPasswordAgain)
              marksBlock.append(labelRemember, ruleLink)
              btnsBlock.append(btnIn, btnCancel, btnOtherIn)

              form.append(inputEmailContainer, inputPasswordContainer, ruleText, inputPasswordAgainContainer, marksBlock, btnsBlock)
              content.append(imgLogo, title, subtitle, form)
              modal.append(content)
            }
          )
        })



        labelRemember.append(checkRemember, checkText)
        inputEmailContainer.append(InputEmail, labelEmail)
        inputPasswordContainer.append(InputPassword, labelPassword, iconPassword)
        marksBlock.append(labelRemember, forgotLink)
        btnsBlock.append(btnIn, btnCancel, btnOtherIn)

        form.append(inputEmailContainer, inputPasswordContainer, marksBlock, btnsBlock)
        content.append(imgLogo, title, errorBlock, form, btnRegister)
        modal.append(content)

  })