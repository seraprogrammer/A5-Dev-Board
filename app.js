const cards = [
  {
    label: "Shop Ease",
    title: "Fix Mobile Button Issue",
    description: "Fix the issue where the mobile menu button is not working properly.",
  },
  {
    label: "Soft Pay",
    title: "Add Pay Success Modal",
    description: "Implement a modal that appears when a payment is successfully completed.",
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

const date = document.getElementById("date");
const today = new Date();
date.innerHTML = today.toDateString();

const getCards = document.getElementById("task-cards");

// Render all tasks
getCards.innerHTML = cards
  .map((card, index) => {
    return `
    <div class="rounded-xl bg-[#F4F7FF] p-5 w-full max-w-md shadow-lg">
      <p class="mb-2 text-sm font-medium text-gray-600 bg-white px-5 py-3 rounded-lg">${card.label}</p>
      <h3 class="mb-3 text-lg font-semibold text-gray-800">${card.title}</h3>
      <p class="mb-6 text-gray-400 bg-white px-5 py-5 rounded-lg text-center">${card.description}</p>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-400">Deadline</p>
          <p class="text-sm font-medium text-gray-600">${today.toDateString()}</p>
        </div>
        <button class="complete-btn bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700" data-index="${index}">
          Complete
        </button>
      </div>
    </div>
  `;
  })
  .join("");

// Task counter
let taskCounter = cards.length;
const tasNum = document.getElementById("task-assigned");
tasNum.innerText = taskCounter;

const activityLog = document.getElementById("activity-log");
const completedTaskCounter = document.getElementById("completed-tasks");
completedTaskCounter.innerText = 0; // Ensure it starts from 0

// Attach event listeners to all "Complete" buttons
document.querySelectorAll(".complete-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    if (index === undefined) return; // Ensure valid index

    event.target.textContent = "Completed";
    event.target.disabled = true;
    event.target.classList.add("bg-gray-400", "cursor-not-allowed");
    event.target.classList.remove("hover:bg-blue-700");

    // Reduce task counter
    taskCounter -= 1;
    tasNum.innerText = taskCounter;

    // Increase completed tasks count
    completedTaskCounter.innerText = parseInt(completedTaskCounter.innerText) + 1;

    // Add to activity log
    activityLog.insertAdjacentHTML(
      "beforeend",
      `<div class="px-4 py-3 rounded-lg bg-white shadow-sm">
        <p class="text-sm text-gray-800">
          <strong>Task completed:</strong> ${cards[index].title}
        </p>
        <p class="text-xs text-gray-500">${today.toDateString()}</p>
      </div>`
    );

    // Check if all tasks are completed
    if (taskCounter === 0) {
      setTimeout(() => {
        alert("🎉 Congratulations! You have completed all your tasks.");
      }, 500);
    }
  });
});

// Theme random color change
const theButton = document.getElementById("theme-btn");
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
theButton.style.backgroundColor = getRandomColor();
theButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Clear history button
document.getElementById("clear-history").addEventListener("click", () => {
  activityLog.innerHTML = "";
  completedTaskCounter.innerText = "0"; // Reset count
});
