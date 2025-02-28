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

const date = document.getElementById("date");
const today = new Date();
date.innerHTML = today.toDateString();

const getCards = document.getElementById("task-cards");

getCards.innerHTML = cards
  .map((card, index) => {
    return `
    <div class="rounded-xl bg-[#F4F7FF] p-5 md:p-6 lg:p-7 w-full max-w-md md:max-w-lg lg:max-w-xl shadow-lg">
  <p class="mb-2 text-sm font-medium text-gray-600 bg-white px-5 py-3 rounded-lg w-fit max-w-[80%] sm:max-w-[70%] md:max-w-[60%]">
    ${card.label}
  </p>
  <h3 class="mb-3 text-lg font-semibold text-gray-800 text-wrap">
    ${card.title}
  </h3>
 <div class="px-2">
  <p class="mb-6 text-gray-400 bg-white px-5 py-5 rounded-lg text-center break-words">
    ${card.description}
  </p>
  </div>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="text-center sm:text-left">
      <p class="text-xs text-gray-400">Deadline</p>
      <p class="text-sm font-medium text-gray-600">${today.toDateString()}</p>
    </div>
    <button id="complete-btn-${index}" class="w-full sm:w-auto rounded-lg bg-[#3752FD] px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
      Complete
    </button>
  </div>
</div>

  `;
  })
  .join("");

let taskCounter = cards.length;

const tasNum = document.getElementById("task-assigned");
tasNum.innerHTML = taskCounter;

const activityLog = document.getElementById("activity-log");

const completeButtons = document.querySelectorAll("[id^='complete-btn-']");
completeButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Completed";
    const card = cards[index];
    if (!btn.disabled) {
      alert("Board updated successfully");
      btn.disabled = true;
      btn.classList.add("bg-gray-400");
      btn.classList.remove("hover:bg-indigo-700");

      taskCounter -= 1;
      tasNum.innerHTML = taskCounter;

      const complateTask = document.getElementById("completed-tasks");
      complateTask.innerText++;

      if (activityLog) {
        activityLog.insertAdjacentHTML(
          "beforeend",
          `<div class="flex-1 px-4 py-4 rounded-lg bg-white p-6 shadow-sm">
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
