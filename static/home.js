console.log('home.js has been loaded and requested correctly')
const fileInput = document.getElementById('fileInput');
const button = document.getElementById('uploadButton');
const preview = document.getElementById('preview');

button.addEventListener('click', async () => {

    let img = fileInput.files[0]
    const formData = new FormData();
    formData.append('image', img);
    try {
        const response = await fetch('http://144.39.117.57:5000/run-script', {
            method: 'POST',
            body: formData
        });
        const result = await response.blob();
        console.log("Response from Python API:", result);
        preview.src = URL.createObjectURL(result);

    } catch (error) {
        console.error("Error calling Python API:", error);
    }
})

