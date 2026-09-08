function setup() {
    // Instagram post size: 1080x1350
    createCanvas(1080, 1350);
    noStroke();
}

function draw() {
    // Dark background
    background(20);
    
    // Center of canvas
    let centerX = width / 2;
    let centerY = height / 2;
    
    // Number of rectangles
    let numRectangles = 12;
    
    // Draw rectangles from back to front
    for (let i = numRectangles - 1; i >= 0; i--) {
        // Calculate size based on perspective
        let progress = i / (numRectangles - 1); // 1 at back, 0 at front
        
        // Size decreases as we go to the front
        let rectWidth = width * (0.95 - progress * 0.85);
        let rectHeight = height * (0.95 - progress * 0.85);
        
        // Color gradient: from purple/dark red to bright red
        let colorValue = map(i, 0, numRectangles - 1, 0, 1);
        
        let r, g, b;
        if (colorValue < 0.5) {
            // Transition from purple to red
            let t = colorValue * 2;
            r = lerp(120, 255, t);
            g = lerp(30, 0, t);
            b = lerp(150, 0, t);
        } else {
            // Transition from red to bright red
            let t = (colorValue - 0.5) * 2;
            r = 255;
            g = lerp(0, 50, t);
            b = 0;
        }
        
        // Add blur effect for gradient feel
        let alpha = map(i, 0, numRectangles - 1, 100, 200);
        
        fill(r, g, b, alpha);
        
        // Draw rectangle centered
        rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
    }
    
    // Apply blur filter for smooth gradient effect
    filter(BLUR, 2);
}
