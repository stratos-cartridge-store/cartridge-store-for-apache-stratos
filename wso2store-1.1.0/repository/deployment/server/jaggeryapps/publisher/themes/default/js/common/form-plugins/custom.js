            
$(document).ready(function(){
    $('#overview_name').on('input', function() {
        var str = $(this).val().toLowerCase();
        var find = ' ';
        var re = new RegExp(find, 'g');

        str = str.replace(re, '_');
        $('#overview_deployablename').val(str);
        
    });
});

