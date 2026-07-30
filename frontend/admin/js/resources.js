async function loadResourceCount() {
    try {
        const response = await fetch(
            "../../../backend/data/books.json"
        );

        const resources = await response.json();

        document.getElementById("resourceCount").textContent =
            resources.length;

    } catch (error) {
        console.error("Could not load resources:", error);

        document.getElementById("resourceCount").textContent = "0";
    }
}

loadResourceCount();