Chat Noir: Mouse-Tracking Interface
Chat Noir is a JavaScript-based interactive project featuring a stylized black cat whose eyes follow the cursor across the viewport. It serves as a practical implementation of coordinate-based movement and real-time DOM updates.

Features
Real-Time Tracking: Pupils respond dynamically to mouse coordinates.

Vector Graphics: Scalable design using SVG for crisp rendering at any resolution.

Vanilla Implementation: No external libraries or frameworks required.

Optimized Performance: Uses requestAnimationFrame or efficient event throttling for smooth movement.

Technical Overview
The core logic relies on calculating the relative position of the mouse pointer to the center of the cat's eyes.


Setup and Usage
Clone the repository:
git clone https://github.com/yourusername/chat-noir.git

Directory Structure:

index.html: Contains the SVG structure for the cat.

style.css: Defines the aesthetics and layout.

main.js: Handles the tracking logic.

Execution:
Open index.html in any modern web browser to view the effect.
