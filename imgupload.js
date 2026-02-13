const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
fileInput.addEventListener('change', function() {
    preview.src = URL.createObjectURL(fileInput.files[0]);
});

