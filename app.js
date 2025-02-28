const cards = [
  {
    label: "Shop Ease",
    title: "Fix Mobile Button Issue",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
  },
  {
    label: "Soft Pay",
    title: "Add Pay Success Modal",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
  },
  {
    label: "Meta",
    title: "Add new reaction 👋",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
  },
  {
    label: "Programming Hero",
    title: "Fix Video Loading Issue",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
  },
  {
    label: "Google LLC",
    title: "Integrate AI search",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
  },
  {
    label: "Shop Ease",
    title: "Fix Mobile Button Issue",
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts",
  },
];

//date
const date = document.getElementById("date");
const today = new Date();
date.innerHTML = today.toDateString();

// Show cards
const getCards = document.getElementById("task-cards");

getCards.innerHTML = cards
  .map((card, index) => {
    return `
    <div class="rounded-xl bg-[#F4F7FF] p-5 ">
      <p class="mb-2 text-sm font-medium text-gray-600">${card.label}</p>
      <h3 class="mb-3 text-lg font-semibold text-gray-800">
        ${card.title}
      </h3>
      <p class="mb-6 text-sm text-gray-400">
        ${card.description}
      </p>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-400">Deadline</p>
          <p class="text-sm font-medium text-gray-600">${today.toDateString()}</p>
        </div>
        <button id="complete-btn-${index}" class="rounded-lg bg-[#3752FD] px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Complete
        </button>
      </div>
    </div>
  `;
  })
  .join("");

// Task Counter (Separate from cards.length)
let taskCounter = cards.length;

// Task Number
const tasNum = document.getElementById("task-assigned");
tasNum.innerHTML = taskCounter;

// Activity Log
const activityLog = document.getElementById("activity-log");

// Select all buttons dynamically using a common selector
const completeButtons = document.querySelectorAll("[id^='complete-btn-']");

completeButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Completed"; // Update the button text
    const card = cards[index]; // Get the card corresponding to the button clicked

    if (!btn.disabled) {
      alert("Board updated successfully");
      btn.disabled = true; // Disable the button
      btn.classList.add("bg-gray-400");
      btn.classList.remove("hover:bg-indigo-700");

      // Update the task number (assigned tasks)
      taskCounter -= 1;
      tasNum.innerHTML = taskCounter;

      const complateTask = document.getElementById("completed-tasks");
      complateTask.innerText++;

      // Ensure activityLog exists
      if (activityLog) {
        activityLog.insertAdjacentHTML(
          "beforeend",
          `<div class="flex-1">
            <p class="text-sm text-gray-800">
              <span class="font-medium">You have completed the task:</span> ${
                card.title
              }
            </p>
            <p class="text-xs text-gray-500">${today.toDateString()}</p>
          </div>`
        );
      }
    }
  });
});

//theme color

const theButton = document.getElementById("theme-btn");

function getRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

theButton.style.backgroundColor = getRandomColor();

theButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

const clearHistorybtn = document.getElementById("clear-history");

clearHistorybtn.addEventListener("click", () => {
  activityLog.innerHTML = "";
  const complateTask = document.getElementById("completed-tasks");
  complateTask.innerText = 23;
});
