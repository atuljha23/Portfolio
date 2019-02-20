// CSS only !!

// The following JS is a easy way to get checked value with jQuery

var showAlert = true;

// for radio
$('input[type="radio"]').on('change', (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(!showAlert) return;
});

// for checkbox
$('input[type="checkbox"]').on('change', (event) => {
    const name = event.target.name;
    const values = [];
    $('input[name="' + name + '"]:checked').each((index, input) => {
        values.push($(input).val());
    });
    if(!showAlert) return;
    
});

    function myhref(web){
      window.location.href = web;}

// enable / disabled alert
$('#toggle-alert').on('click', ()=> {
    if(showAlert) {
        $('#toggle-alert span').text('ON alert');
    } else {
        $('#toggle-alert span').text('OFF alert');
    }
    showAlert = showAlert ? false : true;
})