## Overview

This project is a task management web application that allows users to manage tasks, track their productivity, and view simple insights based on task completion. The application is built using HTML, CSS, and JavaScript and stores data in the browser using localStorage.

## Features Implemented

The application allows users to add tasks with a title, priority level, and estimated time in hours. Users can mark tasks as completed and delete tasks when they are no longer needed. All tasks are stored in localStorage so that data persists across page reloads.

Tasks are automatically categorized based on estimated time. Tasks with time less than or equal to two hours are categorized as Quick Tasks, while tasks with more than two hours are categorized as Long Tasks.

A productivity score is calculated dynamically using the ratio of completed task time to total task time. The score is displayed as a percentage along with a status indicator that shows Poor, Average, or Excellent based on the score range.

The application simulates asynchronous behavior when adding a task by introducing a delay and displaying a loading state with the message "Saving task...".

Users can filter tasks based on priority and search tasks by title in real time.

The user interface is clean and responsive, displaying total tasks, completed tasks, total time, and productivity score.

A dark mode toggle is implemented as an additional feature.

## Assumptions

The application assumes a single user environment and does not include authentication. Task time is entered in hours as a numeric value. All data is managed locally using the browser storage and no backend service is used. The priority values are limited to predefined options. Editing tasks is not included as it was not required in the assignment.

## Time Taken

The core implementation of the project can be completed within approximately 3 hours. However, the total time spent was around 6 hours, as the work was done in multiple sessions, including planning, development, and testing.
