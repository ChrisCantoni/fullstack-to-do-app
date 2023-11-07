# TO DO APP
## Description

This TO DO APP is a fully-implemented CRUD app designed to be familiar and easy to use for everyone. When you add a task to the list, it is automatically added with the time so you can remember when you added it. There's also an optional "deadline" setting for items that must be completed by a certain date. After that date, the item will be highlighted in red to better bring your attention to it. 

The app also utilizes some Latin language for better accessibility for the woefully underserved Latin-speaking populations of the world, while also bypassing language barriers for the "complete" and "delete" features by using the universally familiar checkmark and trashcan icons.

Once an item is completed, the item is crossed off the list and moved to the bottom where it will also display the date and time the user successfully completed the item. You did it! But if you hit that completed button by accident, not to worry. Another click and the item will be back on your list ready to be tackled.

Overall the app is designed with a simple, clean look to give you the chance to check your tasks, mark them completed, and keep moving on with your day, only now extra motivated.

## Screenshot
![A picture of the app filled with important tasks](/public/images/ToDoScreenshot.png)

## Skills Practiced
- Javascript
- React
- Material UI
- Express & Node
- PostgreSQL
- HTML & CSS

## Steps taken to build this project
- [x]  SQL to create the database table
- [x]  Create a `database.sql` file and add the create table SQL
- [x] `objective`, `completed default falsedata`
- [x]  Add sample data with insert statements
- [x]  Add insert statements into the `database.sql` file
- [x]  Create a GET route in the `todo.router.js` file to return sample data
- [x] Add `date added`, `deadline`, `date completed` columns
- [x]  Test the GET route with Postman
- [x]  Add `useEffect` and Axios GET to the `App.jsx`
- [x] - [x] User can input a task
- [x] Tasks displayed on the DOM
- [x] Tasks are added/stored in a database
- [x] Button options to complete or delete each task
- [x] Visual indication of complete/incomplete tasks
- [x] Deleting a task removes it completely from database
- [x] Completing a task is also contained in database
- [x] Display items on the page with `.map` ...
- [x] Move display of items to its own component
- [x] Move individual items to their own components
- [x] Conditional rendering for completed items
- [x] Conditional rendering for urgent items
- [x] Have completed tasks get moved to the bottom of the list
- [x] Format list - Make it look nice
- [x] Validate inputs
- [x] Require inputs also. So front and back end
- [x] When deadline is blank, allow 'No deadline'
- [x] Create a conditional to check if task is completed
- [x] Material UI features for better readability and useability

## Built with:
- Javascript
- React
- Material UI
- Express & Node.js
- PostgreSQL

### Acknowledgements
Thanks to Prime Digital Academy for this exciting challenge in implementing React and MUI

### Support
If you have suggestions or issues, please email me at TBD