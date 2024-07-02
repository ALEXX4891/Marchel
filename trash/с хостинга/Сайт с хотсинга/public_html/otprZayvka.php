<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
  $('.btn_zayvka-otprav').click(function() {
    var name = $('#form_footer-name').val();
    var phone = $('#form_footer-phone').val();
    var sita = $('#form_footer-situation').val();
    $.ajax({ 
        url: 'otprZayvkaM.php',
        type: 'POST',
        cache: false,
        data: {'form_footer-name': name, 'form_footer-phone': phone, 'form_footer-situation': sita},
        dataType: 'html',
        success: function(data) { 
            if (data == 'Готово') {
        $('#phone-errors').hide();
        $('#form_footer-phone').val("");
        $('#form_footer-name').val("");
        $('#form_footer-situation').val("");
        $('#form_footer-phone').removeClass('.error');
        $('.css-modal-target').show(); // Показываем модальное окно
        $('html').addClass('no-scroll'); 
        } 
        
}
    });
});
    </script> 