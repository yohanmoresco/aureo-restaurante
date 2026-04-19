const fs = require('fs');
const path = require('path');

const replacements = {
  // Backgrounds
  'bg-base-100': 'bg-dark-1',
  'bg-base-200': 'bg-dark-2',
  'bg-base-300': 'bg-dark-3', // just in case
  'bg-black': 'bg-dark-1',

  // Golds
  'text-primary': 'text-gold-2',
  'bg-primary': 'bg-gold-1',
  'border-primary': 'border-gold-1',
  'ring-primary': 'ring-gold-1',
  'from-primary': 'from-gold-1',
  'to-primary': 'to-gold-3',
  'shadow-primary': 'shadow-gold-1',
  'text-[10px] uppercase tracking-widest text-text-muted': 'text-[10px] uppercase tracking-widest text-text-3',
  
  // Texts
  'text-text-primary': 'text-text-1',
  'text-text-secondary': 'text-text-2',
  'text-white': 'text-text-1',
  'text-black': 'text-dark-1',

  // Borders
  'border-white/5': 'border-border-light',
  'border-white/10': 'border-border-light',
  'border-white/20': 'border-border-light',
  'border-neutral-900': 'border-border-light',
  'border-neutral-800': 'border-border-light',
  'bg-white/5': 'bg-border-light',
  'bg-white/10': 'bg-dark-3',

  // Buttons specifics inside Institutional.tsx and others that say "hover:bg-white"
  'hover:bg-white': 'hover:bg-gold-1',
  'hover:text-black': 'hover:text-dark-1',
  'hover:border-white': 'hover:border-gold-1',
  
  // Specific old gradient to gradient-premium
  'bg-gradient-to-r from-primary to-primary-dark': 'bg-gradient-premium',
  'bg-gradient-to-tr from-primary to-primary-dark': 'bg-gradient-premium',

  'text-primary/80': 'text-gold-2/80',
  'text-primary/30': 'text-gold-2/30',

  // Pure white 
  '#FFFFFF': 'var(--color-text-1)',
  '#FFF': 'var(--color-text-1)',
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) { 
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  for (const [key, value] of Object.entries(replacements)) {
    // using global regex replacement for most exact matches
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, value);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
