const programs = {
  "training-barcelona-8th": {
    label: "In-person intensive",
    title: "8th Training in Barcelona",
    image: "assets/programs/training-barcelona-8th.png",
    alt: "Poster for the 8th in-person training in Barcelona",
    meta: ["English", "Barcelona", "In person", "4 intensive days"],
    description: [
      "This embodied training is informed by polyvagal theory, the enactive approach to cognition, the somatic marker hypothesis, and relational and object-based thinking. It invites participants into expressive, sensitive, and embodied processes where body, perception, and materiality remain in constant dialogue.",
      "Across four intensive days, the work explores shame as an embodied, silent, and inhibiting experience alongside memory, trauma, post-witnessing, and insight-in-action.",
      "Participants engage experiential practices that activate the expressive and symbolic potential of animated objects as pathways for resilience and reconstruction, grounded in enaction, embodied cognition, emotional process, and nervous system regulation."
    ]
  },
  "course-online-english-17th": {
    label: "Online course",
    title: "17th Puppet Therapy Course Online, English Version",
    image: "assets/programs/course-online-english-17th.png",
    alt: "Poster for the 17th Puppet Therapy Course online in English",
    meta: ["Online", "English", "Independent academic training"],
    description: [
      "The International Course in Puppet Therapy is a pioneering program grounded in the NeuroPuppetry Method™, developed by Andrea Markovits in collaboration with Polo Fernández.",
      "The method is a neuro-informed therapeutic approach that uses the animation of puppets and objects to activate somatic memory and mind-body integration through action itself.",
      "This model can influence bodily and emotional responses, promote regulation, and facilitate connection with traumatic experience within a safe, creative, and therapeutic context. The course is part of an independent academic training created in 2017 and shared with more than 500 students to date."
    ]
  },
  "diplomado-online-spanish": {
    label: "Online diploma",
    title: "Diplomado Puppet Therapy Online, Spanish Version",
    image: "assets/programs/diplomado-online-spanish.png",
    alt: "Poster for the online Puppet Therapy diploma in Spanish",
    meta: ["Online", "Spanish", "Pioneering diploma"],
    description: [
      "This diploma is the Spanish-language version of the international training rooted in the NeuroPuppetry Method™. It offers a clear entry into the school’s embodied and neuro-informed approach to therapeutic animated forms.",
      "Through the animation of puppets and objects, the work activates somatic memory and mind-body integration in action. The process supports regulation and connection with traumatic experience within a safe, creative, and therapeutic frame.",
      "It belongs to the school’s independent academic training, founded in 2017, and continues the same core research into animated forms, nervous system response, and symbolic practice."
    ]
  },
  "school-annual-barcelona": {
    label: "Annual in-person program",
    title: "Puppet Therapy School",
    image: "assets/programs/school-annual-barcelona.png",
    alt: "Poster for the annual Puppet Therapy School program in Barcelona",
    meta: ["Barcelona", "Monthly 3-day encounters", "Online sessions + mentoring"],
    description: [
      "Puppet Therapy School is an author-led independent training program created by the founders of the NeuroPuppetry Method™.",
      "The annual in-person program in Barcelona offers an embodied and continuous learning process centred on the animation of puppets and objects as relational and therapeutic mediators.",
      "Monthly three-day in-person encounters form the core of the program, supported by online sessions and individual mentoring. The rhythm is designed for sustained practice, reflection, and integration throughout the year, with direct and constant presence from the creators of the method."
    ]
  },
  "workshop-things-that-breathe": {
    label: "Workshop",
    title: "Things That Breathe",
    image: "assets/programs/workshop-things-that-breathe.png",
    alt: "Poster for the workshop Things That Breathe",
    meta: [
      "Online",
      "English",
      "8 experiential sessions",
      "May 6 to June 24, 2026",
      "Wednesdays, 18:00–19:30 Spain time"
    ],
    description: [
      "Things That Breathe: An Emotional and Material Geography of Maternal Memories is facilitated by Andrea Markovits and structured as eight experiential online sessions.",
      "The workshop is a creative and therapeutic group process for young and adult women interested in exploring inner landscapes from a creative, sensitive, and relational perspective.",
      "The cycle proposes a journey into affective memory related to the maternal not through linear biography, but through symbols, materials, animated forms, gesture, mark-making, silence, breath, and dialogue. The maternal, whether present or absent, loving or ambiguous, lived or transmitted, is given the possibility to be animated, materialised, and re-signified."
    ]
  },
  "workshop-puppet-humor-therapy": {
    label: "Workshop",
    title: "Puppet, Humor & Therapy",
    image: "assets/programs/workshop-puppet-humor-therapy.png",
    alt: "Poster for the workshop Puppet, Humor and Therapy",
    meta: [
      "English",
      "Online",
      "Open to all adults",
      "5 sessions",
      "June 2, 9, 13, 23, 30",
      "18:00–19:30 Barcelona time"
    ],
    description: [
      "Created and led by Andy Markovits, this workshop moves between the poetic, the playful, and the provocative to explore humor and puppetry as tools for expression, resilience, and transformation.",
      "Based on the NeuroPuppetry Method™, the workshop offers an experiential introduction for newcomers as well as for participants who want to deepen their creative and therapeutic work.",
      "The format is open to all adults and does not require previous experience, making it an accessible entry point into the school’s embodied language of puppetry, emotional expression, and symbolic action."
    ]
  }
};

