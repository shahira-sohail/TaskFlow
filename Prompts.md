Prompts.md

TaskFlow — Learning Prompts

This file contains learning-oriented questions used while building the TaskFlow Kanban board. The prompts focus on understanding concepts, debugging, and improving the project rather than requesting complete implementations.

React Fundamentals

What is the role of useState in a React task board, and why is it useful for managing tasks?

How does state update when a new task is added to an array?

How does prop drilling work between App, Header, TaskBoard, Column, and TaskCard?

Why should a React application use state instead of directly changing the DOM?

How does conditional rendering work when displaying different task states?

Why is a key required when rendering a list of React components?

Component Structure

What responsibilities should TaskBoard, Column, TaskCard, Header, and AddTask have?

How can a large React component be divided into smaller reusable components?

How should data and callback functions flow from a parent component to child components?

How can unused props and imports be identified and cleaned up?

Task Management

How can tasks be represented as JavaScript objects with properties such as title, priority, date, and status?

How can array methods such as map() and filter() be used to update and display tasks?

How can a task be deleted from an array without directly modifying the original array?

How can an existing task be edited while keeping the rest of the task properties unchanged?

How can a task's status be changed when it moves between Kanban columns?

Search and Filtering

How does a controlled input work in React?

How can a search field communicate its value from Header to TaskBoard?

How can filter() be used to display only tasks whose titles match a search term?

Why is .toLowerCase() useful when implementing case-insensitive search?

What causes a React error such as setSearchTerm is not a function, and how can props be checked to debug it?

Drag and Drop

What is drag-and-drop functionality in a Kanban board?

What is the purpose of DndContext in @dnd-kit/core?

What is the difference between useDraggable and useDroppable?

How can the active and over values from a drag-end event be used to determine where a task should move?

Why should buttons inside a draggable card sometimes use onPointerDown with stopPropagation()?

How can CSS transforms, shadows, and transitions make a dragged card feel more three-dimensional?

Local Storage

What is localStorage, and when is it useful in a frontend project?

Why do JavaScript objects and arrays need JSON.stringify() before being stored in localStorage?

Why is JSON.parse() needed when reading stored task data?

How can React's useEffect be used to synchronize task state with localStorage?

What should happen when there is no saved task data in localStorage?

Forms and Modals

How can a form collect a task title and priority using controlled React inputs?

How can a modal be opened and closed using React state?

How can clicking outside a modal close it while clicking inside does not?

How can form validation prevent an empty task title from being added?

How can a modal be centered using CSS rather than positioning it relative to a Kanban column?

CSS and UI

How do CSS gradients, shadows, borders, and transparency create a dark glassmorphism-style interface?

How does transform-style: preserve-3d contribute to a 3D visual effect?

How can translate3d(), scale(), rotateX(), and perspective() be combined to create depth?

How can hover states make task cards and buttons feel interactive?

How can priority-specific classes be used to give High, Medium, and Low tasks different visual indicators?

How can CSS media queries make a three-column board responsive on smaller screens?

Debugging and Error Handling

How should a React error such as Cannot read properties of undefined be investigated?

What does it mean when a component receives an unexpected undefined prop?

How can browser console errors be traced back to the component and line that caused them?

How can a feature be tested after making a change without accidentally breaking existing functionality?

What should be checked when a UI appears blank after a React change?

Accessibility and UX

What accessibility considerations should be made for buttons, inputs, and interactive task cards?

Why should interactive controls remain usable while a card is draggable?

How can focus states and clear visual feedback improve keyboard and general usability?
