const days = [
  ["Coordinate plane, distance, and midpoint", "Angle vocabulary and angle relationships", "G-GPE.4, G-GPE.7, G-CO.1", "Solving equations; coordinate pairs"],
  ["Slope, parallel/perpendicular lines, and angle structure", "Transversals and algebra with angle pairs", "G-GPE.5, G-CO.9", "Distance/midpoint; angle equations"],
  ["Translations and reflections on graph paper/Desmos", "Rotations and dilations", "G-CO.2, G-CO.3, G-CO.5, G-SRT.1", "Slope; angle pairs"],
  ["Rigid motion and congruence as same size/same shape", "Triangle classification and interior/exterior angle sums", "G-CO.6, G-CO.7, G-CO.10", "Transformations; multi-step equations"],
  ["Triangle congruence shortcuts as informal reasoning", "Using congruent triangles to find missing parts", "G-CO.7, G-CO.8", "Weekly assessment: coordinate geometry, angles, transformations, congruence"],
  ["Triangle inequalities and side-angle relationships", "Midsegments, medians, and coordinate triangle problems", "G-CO.10, G-GPE.4, G-GPE.7", "Congruence; coordinate formulas"],
  ["Parallelograms and special quadrilaterals", "Coordinate tests for quadrilaterals", "G-CO.11, G-GPE.4, G-GPE.5", "Slope; distance; systems-lite"],
  ["Similarity transformations and scale factor", "AA similarity and proportional reasoning", "G-SRT.1, G-SRT.2, G-SRT.3", "Quadrilaterals; proportions"],
  ["Similar triangles in diagrams", "Similarity in coordinate and real contexts", "G-SRT.5, G-MG.1", "Scale factor; solving proportions"],
  ["Right-triangle similarity", "Geometric mean relationships as extension/support", "G-SRT.4, G-SRT.5", "Weekly assessment: quadrilaterals, similarity, proportions"],
  ["Pythagorean theorem and converse", "Distance formula and radical simplification", "G-SRT.8, G-GPE.7", "Right triangles; simplifying radicals"],
  ["Special right triangles", "Mixed right-triangle problem solving", "G-SRT.8", "Pythagorean theorem; coordinate distance"],
  ["Sine, cosine, and tangent ratios", "Finding sides and angles with right-triangle trig", "G-SRT.6, G-SRT.7, G-SRT.8", "Special right triangles; calculator checks"],
  ["Angle of elevation/depression", "Trig modeling with diagrams and Desmos", "G-SRT.8, G-MG.1, G-MG.3", "Trig ratios; similarity"],
  ["Right-triangle trig synthesis", "Area using trigonometry; Law of Sines/Cosines as enrichment only", "G-SRT.8, G-SRT.9", "Weekly assessment: right triangles and trig"],
  ["Circle vocabulary and equations of circles", "Graphing circles and completing the square as preview", "G-C.1, G-GPE.1", "Distance formula; equations"],
  ["Central angles, inscribed angles, arcs", "Angle relationships in circles", "G-C.2, G-C.5", "Circle equations; angle pairs"],
  ["Chords, secants, and tangents", "Segment relationships and algebra in circles", "G-C.2, G-C.3", "Inscribed angles; solving equations"],
  ["Arc length and sector area", "Radian measure as Trig readiness", "G-C.5", "Circle segments; proportions"],
  ["Area of polygons and composite figures", "Coordinate area and perimeter", "G-GPE.7, G-MG.1", "Weekly assessment: circles, sectors, coordinate area"],
  ["Surface area of prisms, cylinders, pyramids, cones, and spheres", "Volume and cross-sections", "G-GMD.1, G-GMD.3, G-GMD.4", "Area; formulas"],
  ["Scale effects on length, area, and volume", "Density and design constraints", "G-GMD.3, G-MG.2, G-MG.3", "Similarity; volume"],
  ["Modeling with geometry: choose assumptions and formulas", "Desmos-supported modeling task", "G-MG.1, G-MG.2, G-MG.3", "Scale; area/volume"],
  ["Coordinate geometry synthesis: lines, distances, circles", "Algebra 2 bridge: conics and transformations", "G-GPE.1, G-GPE.4, G-GPE.5, G-GPE.7", "Systems; circle equations"],
  ["Mixed review: transformations, congruence, similarity", "Mixed review: right-triangle trig", "G-CO, G-SRT", "Cumulative quiz set 1"],
  ["Mixed review: circles and measurement", "Mixed review: coordinate geometry and modeling", "G-C, G-GMD, G-GPE, G-MG", "Weekly assessment: cumulative synthesis"],
  ["Required capstone modeling work session", "Capstone presentations and rubric-based scoring", "G-MG.1, G-MG.2, G-MG.3", "Targeted readiness check"],
  ["Final readiness review", "Short written final and Algebra 2/Trig transition", "Course synthesis", "Final assessment"]
].map((day, index) => ({
  number: index + 1,
  lessonA: day[0],
  lessonB: day[1],
  standards: day[2],
  spiral: day[3]
}));

