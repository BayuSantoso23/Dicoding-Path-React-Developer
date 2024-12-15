const submitAction = document.getElementById('formDataDiri');

function menampilkanData(event) {
  const inputNama = document.getElementById('inputNama').value;
  const inputDomisili = document.getElementById('inputDomisili').value;
  const hiddenMessage = `Halo, ${inputNama}. Bagaimana cuacanya di ${inputDomisili}?`;

  document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
  event.preventDefault();
}

submitAction.addEventListener('submit', menampilkanData);
