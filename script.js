const due = new Date("2026-04-16T18:00:00Z").getTime();

const dueDate = document.getElementById("duedate");
const timeRemaining = document.getElementById("time-remaining");
const checkbox = document.getElementById("checkbox");
const status = document.getElementById("status");
const card = document.getElementById("card");

function updateTime() {
  if (status.textContent === "Done") return;
  const now = Date.now();
  const submissionDate = due - now;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  const overdue = document.getElementById("overdue");

  if (submissionDate <= -minute) {
    overdue.textContent = "Overdue";
    overdue.style.color = "red";
  } else {
    overdue.textContent = "";
  }

  if (submissionDate <= 0 && submissionDate > -minute) {
    timeRemaining.textContent = "Due now!";
    return;
  }

  if (submissionDate <= -minute) {
    const hr = Math.floor(Math.abs(submissionDate) / hour);
    const min = Math.floor((Math.abs(submissionDate) % hour) / minute);
    timeRemaining.textContent = `Overdue by ${hr}h ${min}m`;
    return;
  }

  if (submissionDate < day) {
    const hr = Math.floor(submissionDate / hour);

    if (submissionDate < day && submissionDate >= hour * 12) {
      timeRemaining.textContent = "Due tomorrow";
    } else {
      const min = Math.floor((submissionDate % hour) / minute);
      timeRemaining.textContent = `Due in ${hr}h ${min}m`;
    }
    return;
  }

  const days = Math.floor(submissionDate / day);
  timeRemaining.textContent = `Due in ${days} day${days > 1 ? "s" : ""}`;
}

updateTime();

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    statusControl.value = "done";
  } else {
    statusControl.value = "pending";
  }

  statusControl.dispatchEvent(new Event("change"));
});

/* checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    status.textContent = "Done";
    statusControl.value = "done";
    card.classList.add("completed");
    timeRemaining.textContent = "Completed";
  } else {
    status.textContent = "Pending";
    statusControl.value = "pending";
    card.classList.remove("completed");
  }
}); */

/* checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        status.textContent = "Done";
        card.classList.add("completed");
    } else {
        status.textContent = "In Progress";
        card.classList.remove("completed");
    }
}); */

function editTask() {
  console.log("edit clicked");
}

function deleteTask() {
  alert("Delete clicked");
}

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const editForm = document.getElementById("edit-container");
const editBtn = document.querySelector(".edit");
const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDescription");
const editPriority = document.getElementById("prioritySelect");
const editDuedate = document.getElementById("duedateInput");
const cancelButton = document.getElementById("cancelButton");

editBtn.onclick = () => {
  editForm.style.display = "flex";
  card.style.display = "none";

  editTitle.value = title.textContent.trim();
  editDesc.value = desc.textContent.replace(/\s+/g, " ").trim();
};

cancelButton.onclick = () => {
  editForm.style.display = "none";
  card.style.display = "block";
};

editForm.onsubmit = (e) => {
  e.preventDefault();

  title.textContent = editTitle.value;
  desc.textContent = editDesc.value.trim();
  const newDate = editDuedate.value;
  requestAnimationFrame(() => {
    checkDescriptionLength();
  });

  if (newDate) {
    dueDate.setAttribute("datetime", newDate + ":00Z");

    const formatted = new Date(newDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    dueDate.textContent = "Due " + formatted;
  }

  editForm.style.display = "none";
  card.style.display = "block";

  const priorityDisplay = document.querySelector(".priority");
  const newPriority = editPriority.value;

  priorityDisplay.textContent =
    newPriority.charAt(0).toUpperCase() + newPriority.slice(1);

  priorityDisplay.style.background = "";
  priorityDisplay.style.color = "";

  if (newPriority === "low") {
    priorityDisplay.style.background = "#e6f7ee";
    priorityDisplay.style.color = "#15803d";
  } else if (newPriority === "medium") {
    priorityDisplay.style.background = "#fff4e5";
    priorityDisplay.style.color = "#b45309";
  } else if (newPriority === "high") {
    priorityDisplay.style.background = "#ffe5e5";
    priorityDisplay.style.color = "#d10429";
  }
};

const statusControl = document.getElementById("statusControl");
const timer = setInterval(updateTime, 60000);

// Dropdown → UI

statusControl.addEventListener("change", () => {
  const value = statusControl.value;

  // reset UI state first
  card.classList.remove("completed");
  card.classList.remove("in-progress");
  checkbox.checked = false;

  // IMPORTANT: restart timer always (fixes your bug)
  clearInterval(timer);

  if (value === "done") {
    status.textContent = "Done";
    checkbox.checked = true;
    card.classList.add("completed");
    timeRemaining.textContent = "Completed";

  } else if (value === "pending") {
    status.textContent = "Pending";
    startTimer(); // restart countdown

  } else if (value === "in-progress") {
    status.textContent = "In Progress";
    card.classList.add("in-progress");
    startTimer(); // restart countdown
  }
});

/* statusControl.addEventListener("change", () => {
  const value = statusControl.value;

  card.classList.remove("completed");
  card.classList.remove("in-progress");

  if (value === "done") {
    status.textContent = "Done";
    checkbox.checked = true;
    card.classList.add("completed");
    timeRemaining.textContent = "Completed";

    clearInterval(timer);
  } else if (value === "pending") {
    status.textContent = "Pending";
    checkbox.checked = false;
    card.classList.remove("completed");
  } else if (value === "in-progress"){
    status.textContent = "In Progress";
    checkbox.checked = false;
    card.classList.add("in-progress");
  }

  resetTimeUI();
}); */

const toggleBtn = document.getElementById("toggleBtn");
const descContainer = document.getElementById("desc-container");

toggleBtn.addEventListener("click", () => {
  descContainer.classList.toggle("expanded");

  if (descContainer.classList.contains("expanded")) {
    toggleBtn.textContent = "Show less";
  } else {
    toggleBtn.textContent = "Show more";
  }

  toggleBtn.setAttribute(
    "aria-expanded",
    descContainer.classList.contains("expanded"),
  );
});

function checkDescriptionLength() {
  // reset state
  descContainer.classList.remove("expanded");
  toggleBtn.textContent = "Show more";

  requestAnimationFrame(() => {
    if (descContainer.scrollHeight > descContainer.clientHeight) {
      toggleBtn.style.display = "inline-block";
    } else {
      toggleBtn.style.display = "none";
    }
  });
}

window.addEventListener("load", checkDescriptionLength);
