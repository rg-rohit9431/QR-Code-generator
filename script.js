const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.wrapper .right .fullQr');
const qrContainer2 = document.querySelector('.wrapper .right .smallQr');

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});


downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.wrapper .right .fullQr img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}
function generateQRCode(){
    qrContainer.innerHTML = "";
    qrContainer2.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:100,
        width:100,
        colorLight:"#fff",
        colorDark:"#000",
    });
    new QRCode(qrContainer2, {
        text:qrText.value,
        height:100,
        width:100,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
