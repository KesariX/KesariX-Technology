const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Pricing', 'Pricing.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove 'Cloud & Infrastructure', from CATEGORIES
content = content.replace(/\s*'Cloud & Infrastructure',?\s*/, '\n  ');

// 2. Remove 'Cloud & Infrastructure': [ ... ], from PRICING_DATA
// We can use a regex to match from 'Cloud & Infrastructure': [ down to the matching ],
content = content.replace(/\s*'Cloud & Infrastructure': \[\s*\{[\s\S]*?\}\s*,\s*\]\s*,/, '');

// 3. Decrease inr and usd by 10%
content = content.replace(/inr:\s*(\d+)\s*,/g, (match, p1) => {
    let newVal = Math.round(parseInt(p1, 10) * 0.9);
    return `inr: ${newVal},`;
});

content = content.replace(/usd:\s*(\d+)\s*,/g, (match, p1) => {
    let newVal = Math.round(parseInt(p1, 10) * 0.9);
    return `usd: ${newVal},`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Pricing updated successfully');
