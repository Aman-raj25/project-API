# 🎓 Student Manager API

A full-stack web application for managing student records with full CRUD functionality. Built using **Node.js**, **Express**, and **MySQL**, with a simple **HTML/CSS/JavaScript** frontend.

---

## 📌 API Endpoints

| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| GET    | `/api/students`        | Fetch all students      |
| POST   | `/api/students`        | Add a new student       |
| PUT    | `/api/students/:id`    | Update a student by ID  |
| DELETE | `/api/students/:id`    | Delete a student by ID  |

---

### 📥 Sample POST Request

```http
POST /api/students
Content-Type: application/json

{
  "name": "Aman Raj",
  "roll_number": "22CS101",
  "email": "aman@example.com",
  "course": "B.Tech CSE"
}
```

---

## 🧩 Database Setup & Integration

### Step 1: Create MySQL Database

```sql
CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  roll_number VARCHAR(20),
  email VARCHAR(100),
  course VARCHAR(100)
);
```

## ⚙️ How to Run the Server

### Prerequisites
- Node.js
- MySQL

### Steps

```bash
# Navigate to backend folder
cd api-backend

# Install dependencies
npm install

# Start server
node index.js
```

You should see:
```
✅ Connected to MySQL database
📍 Server runs on: http://localhost:3000
```

---

## 🌐 How to Run the Frontend (Optional)

- Navigate to the `frontend/` folder.
- Open `index.html` directly in your browser.
- Or use VS Code's **Live Server** extension for automatic refresh.

### Frontend Features
- ➕ Add new students  
- ✏️ Edit and delete students  
- 👀 View student list  
- 🔔 Toast-style success/error notifications  

---

## 🧪 How to Test the API

### Testing Tools

- **Jest** for unit, integration, and API testing
- **supertest** for endpoint testing

### Run All Tests with Coverage

```bash
npm test -- --coverage
```

### Sample Tests Include

- ✅ Unit tests for controller logic
- 🔄 Integration tests for DB operations
- 🌐 API endpoint tests for request/response validation

### Screenshot Example (Add Yours)

```
![Test Coverage](/image/image.png)
```

✅ Ensure minimum 70%+ coverage (target reached)

---

## 🧪 How to Test API with Postman

### 🔹 GET All Students
- **Method:** `GET`  
- **URL:** `http://localhost:3000/api/students`

### 🔹 POST - Add Student
- **Method:** `POST`  
- **URL:** `http://localhost:3000/api/students`  
- **Body:** `raw → JSON`

```json
{
  "name": "Akash",
  "roll_number": "22CS999",
  "email": "akash@example.com",
  "course": "AI/ML"
}
```

### 🔹 PUT - Update Student
- **Method:** `PUT`  
- **URL:** `http://localhost:3000/api/students/1`  
- **Body:** `raw → JSON`

```json
{
  "name": "Aman Updated",
  "roll_number": "22CS888",
  "email": "aman@update.com",
  "course": "Data Science"
}
```

### 🔹 DELETE - Remove Student
- **Method:** `DELETE`  
- **URL:** `http://localhost:3000/api/students/1`

---

## 📂 Project Structure

```
project-API/
├── api-backend/
│   ├── controllers/
│   ├── routes/
│   ├── db.js
│   ├── index.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md ✅
```

---

## ✍️ Author

**Aman Raj**  
📚 CSE Student | 🌐 Web Dev Enthusiast | 🤖 ML Explorer  
🔗 [GitHub – Aman-raj25](https://github.com/Aman-raj25)
