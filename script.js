async function convert() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  if (!amount) return alert('Entre un montant !');

  // Taux fictifs
  const rate = from === 'EUR' && to === 'USD' ? 1.07 :
               from === 'USD' && to === 'EUR' ? 0.93 : 1;

  const result = (amount * rate).toFixed(2);
  document.getElementById('result').innerText =
    `${amount} ${from} = ${result} ${to}`;
}
