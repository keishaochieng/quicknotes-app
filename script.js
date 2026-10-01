const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");
const noteCount = document.querySelector("#note-count");
const notesList = document.querySelector("#notes-list");

let notes = [];

// Rebuilds the list from the notes array (never uses innerHTML for user text)
function render() {
  notesList.textContent = "";

  for (const note of notes) {
    const li = document.createElement("li");
    li.classList.add("note-card", `category-${note.category}`);

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.classList.add("note-meta");

    const label = document.createElement("span");
    label.classList.add("category-label");
    label.textContent = note.category;

    const date = document.createElement("span");
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";

    meta.append(label, date, deleteBtn);
    li.append(text, meta);
    notesList.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const note = {
    id: Date.now(),
    text: noteInput.value.trim(),
    category: categorySelect.value,
    createdAt: new Date().toLocaleString(),
  };

  notes.push(note);
  noteInput.value = "";
  render();
});

render();