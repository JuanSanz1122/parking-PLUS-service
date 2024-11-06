function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Cerrar el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

// Función para descargar el archivo y cambiar el texto del botón
function downloadFile(format) {
    switch (format) {
        case 'pdf':
            downloadPDF();
            break;
        case 'word':
            downloadWord();
            break;
        case 'excel':
            downloadExcel();
            break;
    }
    // Cambiar el texto del botón de descarga
    document.getElementById('mainButton').textContent = "Descargar " + format.charAt(0).toUpperCase() + format.slice(1);
    document.getElementById('dropdownMenu').style.display = 'none'; // Cierra el menú
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const tabla = document.getElementById("tabla");

    html2canvas(tabla).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 190; // Ancho en mm
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let position = 10; // Posición inicial en el PDF

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        pdf.save("Historial de Uso.pdf");
    });
}

function downloadWord() {
    const table = document.getElementById("tabla").outerHTML;
    const blob = new Blob([table], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Historial de Uso.doc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function downloadExcel() {
    const table = document.getElementById("tabla").outerHTML;
    const blob = new Blob([table], { type: "application/vnd.ms-excel" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Historial de Uso.xls";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}