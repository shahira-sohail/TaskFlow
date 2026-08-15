# TaskFlow

TaskFlow is a Trello-style Kanban task management board built with React and Vite.

## Features

- Add tasks with title and priority
- Search tasks
- Edit tasks
- Delete tasks
- Move tasks between To Do, In Progress, and Done
- Drag and drop tasks between columns
- LocalStorage persistence
- Responsive 3D-inspired UI

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- @dnd-kit/core
- LocalStorage

## Project Structure
src/
├── components/
│   ├── AddTask.jsx
│   ├── Column.jsx
│   ├── Header.jsx
│   ├── TaskBoard.jsx
│   └── TaskCard.jsx
├── App.jsx
├── App.css
└── main.jsx
# Getting Started
1. Clone the repository
git clone https://github.com/shahira-sohail/TaskFlow.git
2. Open the project
cd TaskFlow
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will be available at the local development URL provided by Vite.

## How It Works

Tasks are represented as JavaScript objects containing information such as the task title, priority, date, and status.

The React state manages the task collection, while LocalStorage keeps tasks available after refreshing the browser.

The search field filters tasks based on their titles, and @dnd-kit/core provides the drag-and-drop functionality used to move tasks between columns.

## Future Improvements
Task due-date management
Task descriptions
User authentication
Multiple boards
Backend/database integration
More advanced filtering and sorting
## Author

## Shahira Sohail
