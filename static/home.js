console.log('home.js has been loaded and requested correctly')
const fileInput = document.getElementById('fileInput');
const button = document.getElementById('uploadButton');
const preview = document.getElementById('preview');

button.addEventListener('click', async () => {

    let img = URL.createObjectURL(fileInput.files[0]);
    console.log(fileInput.files[0])
    console.log(img)
    let data = {image:img}
    try {
        const response = await fetch('http://144.39.117.57:5000/run-script', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Response from Python API:", result);
        preview.src = result.received_data;

    } catch (error) {
        console.error("Error calling Python API:", error);
    }
})

