async function loadDashboardStatistics() {
    try {
        const usersResponse = await fetch("../../../backend/data/users.json");
        const users = await usersResponse.json();

        const booksResponse = await fetch("../../../backend/data/books.json");
        const books = await booksResponse.json();

        const students = users.filter(
            user => user.role === "student"
        );

        const teachers = users.filter(
            user => user.role === "teacher"
        );

        const translators = users.filter(
            user => user.role === "translator"
        );

        document.getElementById("studentCount").textContent =
            students.length;

        document.getElementById("teacherCount").textContent =
            teachers.length;

        document.getElementById("translatorCount").textContent =
            translators.length;

        document.getElementById("resourceCount").textContent =
            books.length;

    } catch (error) {
        console.error("Unable to read database files:", error);
    }
}

loadDashboardStatistics();