const mastery = [
  ["Coordinate geometry", "Distance, midpoint, slope, parallel/perpendicular lines", "G-GPE.4, G-GPE.5, G-GPE.7", "Days 1-2", "Weekly 1, Weekly 5, Final"],
  ["Angle relationships", "Algebraic angle solving", "G-CO.1, G-CO.9", "Days 1-2", "Weekly 1, Weekly 5, Final"],
  ["Transformations and congruence", "Same size/same shape, informal reasoning", "G-CO.2, G-CO.3, G-CO.5, G-CO.6, G-CO.7, G-CO.8", "Days 3-5", "Weekly 1, Weekly 5, Final"],
  ["Triangles and quadrilaterals", "Properties using informal reasoning", "G-CO.10, G-CO.11", "Days 4-7", "Weekly 2, Weekly 5, Final"],
  ["Similarity", "Scale factors and proportional reasoning", "G-SRT.1, G-SRT.2, G-SRT.3, G-SRT.5", "Days 8-10", "Weekly 2, Weekly 3, Final"],
  ["Right-triangle trigonometry", "Pythagorean theorem, trig ratios, trig area", "G-SRT.6, G-SRT.7, G-SRT.8, G-SRT.9", "Days 11-15", "Weekly 3, Weekly 5, Final"],
  ["Circles", "Equations, arcs, angles, chords, tangents, sectors", "G-C.1, G-C.2, G-C.3, G-C.5, G-GPE.1", "Days 16-19", "Weekly 4, Weekly 5, Final"],
  ["Measurement", "Area, surface area, volume, scale effects", "G-GMD.1, G-GMD.3, G-GMD.4", "Days 20-22", "Weekly 5, Final"],
  ["Modeling", "Design constraints and geometric modeling", "G-MG.1, G-MG.2, G-MG.3", "Days 23, 27", "Capstone, Final"],
  ["Algebra readiness", "Embedded prerequisite skills", "Graphing, slope, systems, radicals, proportions", "Daily", "Daily quizzes, weekly checks, final"]
];

const gradebook = [
  ["Problem sets/classwork", "20%", "Core work, diagrams, corrections, support and extension lanes."],
  ["Exit slips", "10%", "Fast evidence used for next-day reteach decisions."],
  ["Daily quizzes", "25%", "Non-weekly-assessment days; 80% is mastery."],
  ["Weekly assessments", "20%", "Days 5, 10, 15, 20, and 26; 25 minutes."],
  ["Required capstone", "10%", "Rubric-scored modeling product and presentation."],
  ["Short written final", "15%", "Day 28 final after targeted review."]
];

const checkpoints = [
  ["Day 5", "Coordinate geometry, angles, transformations, informal congruence"],
  ["Day 10", "Quadrilaterals, similarity, proportional reasoning, right-triangle similarity"],
  ["Day 15", "Pythagorean theorem, special right triangles, right-triangle trigonometry"],
  ["Day 20", "Circle equations, arcs/angles, sectors, coordinate area"],
  ["Day 26", "Cumulative synthesis across the course"],
  ["Day 27", "Required capstone"],
  ["Day 28", "Final review and short written final"]
];

