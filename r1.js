// HTML elements
// const form = document.getElementById('resumeForm');
// const preview = document.getElementById('resumePreview');

// Event listener for form submission
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); 
  

//   const name = document.getElementById('nameInput').value;
//   const email = document.getElementById('emailInput').value;
//   const experience = document.getElementById('experienceInput').value;
//   const education = document.getElementById('educationInput').value;


//   const resumeHTML = `
//     <h2>${name}</h2>
//     <p>Email: ${email}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//   `;
  

//   preview.innerHTML = resumeHTML;
// });


import resumeData from './resumeData.json';

// HTML elements
const form = document.getElementById('resumeForm');
const preview = document.getElementById('resumePreview');

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh

  // Get form values
  const { nameInput, emailInput, experienceInput, educationInput } = form.elements;
  const name = nameInput.value;
  const email = emailInput.value;
  const experience = experienceInput.value;
  const education = educationInput.value;

  // Update the resume data
  resumeData.name = name;
  resumeData.email = email;
  resumeData.experience = experience;
  resumeData.education = education;

  // Generate the resume HTML
  const resumeHTML = `
    <h2>${resumeData.name}</h2>
    <p>Email: ${resumeData.email}</p>
    <h3>Experience</h3>
    <p>${resumeData.experience}</p>
    <h3>Education</h3>
    <p>${resumeData.education}</p>
  `;

  // Update the preview element with the generated resume HTML
  preview.innerHTML = resumeHTML;
});
// {
//     "name": "",
//     "email": "",
//     "experience": "",
//     "education": ""
//   }
  