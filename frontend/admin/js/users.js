let allUsers = [];
let editingUserId = null;

async function loadUsers() {
    try {
        const response = await fetch("../../../backend/data/users.json");
        allUsers = await response.json();

        const tableBody = document.getElementById("usersTableBody");

        if (!tableBody) {
            return;
        }

        tableBody.innerHTML = "";

        allUsers.forEach((user, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.userId || index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${formatRole(user.role)}</td>
                <td>${user.status || "Active"}</td>

                <td>
                    <button type="button" onclick="editUser('${user.userId}')">
                        Edit
                    </button>

                    <button type="button" onclick="deleteUser('${user.userId}')">
                        Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error loading users:", error);
    }
}

function formatRole(role) {
    if (!role) {
        return "Unknown";
    }

    return role.charAt(0).toUpperCase() + role.slice(1);
}

function editUser(userId) {
    const user = allUsers.find((item) => item.userId === userId);

    if (!user) {
        alert("User not found.");
        return;
    }

    editingUserId = userId;

    document.getElementById("editUserId").value = user.userId || "";
    document.getElementById("editName").value = user.name || "";
    document.getElementById("editEmail").value = user.email || "";
    document.getElementById("editPhone").value = user.phone || "";
    document.getElementById("editRole").value = user.role || "";

    const editSection = document.getElementById("editUserSection");
    if (editSection) {
        editSection.style.display = "block";
        editSection.scrollIntoView({ behavior: "smooth" });
    }
}

const editForm = document.getElementById("editUserForm");

if (editForm) {
    editForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const user = allUsers.find((item) => item.userId === editingUserId);

        if (!user) {
            alert("User not found.");
            return;
        }

        user.name = document.getElementById("editName").value;
        user.email = document.getElementById("editEmail").value;
        user.phone = document.getElementById("editPhone").value;
        user.role = document.getElementById("editRole").value;

        loadUsers();

        const editSection = document.getElementById("editUserSection");
        if (editSection) {
            editSection.style.display = "none";
        }

        alert("User information updated successfully.");
        editingUserId = null;
    });
}

function cancelEdit() {
    editingUserId = null;

    const editSection = document.getElementById("editUserSection");
    if (editSection) {
        editSection.style.display = "none";
    }
}

function deleteUser(userId) {
    const confirmed = confirm(
        "⚠️ WARNING!\n\n" +
        "Are you sure you want to delete this user?\n" +
        "This action cannot be undone."
    );

    if (!confirmed) {
        return;
    }

    allUsers = allUsers.filter((user) => user.userId !== userId);
    loadUsers();

    alert("User deleted successfully.");
}

loadUsers();