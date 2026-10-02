const portfolioData = {
    projects: [
        {
            title: "Project 1",
            description: "A travel blog website.",
            techused: ["HTML", "CSS", "JavaScript"],
        },
        {
            title: "Project 2",
            description: "A National Park website.",
            techused: ["HTML", "CSS", "JavaScript"],
        }
    ],
    testimonials: [
        {
            name: "Carl Johnson",
            role: "Project Manager",
            testimonial: "Elvis is a highly skilled developer who consistently delivers high-quality work. His attention to detail and problem-solving abilities are exceptional."
        },
        {
            name: "Emmanuel Joe",
            role: "Marketing Director",
            testimonial: "Elvis is a talented developer who has a keen eye for design and user experience. He is always willing to go the extra mile to ensure the success of any project."
        }
    ]
};

const projectsContainer = document.getElementById("projects-container");
const testimonialsContainer = document.getElementById("testimonials-container");

function renderProjects() {
    for (let i = 0; i < portfolioData.projects.length; i++) {
        const project = portfolioData.projects[i];
        const card = document.createElement("div");
        card.classList.add("card", "project-card");
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Tech Used: ${project.techused.join(", ")}</p>
        `;
        projectsContainer.appendChild(card);
    }
}

function renderTestimonials() {
    for (let i = 0; i < portfolioData.testimonials.length; i++) {
        const testimonial = portfolioData.testimonials[i];
        const card = document.createElement("div");
        card.classList.add("card", "testimonial-card");
        card.innerHTML = `
            <p>"${testimonial.testimonial}"</p>
            <h4>${testimonial.name}</h4>
            <p>${testimonial.role}</p>
        `;
        testimonialsContainer.appendChild(card);
    }
}

renderProjects();
renderTestimonials();