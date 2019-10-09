$(function () {
	//всплывающее модальное окно
    $('#button').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });
});