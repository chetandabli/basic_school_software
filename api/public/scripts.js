document.addEventListener('DOMContentLoaded', () => {
    fetchStudents();
    fetchMarks();
  });
  
  async function fetchStudents() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
  
    try {
      const response = await fetch('/api/students');
      const students = await response.json();
      students.forEach((student) => {
        const li = document.createElement('li');
        const addButton = document.createElement('button');
        addButton.textContent = 'Add Marks';
        addButton.onclick = () => showAddMarksForm(student._id, student.name);
        li.textContent = `Name: ${student.name}, Class: ${student.class}, Section: ${student.section}`;
        li.appendChild(addButton);
        studentsList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }

  async function showAddMarksForm(studentId, name) {
    const marksForm = document.createElement('div');
    marksForm.classList.add('marks-form');
  
    marksForm.innerHTML = `
      <h2>Add Mark for ${name}</h2>
      <input type="text" id="subject" placeholder="Subject" required>
      <input type="number" id="marksObtained" placeholder="Marks Obtained" required>
      <label for="isBacklog">Is Backlog?</label>
      <input type="checkbox" id="isBacklog">
      <button onclick="addMark('${studentId}')">Add Mark</button>
    `;
  
    const studentsList = document.getElementById('studentsList');
    studentsList.appendChild(marksForm);
  }
  
  async function fetchMarks() {
    const marksList = document.getElementById('marksList');
    marksList.innerHTML = '';
  
    try {
      const response = await fetch('/api/marks');
      const marks = await response.json();
  
      marks.forEach((mark) => {
        const li = document.createElement('li');
        const isBacklogText = mark.isBacklog ? 'Backlog' : 'Pass';
        li.textContent = `Subject: ${mark.subject}, Marks Obtained: ${mark.marksObtained}, Status: ${isBacklogText}`;
        marksList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching marks:', error);
    }
  }
  
  async function addStudent() {
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const section = document.getElementById('section').value;
  
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, classx: studentClass, section }),
      });
      console.log(response)
      if (response.ok) {
        fetchStudents();
        document.getElementById('name').value = '';
        document.getElementById('class').value = '';
        document.getElementById('section').value = '';
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }
  
  async function addMark(studentId) {
    const subject = document.getElementById('subject').value;
    const marksObtained = document.getElementById('marksObtained').value;
    const isBacklog = document.getElementById('isBacklog').checked;
  
    try {
      const response = await fetch('/api/marks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ student: studentId, subject, marksObtained, isBacklog }),
      });
  
      if (response.ok) {
        fetchMarks();
        const marksForm = document.querySelector('.marks-form');
        marksForm.parentNode.removeChild(marksForm);
      }
    } catch (error) {
      console.error('Error adding mark:', error);
    }
  }
  
  