const flow = [
  ["Warm-up", "Just-in-time prerequisite practice."],
  ["Concept intro", "Visual, graph-paper, or Desmos-based launch."],
  ["Instructional problems", "Teacher model, guided practice, partner problem, error analysis."],
  ["Problem set", "Core, support, extension, and spiral practice."],
  ["Exit slip", "Three-item check for understanding."],
  ["Assessment", "Daily quiz or weekly cumulative check."]
];

const taskTemplates = {
  regular: [
    ["warmup", "Complete the warm-up"],
    ["lesson-a", "Complete Lesson A notes and practice"],
    ["lesson-b", "Complete Lesson B notes and practice"],
    ["problem-set", "Submit the problem set"],
    ["exit-slip", "Submit the exit slip"],
    ["quiz", "Complete the daily quiz"]
  ],
  checkpoint: [
    ["warmup", "Complete the warm-up"],
    ["review", "Complete the cumulative review set"],
    ["corrections", "Check corrections from recent quizzes"],
    ["assessment", "Complete the weekly assessment"]
  ],
  capstone: [
    ["plan", "Choose or confirm your modeling question"],
    ["work", "Build the model and show calculations"],
    ["presentation", "Present your capstone"],
    ["reflection", "Submit your reflection"]
  ],
  final: [
    ["review", "Complete the final readiness review"],
    ["formula-check", "Review formulas and calculator setup"],
    ["final", "Complete the short written final"],
    ["reflection", "Submit the Algebra 2/Trig readiness reflection"]
  ]
};

const resourceTypes = [
  ["notes", "Notes overview", "One-page guide to today’s big ideas, vocabulary, quick reference, and common mistakes."],
  ["hybrid-notes", "Hybrid notes", "Two-page guided note-taking handout with cloze notes, outline notes, and active learning."],
  ["handout", "Student handout", "Notes, examples, and student-facing directions."],
  ["practice", "Problem set", "Core practice plus support and extension options."],
  ["exit-slip", "Exit slip", "Daily check for understanding."],
  ["desmos", "Desmos activity", "Exploration or visual check when available."],
  ["assessment", "Quiz/checkpoint", "Daily quiz, weekly assessment, capstone rubric, or final."],
  ["answers", "Answer release", "Selected answers or scoring notes after class."]
];

let selectedDay = Number(localStorage.getItem("geometrySelectedDay") || 1);
const progress = JSON.parse(localStorage.getItem("geometryProgress") || "{}");

