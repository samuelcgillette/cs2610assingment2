console.log('home.js has been loaded and requested correctly')

async function runPython() {
    try {
        const response = await fetch('http://localhost:5000/run-script');
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error("Error calling Python API:", error);
    }
}

runPython();