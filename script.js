async function fetchPreview() {
    const linkInput = document.getElementById('linkInput').value;
    const preview = document.getElementById('preview');

    // Example API endpoint - replace `YOUR_API_KEY` with an actual key if needed
    const apiUrl = `https://api.linkpreview.net/?key=3b5a0dd9125f3d8429bec9211b93f6c6&q=${encodeURIComponent(linkInput)}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            preview.innerHTML = `<p>Error: ${data.error}</p>`;
            preview.style.display = 'block';
            return;
        }

        // Construct preview HTML
        preview.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <img src="${data.image}" alt="Preview image">
            <a href="${data.url}" target="_blank">${data.url}</a>
        `;
        preview.style.display = 'block';
    } catch (error) {
        preview.innerHTML = `<p>Failed to fetch preview</p>`;
        preview.style.display = 'block';
        console.error("Error fetching preview:", error);
    }
}
