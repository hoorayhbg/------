function number(){ 
    let zp = document.getElementById('zp').value;
    let days = document.getElementById('days').value;
    let chasi = document.getElementById('chasi').value;
    document.getElementById('sum').innerText = +zp + +days + +chasi;
}
