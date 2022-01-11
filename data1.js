import { Tabel } from "./index.mjs";

const tabel = new Tabel({
    kolom: ["Nama", "Email", "Gender", "Pekerjaan"],
    data: [
        ["Adyan", "madyanr@gmail.com", "Pria", "Karyawan Swasta"],
        ["Mala", "komalafashion.id@gmail.com", "Wanita", "Ibu Rumah Tangga"],
        ["Sugi", "sugiarti@gmail.com", "Wanita", "Guru"]
    ]
});

const app = document.getElementById("app");
tabel.render(app);