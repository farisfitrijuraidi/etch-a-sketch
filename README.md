# Etch-A-Sketch

This is a browser-based sketching application inspired by the classic toy, created as part of The Odin Project's Foundations curriculum. It allows users to draw on a dynamic grid of squares simply by hovering their mouse.

## Features
* Creates a dynamic grid of squares to serve as a drawing canvas (defaults to 16x16).
* Draws on the grid by changing the background colour of squares when the mouse hovers over them.
* Includes a "Reset" button that prompts the user for a new grid size (e.g., 32x32) and rebuilds the canvas.
* Implements extra credit features, including:
    * A drawing mode that uses a new random colour for each interaction.
    * A progressive darkening effect that makes a square 10% more opaque with each pass.

## What I Learned
This project was a deep dive into DOM manipulation and the interaction between CSS and JavaScript. The focus was on dynamically creating, modifying, and removing elements to build an interactive application.

Key takeaways include:
* **Dynamic DOM Creation**: How to generate a large number of HTML elements entirely within JavaScript using `document.createElement()` and `appendChild()` inside a loop. This was the foundation of the entire project.
* **Advanced Event Handling**: Understanding the subtle but critical difference between `mouseover` and `mouseenter`. I also learned how to use the event object (`e`) and `e.target` to precisely control the element that an event listener is acting upon.
* **The Specificity of CSS-in-JS**: I encountered and solved a key bug related to `style.cssText` overwriting all inline styles. This taught me the importance of modifying specific style properties (e.g., `element.style.backgroundColor`) to avoid unintended side effects.
* **Managing State on Individual Elements**: The progressive darkening feature required each grid square to "remember" its own state (its current opacity). I learned how to read an existing style property, perform a calculation on it, and then apply the new value, allowing hundreds of elements to manage their state independently.
* **Refactoring for Reusability**: The importance of creating a single, robust function (e.g., `newGrid()`) that can be called both on page load and by an event listener. This avoids code duplication and makes the program much cleaner and easier to maintain.

## Acknowledgements
* This project is based on the [Etch-A-Sketch assignment](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) from The Odin Project.