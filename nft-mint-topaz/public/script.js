document.addEventListener('DOMContentLoaded', async () => {
 console.log('Loading UI...');

 setTimeout(() => {
   document.querySelector('.skeleton').style.display = 'none';
   document.getElementById('content').style.display = 'block';
   console.log('App is ready!');
 }, 2000);

 document.getElementById('mintButton').addEventListener('click', async () => {
   const response = await fetch('/api/mint', { method: 'POST' });
   const data = await response.json();
   alert(data.message);
 });
});

