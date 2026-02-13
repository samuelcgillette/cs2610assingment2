console.log('home.js has been loaded and requested correctly')
const inputNumber = document.getElementById('input-number');
const display = document.getElementById('display-number');

inputNumber.addEventListener('input', async () => {
    const data = { number: inputNumber.value };
    try {
        const response = await fetch('http://144.39.117.57:5000/run-script', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        display.textContent = `From Python: ${result.number}`;
    } catch (error) {
        console.error("Error calling Python API:", error);
    }
});