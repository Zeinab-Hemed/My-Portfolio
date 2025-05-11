// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.getElementById('name').textContent = "Zeinab H. Swaleh - Web Developer";
    document.getElementById('title').textContent = "Aspiring Software Engineer & Data Expert";
});

// Modify CSS styles dynamically
document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = "#e6f7ff"; // Light blue background
    document.getElementById('name').style.color = "#2c3e50"; // Dark blue text
    document.getElementById('title').style.fontSize = "1.5rem"; // Increase title font size
});

// Add or remove an element dynamically
document.getElementById('toggleElementBtn').addEventListener('click', function () {
    const existingNote = document.getElementById('dynamicNote');

    if (existingNote) {
        existingNote.remove(); // Remove if already there
    } else {
        const newNote = document.createElement('p');
        newNote.id = 'dynamicNote';
        newNote.textContent = "🎉 Hello! This note was added using JavaScript.";
        newNote.style.color = "green";
        newNote.style.fontWeight = "bold";
        newNote.style.textAlign = "center";
        newNote.style.marginTop = "20px";

        document.body.appendChild(newNote);
    }
});
