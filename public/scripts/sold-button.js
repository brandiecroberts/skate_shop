$(document).ready(() => {

$('.sold-button').on('click', function() {
  const postingId = $(this).data('id')

  $(this).closest('.product').find('.text-box').addClass('sold');

  console.log('postingId', postingId);
  });

});


