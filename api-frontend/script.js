const apiURL = 'http://localhost:3000/api/students';

const form = document.getElementById('studentForm');
const list = document.getElementById('studentList');
const toast = document.getElementById('toast');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const student = {
    name: form.name.value,
    roll_number: form.roll_number.value,
    email: form.email.value,
    course: form.course.value
  };

  const id = form.studentId.value;

  try {
    if (id) {
      // Update
      await fetch(`${apiURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      showToast("Student updated successfully!");
    } else {
      // Create
      await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      showToast("Student added successfully!");
    }

    form.reset();
    form.studentId.value = '';
    loadStudents();
  } catch (err) {
    showToast("Something went wrong!", true);
  }
});

async function loadStudents() {
  const response = await fetch(apiURL);
  const students = await response.json();
  list.innerHTML = '';

  students.forEach(student => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${student.name}</strong> (${student.roll_number}) - ${student.course}<br>
      ${student.email}
      <div class="actions">
        <button onclick='editStudent(${JSON.stringify(student)})'>Edit</button>
        <button class="delete-btn" onclick='deleteStudent(${student.id})'>Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function editStudent(student) {
  form.name.value = student.name;
  form.roll_number.value = student.roll_number;
  form.email.value = student.email;
  form.course.value = student.course;
  form.studentId.value = student.id;
}

async function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    await fetch(`${apiURL}/${id}`, { method: 'DELETE' });
    showToast("Student deleted successfully!");
    loadStudents();
  }
}

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.style.backgroundColor = isError ? '#dc3545' : '#28a745';
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}

loadStudents();
