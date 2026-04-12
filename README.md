# 📝 Todo Item Card UI (Testable & Accessible)

## 🌐 Live Demo

👉 https://2doitemcard.netlify.app

---

## 📌 Overview

This project is a clean, responsive, and accessible **Todo Item Card** built with **HTML, CSS, and JavaScript**.

It was designed to meet strict frontend assessment requirements (like HNG), with a strong focus on:

* Testability
* Accessibility
* Simplicity
* Real-world usability

---

## 🚀 Features

### ✅ Fully Testable UI

All required elements include exact `data-testid` attributes for automated testing.

### ⏳ Dynamic Time Remaining

* Calculates time left until due date
* Updates every 60 seconds
* Displays human-readable messages:

  * `Due in 3 days`
  * `Due tomorrow`
  * `Due in 5h 20m`
  * `Overdue by 2h`
  * `Due now!`

### ✅ Task Completion Toggle

* Interactive checkbox
* Updates:

  * Status (`In Progress` → `Done`)
  * Title (adds strikethrough)

### 🏷 Tags / Categories

* Flexible tag system
* Responsive wrapping layout
* Includes sample tags:

  * Task
  * Intern
  * HNG

### ✏️ Actions

* **Edit** → logs action to console
* **Delete** → triggers alert

---

## 🧪 Test IDs Implemented

| Element        | data-testid                 |
| -------------- | --------------------------- |
| Card Container | `test-todo-card`            |
| Title          | `test-todo-title`           |
| Description    | `test-todo-description`     |
| Priority       | `test-todo-priority`        |
| Due Date       | `test-todo-due-date`        |
| Time Remaining | `test-todo-time-remaining`  |
| Status         | `test-todo-status`          |
| Checkbox       | `test-todo-complete-toggle` |
| Tags Container | `test-todo-tags`            |
| Edit Button    | `test-todo-edit-button`     |
| Delete Button  | `test-todo-delete-button`   |

---

## ♿ Accessibility

* Semantic HTML (`article`, `time`, `ul`, `button`)
* Properly labeled checkbox (`label` + `for`)
* Keyboard navigable
* Visible focus states
* `aria-live="polite"` for time updates
* Accessible button names

---

## 📱 Responsiveness

* Mobile-first design
* Works from **320px to 1200px**
* No horizontal overflow
* Flexible layout with wrapping tags

---

## 🧱 Tech Stack

* **HTML5**
* **CSS3 (Flexbox)**
* **Vanilla JavaScript**

No frameworks, no libraries — pure frontend fundamentals.

---

## 📂 Project Structure

```bash
.
├── index.html
├── style.css
└── script.js
```

---

## ⚙️ How It Works

### Time Calculation

The app calculates time difference between:

* Current time (`Date.now()`)
* Fixed due date

It then formats output into readable text.

### State Handling

* Checkbox toggles completion state
* DOM updates reflect task status instantly

---

## 📈 Possible Improvements

* Add multiple todo cards (list view)
* Persist data with `localStorage`
* Add edit modal functionality
* Filter by status/priority
* Dark mode support

---

## 🎯 Assessment Focus

This project was built to satisfy:

* ✅ Strict DOM structure checks
* ✅ Accessibility standards
* ✅ Functional correctness
* ✅ Clean and maintainable code

---

## 👨‍💻 Author

Built as part of a frontend assessment task.

---

## 📄 License

Free to use and modify.
"# todo-item-card" 
