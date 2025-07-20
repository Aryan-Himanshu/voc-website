document.getElementById('verifyBtn').addEventListener('click', verifyStudent);

function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) {
    showToast('⚠️ Please enter a valid Email or ID');
    return;
  }

  showSpinner(true);
  resultBox.innerHTML = "";

  setTimeout(() => {
    const student = getMockStudentData(); // replace with real API call in future

    resultBox.innerHTML = generateStudentCard(student);
    showSpinner(false);
    showToast('✅ Certificate data loaded.');
  }, 1200);
}

function getMockStudentData() {
  return {
    name: "Aryan Himanshu",
    email: "himanshuaryan05@.com",
    mobile: "*770500356",
    domain: "Web Development",
    college: "SoIT, RGPV",
    start: "03 July 2025",
    duration: "1 Month",
    photo: "https://via.placeholder.com/130",
    assignments: [true, false, true, true],
    certificate: "#"
  };
}

function generateStudentCard(student) {
  return `
    <div class="card">
      <img src="${student.photo}" alt="Student Photo" />
      <h3>${student.name}</h3>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Mobile:</strong> ${student.mobile}</p>
      <p><strong>Domain:</strong> ${student.domain}</p>
      <p><strong>College:</strong> ${student.college}</p>
      <p><strong>Start Date:</strong> ${student.start}</p>
      <p><strong>Duration:</strong> ${student.duration}</p>
      <h4>Assignment Status</h4>
      <div class="assignment-status">
        ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
      </div>
      <p>Status: Completed</p>
      <a href="${student.certificate}" target="_blank">View Certificate</a>
    </div>
  `;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function showSpinner(show) {
  const spinner = document.querySelector('.spinner');
  spinner.classList.toggle('hidden', !show);
}
