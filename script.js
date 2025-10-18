const el = document.getElementById('ip');
fetch("https://api.ipify.org/?format=json")
  .then(response => response.json())
  .then(data => {
    el.textContent = data.ip;
})
.catch(error => {
  el.textContent = 'anon (nice opsex)';
});