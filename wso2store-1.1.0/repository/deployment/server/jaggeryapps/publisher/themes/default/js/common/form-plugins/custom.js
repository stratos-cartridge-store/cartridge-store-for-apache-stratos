            
$(document).ready(function(){
    $('#overview_name').on('input', function() {
        var str = $(this).val().toLowerCase();
        var find = ' ';
        var re = new RegExp(find, 'g');

        str = str.replace(re, '_');
        $('#overview_deployablename').val(str);
    });
});

/*
$('INPUT[type="file"]').change(function () {
    var ext = this.value.match(/\.(.+)$/)[1];

    if($.inArray(ext, ['gif','png','jpg','jpeg','tar.gz']) == -1) {
        alert('invalid extension!');
        this.value = '';
    }

});
*/

$('INPUT[ext="tar.gz"]').change(function () {
    var ext = this.value.match(/\.(.+)$/)[1];

    if($.inArray(ext, ['tar.gz']) == -1) {
        alert('Invalid file extension type. Please upload a "tar.gz" file.');
        this.value = '';
    }

});

