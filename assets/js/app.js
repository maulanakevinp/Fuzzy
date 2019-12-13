var permintaan = false;
var persediaan = false;
var produksi = false;

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode < 48 || charCode > 57))
        return false;
    return true;
}

function hitung() {
    if ($('#permintaan').val() == "" || $('#permintaanMaximal').val() == "" || $('#permintaanMinimal').val() == "" || $('#persediaan').val() == "" || $('#persediaanMaximal').val() == "" || $('#persediaanMinimal').val() == "" || $('#produksiMaximal').val() == "" || $('#produksiMinimal').val() == "") {
        alert("Data Harus Di isi");
    } else {
        if ($('#permintaanMaximal').val() < $('#permintaanMinimal').val()) {
            $('#errorPermintaanMaximal').append('Permintaan maximal harus lebih besar dari Permintaan minimal')
            $('#errorPermintaanMinimal').append('Permintaan minimal harus lebih kecil dari Permintaan maximal')
            permintaan = false;
        } else {
            $('#errorPermintaanMaximal').html('');
            $('#errorPermintaanMinimal').html('');
            permintaan = true;
        }

        if ($('#persediaanMaximal').val() < $('#persediaanMinimal').val()) {
            $('#errorPersediaanMaximal').append('Persediaan maximal harus lebih besar dari Persediaan minimal')
            $('#errorPersediaanMinimal').append('Persediaan minimal harus lebih kecil dari Persediaan maximal')
            persediaan = false;
        } else {
            $('#errorPersediaanMaximal').html('');
            $('#errorPersediaanMinimal').html('');
            persediaan = true;
        }

        if ($('#produksiMaximal').val() < $('#produksiMinimal').val()) {
            $('#errorProduksiMaximal').append('Produksi maximal harus lebih besar dari Produksi minimal')
            $('#errorProduksiMinimal').append('Produksi minimal harus lebih kecil dari Produksi maximal')
            produksi = false;
        } else {
            $('#errorProduksiMaximal').html('');
            $('#errorProduksiMinimal').html('');
            produksi = true;
        }

        if (permintaan == true && persediaan == true && produksi == true) {
            $('#produksi').html('1000');
        }
    }
}

$(document).ready(function() {

    $('#permintaanMaximal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#permintaanMinimal').focus();
        }
    });

    $('#permintaanMinimal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#persediaanMaximal').focus();
        }
    });

    $('#persediaanMaximal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#persediaanMinimal').focus();
        }
    });

    $('#persediaanMinimal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#produksiMaximal').focus();
        }
    });

    $('#persediaanMinimal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#produksiMaximal').focus();
        }
    });

    $('#produksiMaximal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#produksiMinimal').focus();
        }
    });

    $('#produksiMinimal').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#permintaan').focus();
        }
    });

    $('#permintaan').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#persediaan').focus();
        }
    });

    $('#persediaan').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            hitung();
        }
    });
});