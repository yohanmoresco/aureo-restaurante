const fs = require('fs');

const file = 'src/features/Booking.tsx';
let content = fs.readFileSync(file, 'utf8');

// The input parts inside form:
const replaces = [
  {
    find: `className="w-full bg-dark-1 border border-border-light text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 transition-colors placeholder:text-text-1/20" 
                    placeholder="Seu nome completo"`,
    replace: `className={\`w-full bg-dark-1 border \${errors.name ? 'border-red-500/50' : 'border-border-light'} text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 transition-colors placeholder:text-text-1/20\`} 
                    placeholder="Seu nome completo"`
  },
  {
    find: `{/* Nome */}\n               <div>\n                 <label htmlFor="name" className="block text-[10px] md:text-xs font-semibold tracking-widest text-text-3 uppercase mb-2">Nome</label>\n                 <input \n                    type="text" \n                    id="name"\n                    name="name"\n                    value={formData.name}\n                    onChange={handleChange}\n                    required`,
    replace: `{/* Nome */}\n               <div className="relative">\n                 <label htmlFor="name" className={\`block text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-2 \${errors.name ? 'text-red-400' : 'text-text-3'}\`}>Nome</label>\n                 <input \n                    type="text" \n                    id="name"\n                    name="name"\n                    value={formData.name}\n                    onChange={handleChange}\n                    aria-invalid={!!errors.name}`
  }
];

replaces.forEach(r => {
  content = content.replace(r.find, r.replace);
});

fs.writeFileSync(file, content, 'utf8');
console.log('Error states somewhat injected (needs complete manual match to be safe)');