const resourceLinks = {
  // Replace these examples as materials are ready.
  "day-01-hybrid-notes": "materials/day-01/hybrid-notes.pdf",
  "day-01-handout": "materials/day-01/handout.pdf",
  "day-01-practice": "materials/day-01/problem-set.pdf",
  "day-01-exit-slip": "materials/day-01/exit-slip.pdf",
  "day-01-assessment": "materials/day-01/quiz.pdf",
  "day-02-hybrid-notes": "materials/day-02/hybrid-notes.pdf",
  "day-02-handout": "materials/day-02/handout.pdf",
  "day-02-practice": "materials/day-02/problem-set.pdf",
  "day-02-exit-slip": "materials/day-02/exit-slip.pdf",
  "day-02-assessment": "materials/day-02/quiz.pdf",
  "day-03-hybrid-notes": "materials/day-03/hybrid-notes.pdf",
  "day-03-handout": "materials/day-03/handout.pdf",
  "day-03-practice": "materials/day-03/problem-set.pdf",
  "day-03-exit-slip": "materials/day-03/exit-slip.pdf",
  "day-03-assessment": "materials/day-03/quiz.pdf",
  "day-04-hybrid-notes": "materials/day-04/hybrid-notes.pdf",
  "day-04-handout": "materials/day-04/handout.pdf",
  "day-04-practice": "materials/day-04/problem-set.pdf",
  "day-04-exit-slip": "materials/day-04/exit-slip.pdf",
  "day-04-assessment": "materials/day-04/quiz.pdf",
  "day-05-hybrid-notes": "materials/day-05/hybrid-notes.pdf",
  "day-05-handout": "materials/day-05/handout.pdf",
  "day-05-practice": "materials/day-05/problem-set.pdf",
  "day-05-exit-slip": "materials/day-05/exit-slip.pdf",
  "day-05-assessment": "materials/day-05/quiz.pdf",
  "day-06-hybrid-notes": "materials/day-06/hybrid-notes.pdf",
  "day-06-handout": "materials/day-06/handout.pdf",
  "day-06-practice": "materials/day-06/problem-set.pdf",
  "day-06-exit-slip": "materials/day-06/exit-slip.pdf",
  "day-06-assessment": "materials/day-06/quiz.pdf",
  "day-07-hybrid-notes": "materials/day-07/hybrid-notes.pdf",
  "day-07-handout": "materials/day-07/handout.pdf",
  "day-07-notes": "materials/day-07/notes-overview.pdf",
  "day-07-practice": "materials/day-07/problem-set.pdf",
  "day-07-exit-slip": "materials/day-07/exit-slip.pdf",
  "day-07-assessment": "materials/day-07/quiz.pdf",
  "day-08-hybrid-notes": "materials/day-08/hybrid-notes.pdf",
  "day-08-handout": "materials/day-08/handout.pdf",
  "day-08-notes": "materials/day-08/guided-notes.pdf",
  "day-08-practice": "materials/day-08/problem-set.pdf",
  "day-08-exit-slip": "materials/day-08/exit-slip.pdf",
  "day-08-assessment": "materials/day-08/quiz.pdf",
  "day-09-handout": "materials/day-09/handout.pdf",
  "day-09-notes": "materials/day-09/notes-overview.pdf",
  "day-09-hybrid-notes": "materials/day-09/hybrid-notes.pdf",
  "day-09-practice": "materials/day-09/problem-set.pdf",
  "day-09-exit-slip": "materials/day-09/exit-slip.pdf",
  "day-09-assessment": "materials/day-09/quiz.pdf",
  "day-10-handout": "materials/day-10/handout.pdf",
  "day-10-notes": "materials/day-10/notes-overview.pdf",
  "day-10-hybrid-notes": "materials/day-10/hybrid-notes.pdf",
  "day-10-practice": "materials/day-10/problem-set.pdf",
  "day-10-exit-slip": "materials/day-10/exit-slip.pdf",
  "day-10-assessment": "materials/day-10/quiz.pdf",
  "day-11-hybrid-notes": "materials/day-11/hybrid-notes.pdf",
  "day-11-handout": "materials/day-11/handout.pdf",
  "day-11-practice": "materials/day-11/problem-set.pdf",
  "day-11-exit-slip": "materials/day-11/exit-slip.pdf",
  "day-11-assessment": "materials/day-11/quiz.pdf",
  "day-12-hybrid-notes": "materials/day-12/hybrid-notes.pdf",
  "day-12-handout": "materials/day-12/handout.pdf",
  "day-12-practice": "materials/day-12/problem-set.pdf",
  "day-12-exit-slip": "materials/day-12/exit-slip.pdf",
  "day-12-assessment": "materials/day-12/quiz.pdf",
  "day-13-hybrid-notes": "materials/day-13/hybrid-notes.pdf",
  "day-13-handout": "materials/day-13/handout.pdf",
  "day-13-practice": "materials/day-13/problem-set.pdf",
  "day-13-exit-slip": "materials/day-13/exit-slip.pdf",
  "day-13-assessment": "materials/day-13/quiz.pdf",
  "day-14-hybrid-notes": "materials/day-14/hybrid-notes.pdf",
  "day-14-handout": "materials/day-14/handout.pdf",
  "day-14-practice": "materials/day-14/problem-set.pdf",
  "day-14-exit-slip": "materials/day-14/exit-slip.pdf",
  "day-14-assessment": "materials/day-14/quiz.pdf",
  // "day-01-desmos": "https://www.desmos.com/calculator/...",
};

const dayList = document.querySelector("#day-list");
const daySelect = document.querySelector("#day-select");
const searchInput = document.querySelector("#search-input");

