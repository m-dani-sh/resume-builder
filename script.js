var _a;
var form = document.getElementById("cvForm");
var resumePage = document.getElementById("cvPage");
var resumePhoto = document.getElementById("cvPhoto");
var resumeName = document.getElementById("cvName");
var resumeEmail = document.getElementById("cvEmail");
var resumePhone = document.getElementById("cvPhone");
var resumeEducation = document.getElementById("cvEducation");
var resumeWorkExperience = document.getElementById("cvWorkExperience");
var resumeCertificate = document.getElementById("cvCertificate");
var resumeLanguages = document.getElementById("cvLanguages");
var resumeSkills = document.getElementById("cvSkills");
var skillInput = document.getElementById("skills");
var skillList = document.getElementById("skillList");
// Add skill to the list
function addSkill() {
    var skillValue = skillInput.value.trim();
    if (skillValue === "") {
        alert("Please enter a skill.");
        return;
    }
    var listItem = document.createElement("li");
    listItem.textContent = skillValue;
    skillList.appendChild(listItem);
    skillInput.value = '';
}
// Function to generate the resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission
    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var certificateName = document.getElementById("certificate-name").value;
    var organizationName = document.getElementById("organization-name").value;
    var photoInput = document.getElementById("profilePic");
    var photoFile = photoInput.files ? photoInput.files[0] : null;
    var photoURL = photoFile ? URL.createObjectURL(photoFile) : '';
    // Set personal details
    resumeName.textContent = name;
    resumeEmail.textContent = "Email: ".concat(email);
    resumePhone.textContent = "Phone: ".concat(phone);
    // Set education details
    resumeEducation.textContent = "Degree: ".concat(degree, ", College: ").concat(education);
    // Set work experience
    resumeWorkExperience.textContent = workExperience;
    // Set certificate details
    resumeCertificate.textContent = "".concat(certificateName, " from ").concat(organizationName);
    // Collect and set languages (no dynamic fields)
    var language1 = document.getElementById("language1").value.trim();
    var language2 = document.getElementById("language2").value.trim();
    var languages = [language1, language2].filter(function (lang) { return lang !== ""; });
    resumeLanguages.textContent = "Languages: ".concat(languages.join(", "));
    // Clear existing skills in resumeSkills before adding new ones
    resumeSkills.innerHTML = '';
    var skills = document.querySelectorAll('#skillList li');
    skills.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill.textContent || '';
        resumeSkills.appendChild(listItem);
    });
    // Set the profile photo
    if (photoURL) {
        resumePhoto.src = photoURL;
        resumePhoto.alt = name;
    }
    // Toggle visibility of resume block
    var cvContainer = document.getElementById("cvContainer");
    if (cvContainer) {
        cvContainer.style.display = 'block'; // Show the resume
    }
    // Hide the form
    var form = document.getElementById("cvForm");
    if (form) {
        form.style.display = 'none'; // Hide the form
    }
}
// Event listener for form submit
form.addEventListener("submit", generateResume);
// Optional: Add event listeners for dynamic button actions
(_a = document.getElementById("addSkillBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addSkill);
