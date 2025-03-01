const cards = [
  {
    label: "Shop Ease",
    title: "Fix Mobile Button Issue",
    description:
      "Fix the issue where the mobile menu button is not working properly.",
  },
  {
    label: "Soft Pay",
    title: "Add Pay Success Modal",
    description:
      "Implement a modal that appears when a payment is successfully completed.",
  },
  {
    label: "Meta",
    title: "Add new reaction 👋",
    description: "Introduce a new 'wave' reaction to the social feed.",
  },
  {
    label: "Programming Hero",
    title: "Fix Video Loading Issue",
    description: "Resolve buffering issues on video lessons.",
  },
  {
    label: "Google LLC",
    title: "Integrate AI search",
    description: "Enhance search functionality with AI-driven suggestions.",
  },
];

const today = new Date().toDateString();
document.getElementById("date").innerText = today;

const taskCards = document.getElementById("task-cards");
const taskCounterElem = document.getElementById("task-assigned");
const completedTaskCounter = document.getElementById("completed-tasks");
const activityLog = document.getElementById("activity-log");

// Render tasks
taskCards.innerHTML = cards
  .map(
    (card, index) => `
  <div class="rounded-xl bg-[#F4F7FF] p-5 w-full max-w-md shadow-lg">
    <p class="mb-2 text-sm font-medium text-gray-600 bg-white px-5 py-3 rounded-lg">${card.label}</p>
    <h3 class="mb-3 text-lg font-semibold text-gray-800">${card.title}</h3>
    <p class="mb-6 text-gray-400 bg-white px-5 py-5 rounded-lg text-center">${card.description}</p>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400">Deadline</p>
        <p class="text-sm font-medium text-gray-600">${today}</p>
      </div>
      <button class="complete-btn bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition" data-index="${index}">
        Complete
      </button>
    </div>
  </div>
`
  )
  .join("");

let taskCounter = cards.length;
taskCounterElem.innerText = taskCounter;
completedTaskCounter.innerText = 0;

// Attach event listeners AFTER elements are added to the DOM
document.querySelectorAll(".complete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const index = this.dataset.index;
    this.textContent = "Completed";
    this.disabled = true; // Disable only after clicking
    this.classList.remove("bg-blue-500", "hover:bg-blue-700");
    this.classList.add("bg-gray-400", "cursor-not-allowed");

    taskCounter -= 1;
    taskCounterElem.innerText = taskCounter;
    completedTaskCounter.innerText =
      parseInt(completedTaskCounter.innerText) + 1;

    activityLog.innerHTML += `
      <div class="px-4 py-3 rounded-lg bg-white shadow-sm">
        <p class="text-sm text-gray-800"><strong>Task completed:</strong> ${cards[index].title}</p>
        <p class="text-xs text-gray-500">${today}</p>
      </div>
    `;

    if (taskCounter === 0) {
      setTimeout(
        () => alert("🎉 Congratulations! You have completed all your tasks."),
        500
      );
    }
  });
});

// Theme random color change
document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

// Clear history
document.getElementById("clear-history").addEventListener("click", () => {
  activityLog.innerHTML = "";
  completedTaskCounter.innerText = "23";
});
