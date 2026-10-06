// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// Close the mobile menu after picking a link
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Don't allow event dates in the past
const dateInput = document.querySelector('input[name="event-date"]');
if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
