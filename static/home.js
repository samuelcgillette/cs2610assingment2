console.log('home.js has been loaded and requested correctly')
const button = document.getElementById('run-script');
const randomNumberDiv = document.getElementById('random-number');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:5000/run-script');
        const data = await response.json();
        console.log(data); 
        randomNumberDiv.textContent = `Random Number from Python: ${data.randomNumber}`;
    } catch (error) {
        console.error("Error calling Python API:", error);
    }
});
