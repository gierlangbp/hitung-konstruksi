function kalkulasiUkuran () {
    var bentang = document.getElementById("bentang").value;
    var tinggiBalokInduk = document.getElementById("tinggiBalokInduk").value = Math.round(bentang / 12);
    var lebarBalokInduk = document.getElementById("lebarBalokInduk").value = Math.round(tinggiBalokInduk / 2);
    var tinggiBalokAnak = document.getElementById("tinggiBalokAnak").value = Math.round(bentang / 15);
    var lebarBalokAnak = document.getElementById("lebarBalokAnak").value = Math.round(tinggiBalokAnak / 2);
    var ukuranKolom = document.getElementById("ukuranKolom").value = `${Math.round(lebarBalokInduk + 10)} x ${Math.round(lebarBalokInduk + 10)}`;
    var tebalPlat = document.getElementById("tebalPlat").value = Math.round(bentang/40);
}
