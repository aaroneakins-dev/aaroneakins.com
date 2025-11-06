// SVG Hex Pattern Generator

const svg = document.getElementById('hexBackground');

// Generate hexagon grid pattern
function generateHexGrid() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const hexSize = 20; //distance from center to corner
    const hexHeight = Math.sqrt(3) * hexSize;
    const strokeColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--hex-stroke")
        .trim();

    // Cleear previous SVG
    svg.innerHTML = "";

    // Set viewBox to match window size
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    // Create hexagons
    let row = 0;
    for (let y = 0; y < height + hexHeight; y += hexHeight / 2, row++) {
        const offset = (row % 2) * (hexSize * 1.5);
        for (let x = 0; x < width + hexSize; x += hexSize * 3) {
            const hex = createHex(x + offset, y, hexSize, strokeColor);
            svg.appendChild(hex);
        }
    }
}

// Create single hex polygon
function createHex(cx, cy, size, strokeColor) {
    const hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    const points = [];

    for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i;
        const x = cx + size * Math.cos(angle);
        const y = cy + size * Math.sin(angle);
        points.push(`${x},${y}`);
    }

    hex.setAttribute("points", points.join(" "));
    hex.setAttribute("fill", "none");
    hex.setAttribute("stroke", strokeColor);
    hex.setAttribute("stroke-width", "1");
    return hex;
}

// Regenerate on resize or theme change
window.addEventListener("resize", generateHexGrid);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", generateHexGrid);

// Initial render
generateHexGrid();
