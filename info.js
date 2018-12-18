function submitted(){
	confirm("등록하시겠습니까?");
}
$('input').focus(function() {
    $(this).next('span').removeAttr('hidden');
});

$('input').blur(function() {
    $(this).next('span').attr('hidden', 'hidden');
});