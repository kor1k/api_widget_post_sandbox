$('#submit').on('click', function () {
    var msg = $('#formx').serialize();
    console.log(msg);
    $.ajax({
        type: 'POST',
        url: 'https://register.strattonmarkets.com/Lp/LpRegister/st',
        data: msg,
        success: function (data) {
            //alert(data);
            var res_data = JSON.parse(data);
            $('#results').html(JSON.stringify(res_data.error));
            console.log(res_data.error);
        },

        // // json
        // phone:"6544654654",
        // counttry:"6544654654",
        // phone:"6544654654",
        // phone:"6544654654",

        error: function (xhr, str) {
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
});
