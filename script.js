(function() {
    emailjs.init("gjWEh1BcdCLRiKCvS");
})(); 
function sendEmail() {
    emailjs.sendForm('service_gcn3upj', 'template_s0yc2lu', '#contact-form')
        .then(function(response) {
            alert('E-mail enviado com sucesso!');
        }, function(error) {
            alert('Falha ao enviar e-mail. Tente novamente.');
        });
}