function isCheckpoint(day) {
  return [5, 10, 15, 20, 26].includes(day);
}

function assessmentLabel(day) {
  if (isCheckpoint(day)) return "Weekly assessment";
  if (day === 27) return "Required capstone";
  if (day === 28) return "Short written final";
  return "Daily quiz";
}

function taskSetForDay(dayNumber) {
  if (isCheckpoint(dayNumber)) return taskTemplates.checkpoint;
  if (dayNumber === 27) return taskTemplates.capstone;
  if (dayNumber === 28) return taskTemplates.final;
  return taskTemplates.regular;
}

function dayTitle(day) {
  return `Day ${day.number}: ${day.lessonA.split(":")[0]}`;
}

function renderDayOptions() {
  daySelect.innerHTML = days
    .map((day) => `<option value="${day.number}">Day ${day.number}</option>`)
    .join("");
  daySelect.value = String(selectedDay);
}

function renderDayList() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = days.filter((day) => {
    const haystack = `${day.number} ${day.lessonA} ${day.lessonB} ${day.standards} ${day.spiral}`.toLowerCase();
    return haystack.includes(query);
  });

  dayList.innerHTML = filtered
    .map((day) => {
      const done = progress[`day-${day.number}`] ? "done" : "";
      const active = day.number === selectedDay ? "active" : "";
      return `
        <button class="day-card ${done} ${active}" data-day="${day.number}">
          <strong>Day ${day.number}</strong>
          <span>${day.lessonA}</span>
          <span>${assessmentLabel(day.number)}</span>
        </button>
      `;
    })
    .join("");
}

function renderSelectedDay() {
  const day = days[selectedDay - 1];
  document.querySelector("#today-title").textContent = `Day ${day.number}`;
  document.querySelector("#today-subtitle").textContent = `${day.lessonA}; ${day.lessonB}`;
  document.querySelector("#day-badge").textContent = `Day ${day.number}`;
  document.querySelector("#lesson-title").textContent = `${day.lessonA} / ${day.lessonB}`;
  document.querySelector("#lesson-a").textContent = day.lessonA;
  document.querySelector("#lesson-b").textContent = day.lessonB;
  document.querySelector("#standards").textContent = day.standards;
  document.querySelector("#spiral").textContent = day.spiral;
  document.querySelector("#assessment-chip").textContent = assessmentLabel(day.number);
  document.querySelector("#assessment-note").textContent =
    isCheckpoint(day.number)
      ? "Weekly cumulative check replaces the daily quiz."
      : day.number === 27
        ? "Capstone work and presentation are scored with a rubric."
        : day.number === 28
          ? "Short written final follows targeted review."
          : "Daily quiz with current content, spiral review, error analysis, and challenge.";

  document.querySelector("#flow-list").innerHTML = flow
    .map(([title, detail], index) => {
      const key = `day-${day.number}-flow-${index}`;
      const checked = progress[key] ? "checked" : "";
      return `
        <div class="flow-item">
          <label>
            <input type="checkbox" data-progress="${key}" ${checked} />
            <span><strong>${title}</strong><p>${detail}</p></span>
          </label>
        </div>
      `;
    })
    .join("");

  renderTasks(day);
  renderResources(day);

  daySelect.value = String(selectedDay);
  localStorage.setItem("geometrySelectedDay", String(selectedDay));
  renderProgressSummary();
}

function renderTasks(day) {
  const tasks = taskSetForDay(day.number);
  const completed = tasks.filter(([key]) => progress[`day-${day.number}-task-${key}`]).length;
  document.querySelector("#task-count").textContent = `${completed} of ${tasks.length} complete`;
  document.querySelector("#task-list").innerHTML = tasks
    .map(([key, label]) => {
      const progressKey = `day-${day.number}-task-${key}`;
      const checked = progress[progressKey] ? "checked" : "";
      return `
        <label class="task-item">
          <input type="checkbox" data-progress="${progressKey}" ${checked} />
          <span>${label}</span>
        </label>
      `;
    })
    .join("");
}

