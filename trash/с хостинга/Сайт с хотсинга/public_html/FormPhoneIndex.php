<script>
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('form_footer-phone');
    const submitButton = document.getElementById('submit_button');

    function formatPhoneNumber(value) {
    if (!value.startsWith('+7')) {
        value = '+7 ' + value;
    }

    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }

    return cleaned.replace(/^(\d{1})?(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?$/, function(_, g1, g2, g3, g4, g5) {
        return `+${g1 || ''}${g2 ? ' (' + g2 : ''}${g3 ? ') ' + g3 : ''}${g4 ? '-' + g4 : ''}${g5 ? '-' + g5 : ''}`; // представляет собой шаблон для номера телефона в формате +7 (XXX) XXX-XX-XX.
    });
}

    phoneInput.addEventListener('input', function() {
        phoneInput.value = formatPhoneNumber(phoneInput.value);

        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (phonePattern.test(phoneInput.value)) {
            submitButton.classList.add('active');
            submitButton.disabled = false;
            phoneInput.classList.remove('input-error');
        } else {
            submitButton.classList.remove('active');
            submitButton.disabled = true;
        }
    });
});
</script>