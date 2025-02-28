// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all terminal lines
    const lines = document.querySelectorAll('.terminal-line');
    
    // Add random delay to each line for typing effect
    lines.forEach((line, index) => {
        // Base delay of 0.5s multiplied by line index for sequential appearance
        const baseDelay = index * 0.5;
        // Add random variation between 0-0.3s
        const randomDelay = Math.random() * 0.3;
        // Set final delay
        line.style.animationDelay = `${baseDelay + randomDelay}s`;
    });
});