const modal = document.getElementById("program-modal");
const modalDialog = modal?.querySelector(".modal__dialog");
const modalImage = document.getElementById("program-modal-image");
const modalLabel = document.getElementById("program-modal-label");
const modalTitle = document.getElementById("program-modal-title");
const modalMeta = document.getElementById("program-modal-meta");
const modalDescription = document.getElementById("program-modal-description");
const compactHeaderOffset = 56;
const contactSection = document.getElementById("contact");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("primary-nav");
const mobileMenuBreakpoint = window.matchMedia("(max-width: 760px)");

let lastFocusedElement = null;

function syncHeaderState() {
  document.body.classList.toggle("header-compact", window.scrollY > compactHeaderOffset);
}

function closeMobileNav() {
  document.body.classList.remove("mobile-nav-open");
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
}

function toggleMobileNav() {
  if (!menuToggle || !mobileMenuBreakpoint.matches) {
    return;
  }

  const isOpen = document.body.classList.toggle("mobile-nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function syncMobileNavState() {
  if (!mobileMenuBreakpoint.matches) {
    closeMobileNav();
  }
}

function getFocusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')].filter(
    (element) => !element.hasAttribute("hidden")
  );
}

function trapFocus(event) {
  if (!modalDialog || event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableElements(modalDialog);
  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function closeModal({ restoreFocus = true } = {}) {
  if (!modal) {
    return;
  }

  modal.hidden = true;
  document.body.classList.remove("no-scroll");
  document.removeEventListener("keydown", handleModalKeydown);

  if (restoreFocus && lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function handleModalKeydown(event) {
  if (event.key === "Escape") {
    closeModal();
    return;
  }

  trapFocus(event);
}

function openModal(programId, trigger) {
  const program = programs[programId];
  if (!program || !modal || !modalDialog || !modalImage || !modalLabel || !modalTitle || !modalMeta || !modalDescription) {
    return;
  }

  lastFocusedElement = trigger;
  modalLabel.textContent = program.label;
  modalTitle.textContent = program.title;
  modalImage.src = program.image;
  modalImage.alt = program.alt;

  modalMeta.replaceChildren();
  program.meta.forEach((item) => {
    const pill = document.createElement("span");
    pill.textContent = item;
    modalMeta.appendChild(pill);
  });

  modalDescription.replaceChildren();
  program.description.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    modalDescription.appendChild(node);
  });

  modal.hidden = false;
  document.body.classList.add("no-scroll");
  document.addEventListener("keydown", handleModalKeydown);
  requestAnimationFrame(() => modalDialog.focus());
}

document.addEventListener("click", (event) => {
  const menuTrigger = event.target.closest(".menu-toggle");
  if (menuTrigger) {
    event.preventDefault();
    toggleMobileNav();
    return;
  }

  const trigger = event.target.closest("[data-program-trigger]");
  if (trigger) {
    closeMobileNav();
    const programId = trigger.getAttribute("data-program-trigger");
    if (programId && programs[programId]) {
      event.preventDefault();
      openModal(programId, trigger);
    }
  }

  const navLink = event.target.closest(".site-nav a");
  if (navLink && mobileMenuBreakpoint.matches) {
    closeMobileNav();
  }

  const modalContactTrigger = event.target.closest("[data-modal-contact]");
  if (modalContactTrigger) {
    event.preventDefault();
    closeModal({ restoreFocus: false });

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#contact");
    }
  }

  if (event.target.closest("[data-modal-close]")) {
    closeModal();
  }

  if (
    document.body.classList.contains("mobile-nav-open") &&
    siteNav &&
    !event.target.closest(".site-nav") &&
    !event.target.closest(".menu-toggle")
  ) {
    closeMobileNav();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("mobile-nav-open")) {
    closeMobileNav();
  }
});

window.addEventListener("scroll", syncHeaderState, { passive: true });
window.addEventListener("resize", syncMobileNavState);
syncHeaderState();
syncMobileNavState();

const formFrame = document.querySelector("[data-contact-form]");
const formSrc = document.body.dataset.formSrc;

if (formFrame) {
  if (formSrc && /^https?:\/\//.test(formSrc) && !formSrc.includes("REPLACE_WITH_GOOGLE_FORM_EMBED_URL")) {
    formFrame.src = formSrc;
  } else {
    formFrame.srcdoc = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <style>
            body {
              margin: 0;
              min-height: 100vh;
              display: grid;
              place-items: center;
              padding: 32px;
              background: #0f0b0d;
              color: #f4e9ed;
              font-family: Arial, sans-serif;
              text-align: center;
            }

            div {
              max-width: 520px;
              padding: 28px;
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 24px;
              background: rgba(255, 255, 255, 0.04);
            }

            strong {
              display: block;
              margin-bottom: 12px;
              font-size: 20px;
            }

            p {
              margin: 0;
              line-height: 1.6;
              color: #d9c3cb;
            }
          </style>
        </head>
        <body>
          <div>
            <strong>Google Form placeholder</strong>
            <p>Replace the body data-form-src value in index.html with the final Google Form embed URL to load the live form here.</p>
          </div>
        </body>
      </html>
    `;
  }
}