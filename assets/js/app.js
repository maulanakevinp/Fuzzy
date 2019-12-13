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

var p1 = false;
var p2 = false;
var p3 = false;

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
            p1 = false;
        } else {
            $('#errorPermintaanMaximal').html('');
            $('#errorPermintaanMinimal').html('');
            p1 = true;
        }

        if ($('#persediaanMaximal').val() < $('#persediaanMinimal').val()) {
            $('#errorPersediaanMaximal').append('Persediaan maximal harus lebih besar dari Persediaan minimal')
            $('#errorPersediaanMinimal').append('Persediaan minimal harus lebih kecil dari Persediaan maximal')
            p2 = false;
        } else {
            $('#errorPersediaanMaximal').html('');
            $('#errorPersediaanMinimal').html('');
            p2 = true;
        }

        if ($('#produksiMaximal').val() < $('#produksiMinimal').val()) {
            $('#errorProduksiMaximal').append('Produksi maximal harus lebih besar dari Produksi minimal')
            $('#errorProduksiMinimal').append('Produksi minimal harus lebih kecil dari Produksi maximal')
            p3 = false;
        } else {
            $('#errorProduksiMaximal').html('');
            $('#errorProduksiMinimal').html('');
            p3 = true;
        }

        if (p1 == true && p2 == true && p3 == true) {
            var permintaan = parseFloat($('#permintaan').val());
            var permintaanMaximal = parseFloat($('#permintaanMaximal').val());
            var permintaanMinimal = parseFloat($('#permintaanMinimal').val());
            var permintaanTurun = (permintaanMaximal - permintaan) / (permintaanMaximal - permintaanMinimal);
            var permintaanNaik = (permintaan - permintaanMinimal) / (permintaanMaximal - permintaanMinimal);

            var persediaan = parseFloat($('#persediaan').val());
            var persediaanMaximal = parseFloat($('#persediaanMaximal').val());
            var persediaanMinimal = parseFloat($('#persediaanMinimal').val());
            var persediaanSedikit = (persediaanMaximal - persediaan) / (persediaanMaximal - persediaanMinimal);
            var persediaanBanyak = (persediaan - persediaanMinimal) / (persediaanMaximal - persediaanMinimal);

            var produksi = parseFloat($('#produksi').val());
            var produksiMaximal = parseFloat($('#produksiMaximal').val());
            var produksiMinimal = parseFloat($('#produksiMinimal').val());

            var a1 = Math.min(permintaanTurun, persediaanBanyak);
            var a2 = Math.min(permintaanTurun, persediaanSedikit);
            var a3 = Math.min(permintaanNaik, persediaanBanyak);
            var a4 = Math.min(permintaanNaik, persediaanSedikit);
            var a = a1 + a2 + a3 + a4;

            var z1 = ((a1 * (produksiMaximal - produksiMinimal)) - produksiMaximal) / -1;
            var z2 = ((a2 * (produksiMaximal - produksiMinimal)) - produksiMaximal) / -1;
            var z3 = (a3 * (produksiMaximal - produksiMinimal)) + produksiMinimal;
            var z4 = (a4 * (produksiMaximal - produksiMinimal)) + produksiMinimal;

            var az1 = a1 * z1;
            var az2 = a2 * z2;
            var az3 = a3 * z3;
            var az4 = a4 * z4;
            var az = az1 + az2 + az3 + az4;

            var z = az / a;

            $('#produksi').html(z);
            console.log('');
            console.log('Permintaan Turun   = ' + permintaanTurun);
            console.log('Permintaan Naik    = ' + permintaanNaik);
            console.log('-----------------------------------------');
            console.log('Persediaan Sedikit = ' + persediaanSedikit);
            console.log('Persediaan Banyak  = ' + persediaanBanyak);
            console.log('-----------------------------------------');
            console.log('aPerd 1 = ' + a1);
            console.log('aPerd 2 = ' + a2);
            console.log('aPerd 3 = ' + a3);
            console.log('aPerd 4 = ' + a4);
            console.log('-----------------------------------------');
            console.log('z1 = ' + z1);
            console.log('z2 = ' + z2);
            console.log('z3 = ' + z3);
            console.log('z4 = ' + z4);
            console.log('-----------------------------------------');
            console.log("Z = (" + az1 + " + " + az2 + " + " + az3 + " + " + az4 + ") / " + a1 + " + " + a2 + " + " + a3 + " + " + a4 + " = " + z);
        }
    }
}