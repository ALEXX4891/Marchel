<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
  $('.btn_on-modal-zakaz1').click(function() {
    var name = $('#form_footer-name1').val();
    var phone = $('#form_footer-phone1').val();
    var sita = $('#form_footer-situation1').val();
    $.ajax({ 
        url: 'zakazZvonM.php',
        type: 'POST',
        cache: false,
        data: {'form_footer-name1': name, 'form_footer-phone1': phone, 'form_footer-situation1': sita},
        dataType: 'html',
        success: function(data) { 
            if (data == 'Готово') {
        $('.wrap-zvonok').hide();
        $('#phone-errors').hide();
        $('#form_footer-phone1').val("");
        $('#form_footer-name1').val("");
        $('#form_footer-situation1').val("");
        $('#form_footer-phone1').removeClass('.error');
        $('.css-modal-target').show(); // Показываем модальное окно
        $('html').addClass('no-scroll'); 
    }
}
    });
});
    </script> 