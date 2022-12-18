module.exports = {
  "*.ts": [() => "tsc", "npm run lint", "npm run format"],
  "*.tsx": [() => "tsc", "npm run lint", "npm run format"],
  "*.js": ["npm run lint", "npm run format"],
  "*.jsx": ["npm run lint", "npm run format"],
  "*.html": ["npm run format"],
  "*.css": ["npm run format"],
  "*.json": ["npm run format"],
};
