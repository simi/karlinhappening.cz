$(document).ready(function() {
  $('form#reg').submit(function() {
    var url = $('form#reg').attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: $('form#reg').serialize(),
      complete: function(response, status) {
        switch(response.status) {
          case 204:
            alert('Registrace úspěšná!');
            $('form#reg')[0].reset();
            break;
          case 400:
            alert('Špatně vyplněný formulář!');
            break;
          case 409:
            alert('Tento email je již registrován!');
            break;
          default:
            alert('Bohužel nastala chyba. Zkontrolujte formulář nebo zkuste registraci později.');
        }
      }
    });
    return false;
  });
});
