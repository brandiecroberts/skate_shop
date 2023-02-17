$('.option-1');
const addFav = $('.option-1');
console.log(addFav);

for (let fav of addFav) {
  console.log($(fav));
  const $fav = $(fav);

  $fav.on("click", function() {
    let itemId = $fav.data('item-id');
    console.log($fav.data('item-id'));
    $.post(`/favourites/${itemId}`)
      .then((response) => {
        console.log(response);
      });
  });
}
