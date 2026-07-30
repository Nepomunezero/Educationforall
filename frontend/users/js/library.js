async function loadResourceCount() {

    try {

        const response = await fetch(
            "../../../backend/data/books.json"
        );

        const resources = await response.json();

        document.getElementById("resourceCount").textContent =
            resources.length;

    } catch (error) {

        console.error("Error loading resources:", error);

        document.getElementById("resourceCount").textContent = "0";
    }
}

loadResourceCount();