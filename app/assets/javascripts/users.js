jQuery(document).ready(function(){
    jQuery('form')
        .bind("ajax:before",  ajax_before)
        .bind("ajax:complete", ajax_after)
});

function ajax_before (){
    jQuery("#response").html('sending...');
}

function ajax_after (event, data, status, xhr) {
    if (data.status == 200){
        jQuery("#response").html('User created, you mail is: "'+jQuery('#name').val()+'@mailmeonce.com"');
    } else {
        jQuery("#response").html('Error : '+data.responseText);

    }

}
