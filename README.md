 Custom Note App

A simple and fast note-taking app built with **React**, **Vite**, and **Tailwind CSS**. Notes are saved in the browser using **localStorage**—no backend required!

#Live Site

👉 [Live Demo](https://convers-a-ilabs-fro-assi-a1me.vercel.app/)

#Tech Stack

- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🗂 localStorage
- 🔁 React useState/useEffect for state management



#Features

-  Add a new note (title + content)
-  View all saved notes
-  Notes persist using `localStorage`
-  Simple 2-tab navigation
-  Error handling + loading states


#Why Decisions

#Storage Strategy
-localStorage was chosen for simplicity and persistence without a backend.
- `note_app_notes` is used as a key for easier debugging and avoiding key collision.

#Component Design
- `AddNote`, `NotesList`, and `Navbar` are modular for separation of concerns and clarity.

#State Management
- `useState` is used to manage controlled inputs and display states.
- `useEffect` is used in `NotesList` to load notes from storage once on mount.

#Styling
- **Tailwind CSS** used for fast development, clean utility-first design, and responsiveness.

#Navigation
- Simple tab switching using `useState` avoids React Router complexity.

#Getting Started

#Install & Run
bash
npm install
npm run dev

