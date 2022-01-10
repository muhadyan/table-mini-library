class Tabel {
    constructor(init) {
        this.init = init;
    }

    bikinHeader(header) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        header.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    bikinBadan(badan) {
        let open = "<tbody>";
        let close = "</tbody>";
        badan.forEach((d) => {
            open += `
                <tr>
                    <td>${d[0]}</td>
                    <td>${d[1]}</td>
                    <td>${d[2]}</td>
                    <td>${d[3]}</td>
                </tr>
            `;
        });

        return open + close;
    }

    render(element) {
        let tabel =
            "<table class='table table-hover'>" +
            this.bikinHeader(this.init.kolom) +
            this.bikinBadan(this.init.data) +
            "</table>";
        element.innerHTML = tabel;
    }
}

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