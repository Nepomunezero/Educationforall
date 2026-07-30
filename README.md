# Education For All

## Project Overview

**Education For All** is an educational platform designed to make learning resources more accessible to students, teachers, and translators.

The platform allows users to access educational books and reading materials, read resources, and translate educational content between **English and Kinyarwanda**.

The project is currently implemented as a frontend prototype using HTML, CSS, and JavaScript and is designed to be deployed using **GitHub Pages**.

---

## Main Features

The platform includes the following features:

* User login
* Role-based navigation
* Administrator dashboard
* Student dashboard
* Teacher dashboard
* Translator dashboard
* Educational resource library
* Search interface
* Resource filtering
* Book and PDF access
* Book reading interface
* Translation workspace
* Translation submission interface
* English ↔ Kinyarwanda language switching
* User profile interface
* Administrator user management
* Administrator resource management
* Popular resources display

### User Roles

The system supports four roles:

* **Student**
* **Teacher**
* **Translator**
* **Administrator**

Students, teachers, and translators currently share the same user interface because the main purpose of the platform is to access educational resources and translate educational content.

---

# Technologies Used

The project uses:

* **HTML5** — Structure of the web pages
* **CSS3** — Styling and responsive design
* **JavaScript** — Interactivity and functionality
* **JSON** — Data storage for the prototype
* **Font Awesome** — Icons
* **Git & GitHub** — Version control and repository hosting
* **GitHub Pages** — Website deployment

---

# Project Structure

```text
EducationForAll/
│
├── index.html
│
├── frontend/
│   │
│   ├── admin/
│   │   ├── images/
│   │   ├── js/
│   │   ├── dashboard.html
│   │   ├── resources.html
│   │   ├── settings.html
│   │   └── users.html
│   │
│   ├── users/
│   │   ├── dashboard.html
│   │   ├── library.html
│   │   ├── profile.html
│   │   └── translator.html
│   │
│   └── shared/
│       ├── css/
│       │   ├── admin.css
│       │   ├── style.css
│       │   └── users.css
│       │
│       ├── js/
│       │   └── main.js
│       │
│       └── login.html
│
├── backend/
│   └── data/
│
└── README.md
```

---

# Requirements

To run the project locally, you need:

* A computer
* Git
* Visual Studio Code
* A modern web browser such as Google Chrome, Microsoft Edge, or Firefox
* The **Live Server** extension for Visual Studio Code

No Node.js installation is required for the current frontend version.

---

# Getting the Project

## Step 1: Clone the Repository

Open a terminal and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

For example:

```bash
git clone https://github.com/Nepomunezero/Educationforall.git
```

---

## Step 2: Enter the Project Directory

Move into the project folder:

```bash
cd EducationForAll
```

---

## Step 3: Open the Project in Visual Studio Code

Run:

```bash
code .
```

Alternatively, open Visual Studio Code manually and select:

**File → Open Folder → EducationForAll**

---

# Running the Project Locally

## Step 4: Install Live Server

In Visual Studio Code:

1. Open the **Extensions** panel.
2. Search for **Live Server**.
3. Install the extension.
4. Open the project.

---

## Step 5: Start the Application

Open:

```text
frontend/shared/login.html
```

Right-click inside the file and select:

**Open with Live Server**

The application will open in your web browser.

The login page is the starting point of the application.

---

# GitHub Pages Deployment

The project can be deployed using GitHub Pages.

## Step 1: Push the Project to GitHub

After making changes, run:

```bash
git add .
```

Then:

```bash
git commit -m "Update Education For All"
```

Then:

```bash
git push origin main
```

---

## Step 2: Enable GitHub Pages

On GitHub:

1. Open the **EducationForAll** repository.
2. Click **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch.
6. Select `/ (root)` as the folder.
7. Click **Save**.

GitHub Pages will then publish the project.

---

## Step 3: Open the Website

The website will normally be available at:

```text
https://YOUR-USERNAME.github.io/EducationForAll/
```

The root `index.html` automatically redirects visitors to:

```text
frontend/shared/login.html
```

Therefore, users only need to open the main GitHub Pages URL.

---

# Login and Role Navigation

The login page is located at:

```text
frontend/shared/login.html
```

The current prototype uses the **Login As** selection to demonstrate role-based navigation.

### Administrator

Select:

