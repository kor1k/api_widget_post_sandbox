var scriptAdd = document.createElement('script');
scriptAdd.type = 'text/javascript';
scriptAdd.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
scriptAdd.integrity = 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=';
scriptAdd.crossOrigin = 'anonymous';
document.getElementsByTagName('head')[0].appendChild(scriptAdd);

window.addEventListener("load", function () {
    $('.widgetRegForm').html('' +
        '<form method="POST" id="form_widget" onclick="event.preventDefault()">\n' +
        '    <label for="firstName">First Name:</label>' +
        '<input required pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$" id="firstName" name="firstName" value="" type="text">\n' +
        '    <label for="lastName">Last Name:</label>' +
        '<input required pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$" id="lastName" name="lastName" value="" type="text">\n' +
        '    <label for="phone">Phone:</label>' +
        '<input required pattern="^\\d{10}$" id="phone" name="phone" value="" type="tel">\n' +
        '    <label for="country">Country:</label>' +
        '<input required pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$" maxlength="2" id="country" name="country" value="" type="text">\n' +
        '    <label for="email">Email:</label>' +
        '<input required pattern="[^@]+@[^@]+\\.[a-zA-Z]{2,6}" id="email" name="email" value="" type="email">\n' +
        '    <label for="password">Password:</label>' +
        '<input required minlength="6" onkeyup="checkPass(); return false;" id="form_pass1" name="password" value="" type="password">\n' +
        '    <label for="password_confirm">Confirm password:</label>' +
        '<input required minlength="6" onkeyup="checkPass(); return false;" id="form_pass2" name="password_confirm" value=""\n' +
        '                                                                 type="password">\n' +
        '    <input id="submit" value="Register" type="submit">\n' +
        '</form>\n' +
        '<p id="error-nwl"></p>' +
        '<div id="results"></div>');

    $('#submit').on('click', function () {
        var msg = $('#form_widget').serialize();
        console.log(msg);
        $.ajax({
            type: 'POST',
            url: 'https://register.strattonmarkets.com/Lp/LpRegister/st',
            data: msg,
            success: function (data) {
                var res_data = JSON.parse(data);
                $('#results').html(JSON.stringify(res_data.error));
                console.log(res_data.error);
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    });
});

function checkPass() {
    var pass1 = document.getElementById('form_pass1');
    var pass2 = document.getElementById('form_pass2');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff8082";

    if (pass1.value.length >= 6) {
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "character number ok!"
    } else {
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "You have to enter at least 6 digit!";
        return;
    }

    if (pass1.value === pass2.value) {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords are ok!";
    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "These passwords don't match";
    }
}

//     TODO:
//      добавить переводы: en, ru, es
//      добавить условие на проверку буквы в пароле (паролях)
//      проверить весь код ещё 3 раза