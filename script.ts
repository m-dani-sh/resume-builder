const form = document.getElementById("cvForm") as HTMLFormElement;
const resumePage = document.getElementById("cvPage") as HTMLElement;
const resumePhoto = document.getElementById("cvPhoto") as HTMLImageElement;
const resumeName = document.getElementById("cvName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("cvEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("cvPhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("cvEducation") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("cvWorkExperience") as HTMLParagraphElement;
const resumeCertificate = document.getElementById("cvCertificate") as HTMLParagraphElement;
const resumeLanguages = document.getElementById("cvLanguages") as HTMLParagraphElement;
const resumeSkills = document.getElementById("cvSkills") as HTMLUListElement;

const skillInput = document.getElementById("skills") as HTMLTextAreaElement;
const skillList = document.getElementById("skillList") as HTMLUListElement;

// Add skill to the list
function addSkill(): void {
    const skillValue = skillInput.value.trim();

    if (skillValue === "") {
        alert("Please enter a skill.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = skillValue;
    skillList.appendChild(listItem);

    skillInput.value = '';
}

// Function to generate the resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const certificateName = (document.getElementById("certificate-name") as HTMLInputElement).value;
    const organizationName = (document.getElementById("organization-name") as HTMLInputElement).value;

    const photoInput = document.getElementById("profilePic") as HTMLInputElement;
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    const photoURL = photoFile ? URL.createObjectURL(photoFile) : '';

    // Set personal details
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;

    // Set education details
    resumeEducation.textContent = `Degree: ${degree}, College: ${education}`;

    // Set work experience
    resumeWorkExperience.textContent = workExperience;

    // Set certificate details
    resumeCertificate.textContent = `${certificateName} from ${organizationName}`;

    // Collect and set languages (no dynamic fields)
    const language1 = (document.getElementById("language1") as HTMLInputElement).value.trim();
    const language2 = (document.getElementById("language2") as HTMLInputElement).value.trim();
    const languages = [language1, language2].filter(lang => lang !== "");
    resumeLanguages.textContent = `Languages: ${languages.join(", ")}`;

    // Clear existing skills in resumeSkills before adding new ones
    resumeSkills.innerHTML = '';
    const skills = document.querySelectorAll('#skillList li');
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill.textContent || '';
        resumeSkills.appendChild(listItem);
    });

    // Set the profile photo
    if (photoURL) {
        resumePhoto.src = photoURL;
        resumePhoto.alt = name;
    }

    // Toggle visibility of resume block
    const cvContainer = document.getElementById("cvContainer");
    if (cvContainer) {
        cvContainer.style.display = 'block';  // Show the resume
    }

    // Hide the form
    const form = document.getElementById("cvForm");
    if (form) {
        form.style.display = 'none';  // Hide the form
    }
}


// Event listener for form submit
form.addEventListener("submit", generateResume);

// Optional: Add event listeners for dynamic button actions
document.getElementById("addSkillBtn")?.addEventListener("click", addSkill);
