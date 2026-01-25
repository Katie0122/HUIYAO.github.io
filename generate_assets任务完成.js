const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets', 'images');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Helper to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate SVG Avatar
function generateAvatar(filename, text) {
    const color = getRandomColor();
    const svgContent = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${color}" />
    <text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".35em">${text}</text>
</svg>`;
    
    fs.writeFileSync(path.join(assetsDir, filename), svgContent);
    console.log(`Generated ${filename}`);
}

// Generate User Avatar
generateAvatar('avatar-user.svg', 'BW');

// Generate Card Avatars
for (let i = 1; i <= 12; i++) {
    generateAvatar(`avatar-${i}.svg`, `U${i}`);
}

// Generate Assistant Avatar (Grey)
function generateAssistantAvatar(filename) {
    const svgContent = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#E5E7EB" />
    <circle cx="50" cy="40" r="20" fill="#9CA3AF" />
    <path d="M20,90 Q50,60 80,90" fill="#9CA3AF" />
</svg>`;
    fs.writeFileSync(path.join(assetsDir, filename), svgContent);
    console.log(`Generated ${filename}`);
}

generateAssistantAvatar('avatar-assistant.svg');