function renderResources(day) {
  document.querySelector("#resource-list").innerHTML = resourceTypes
    .filter(([key]) => {
      const resourceKey = `day-${String(day.number).padStart(2, "0")}-${key}`;
      return Boolean(resourceLinks[resourceKey]);
    })
    .map(([key, title, detail]) => {
      const resourceKey = `day-${String(day.number).padStart(2, "0")}-${key}`;
      const href = resourceLinks[resourceKey];
      const released = window.releasedResources?.[resourceKey] === true;
      const state = released ? "Available" : "Locked";
      const link = href && released
        ? `<a class="resource-button" href="${href}" target="_blank" rel="noopener">Open</a>`
        : `<button class="resource-button disabled" type="button" disabled>Locked</button>`;
      return `
        <article class="resource-card">
          <div>
            <span class="resource-state">${state}</span>
            <strong>${title}</strong>
            <p>${detail}</p>
          </div>
          ${link}
        </article>
      `;
    })
    .join("");
}

function renderProgressSummary() {
  const completedDays = days.filter((day) => progress[`day-${day.number}`]).length;
  const flowDone = days.flatMap((day) => flow.map((_, index) => progress[`day-${day.number}-flow-${index}`])).filter(Boolean).length;
  const taskDone = days
    .flatMap((day) => taskSetForDay(day.number).map(([key]) => progress[`day-${day.number}-task-${key}`]))
    .filter(Boolean).length;
  const totalFlow = days.length * flow.length;
  const totalTasks = days.reduce((sum, day) => sum + taskSetForDay(day.number).length, 0);
  const percent = Math.round(((completedDays + flowDone + taskDone) / (days.length + totalFlow + totalTasks)) * 100);
  document.querySelector("#progress-summary").textContent = `${percent}% complete`;
}

function renderMastery() {
  document.querySelector("#mastery-list").innerHTML = mastery
    .map(([title, detail, standards, first, evidence]) => `
      <article class="mastery-card">
        <strong>${title}</strong>
        <p>${detail}</p>
        <div class="meta-row">
          <span>${standards}</span>
          <span>${first}</span>
          <span>${evidence}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderAssessments() {
  document.querySelector("#gradebook-list").innerHTML = gradebook
    .map(([name, weight, note]) => `<div class="stack-item"><strong>${name} (${weight})</strong><p>${note}</p></div>`)
    .join("");
  document.querySelector("#checkpoint-list").innerHTML = checkpoints
    .map(([day, focus]) => `<div class="stack-item"><strong>${day}</strong><p>${focus}</p></div>`)
    .join("");
}

document.addEventListener("click", (event) => {
  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    selectedDay = Number(dayButton.dataset.day);
    renderSelectedDay();
    renderDayList();
  }

  const navButton = event.target.closest("[data-view]");
  if (navButton) {
    document.querySelectorAll(".nav-button").forEach((button) => button.classList.remove("active"));
    navButton.classList.add("active");
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
    document.querySelector(`#${navButton.dataset.view}-view`).classList.add("active-view");
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "day-select") {
    selectedDay = Number(event.target.value);
    renderSelectedDay();
    renderDayList();
  }

  if (event.target.matches("[data-progress]")) {
    progress[event.target.dataset.progress] = event.target.checked;
    const dayFlowKeys = flow.map((_, index) => `day-${selectedDay}-flow-${index}`);
    const dayTaskKeys = taskSetForDay(selectedDay).map(([key]) => `day-${selectedDay}-task-${key}`);
    progress[`day-${selectedDay}`] = [...dayFlowKeys, ...dayTaskKeys].every((key) => progress[key]);
    localStorage.setItem("geometryProgress", JSON.stringify(progress));
    renderDayList();
    renderTasks(days[selectedDay - 1]);
    renderProgressSummary();
  }
});

searchInput.addEventListener("input", renderDayList);

document.querySelector("#reset-progress").addEventListener("click", () => {
  Object.keys(progress).forEach((key) => delete progress[key]);
  localStorage.setItem("geometryProgress", JSON.stringify(progress));
  renderDayList();
  renderSelectedDay();
});

renderDayOptions();
renderDayList();
renderSelectedDay();
renderMastery();
renderAssessments();
