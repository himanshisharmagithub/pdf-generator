console.log("jsPDF loaded:", window.jspdf); // Debugging check

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const text = document.getElementById("pdfContent").value || "Default PDF Content";
    
    // Add text to the PDF
    doc.text(text, 20, 30);

    // Get the image file input
    const imgInput = document.getElementById("imageInput");
    const file = imgInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const imgData = event.target.result; // Get base64 image data
            doc.addImage(imgData, "JPEG", 20, 50, 100, 100); // (x, y, width, height)

            // Save the PDF after adding the image
            doc.save("generated.pdf");
        };

        reader.readAsDataURL(file); // Convert image to base64
    } else {
        // If no image is uploaded, save the PDF with just text
        doc.save("generated.pdf");
    }
}