```text
Administrator
```

and click **Login**.

The system opens:

```text
frontend/admin/dashboard.html
```

### Student

Select:

```text
Student
```

and click **Login**.

The system opens:

```text
frontend/users/dashboard.html
```

### Teacher

Select:

```text
Teacher
```

and click **Login**.

The system opens:

```text
frontend/users/dashboard.html
```

### Translator

Select:

```text
Translator
```

and click **Login**.

The system opens:

```text
frontend/users/dashboard.html
```

---

# User Interface

After logging in as a student, teacher, or translator, users can access:

### Dashboard

Provides an overview of the educational platform.

### Library

Users can:

* Browse books and PDFs
* Search resources
* Filter resources
* Read resources
* Download resources
* Translate resources

### Translator

Provides a translation workspace with:

* Source text
* Editable translated text
* Translation submission

### Profile

Provides the user's profile information and profile management interface.

---

# Language Switching

The user interface supports:

* **English**
* **Kinyarwanda**

Users can switch between the two languages using the language selector available on the user pages.

The language switching functionality changes the interface text between English and Kinyarwanda.

---

# Administrator Interface

The administrator can access the following sections:

### Dashboard

Displays information about:

* Students
* Teachers
* Translators
* Learning resources

### Users

Provides an interface for managing registered users.

### Resources

Provides an interface for managing educational resources.

### Settings

Provides the system settings interface.

---

# Educational Resources

Educational resources are organized under:

```text
backend/data/
```

The project can contain educational materials such as:

* Novels
* Reading books
* Educational PDFs
* Learning materials

Resources can then be presented through the platform's library interface.

---

# Translation

The translation functionality is one of the main purposes of the platform.

Users can:

1. Access educational content.
2. Read the source content.
3. Enter the translation into the editable translation field.
4. Submit the translated content.

The main language pair currently supported is:

**English ↔ Kinyarwanda**

---

# Troubleshooting

## The login page does not open

Make sure you are opening:

```text
frontend/shared/login.html
```

when running the project locally.

If using Live Server, right-click the file and select:

**Open with Live Server**

---

## CSS is not loading

Check that the CSS files are located in:

```text
frontend/shared/css/
```

The folder should contain:

```text
admin.css
style.css
users.css
```

Also check that the HTML files reference the correct relative paths.

---

## JavaScript is not working

Check that the JavaScript files are located in:

```text
frontend/shared/js/
```

Open the browser developer tools:

```text
Right Click → Inspect → Console
```

and check for JavaScript errors.

---

## GitHub Pages is not displaying the project

Check that:

1. `index.html` exists in the root of the repository.
2. GitHub Pages is enabled.
3. The publishing source is set to the `main` branch.
4. The publishing folder is set to `/ (root)`.
5. Your latest changes have been pushed to GitHub.

---

# Current Limitations

This version is primarily a **frontend prototype**.

The current role-based login is implemented for demonstration purposes. Selecting a role determines which dashboard the user is redirected to.

The project does not currently implement secure server-side authentication.

Permanent database operations and backend functionality are planned for future development.

---

# Future Improvements

Future versions can include:

* Secure authentication
* Database integration
* Password hashing
* Permanent user registration
* Persistent profile management
* Backend resource management
* Translation storage
* Translation review and approval
* Book download management
* User activity tracking
* System ratings and reviews
* Advanced search
* Production deployment

---

# Project Status

**Status: On Track**

## Key Achievements

* Developed frontend pages for administrators and users
* Developed administrator dashboard
* Developed user dashboard
* Developed resource library
* Developed translation workspace
* Implemented English/Kinyarwanda language switching
* Developed user profile interface
* Developed user management interface
* Developed resource management interface
* Completed system diagrams
* Completed use case and structure diagrams
* Prepared the project for GitHub Pages deployment

## Challenges

* Ambiguity in the features to include
* Understanding the interconnectedness of different parts of the system
* Delivery constraints and meeting deadline requirements

## Next Steps

* Structure the backend
* Modify and debug the frontend
* Integrate the frontend with the backend
* Deploy the platform
* Improve authentication and data persistence

---

# Author

**Jean Nepo Munezero**

**Project:** Education For All

---

# Purpose

This project was developed as part of an academic project with the goal of improving access to educational resources and supporting the translation of learning materials into Kinyarwanda.
