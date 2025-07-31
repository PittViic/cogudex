/** @type {import('tailwindcss').Config} */
export default {
  // Ativa a estratégia de modo escuro baseada em classes.
  // O Tailwind irá procurar a classe 'dark' no elemento <html>.
  darkMode: 'class',

  // Informa ao Tailwind quais ficheiros ele deve analisar
  // para encontrar as classes que você está a usar.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Aqui é onde você pode personalizar o design do Tailwind,
  // como adicionar cores, fontes, etc.
  theme: {
    extend: {},
  },

  // Aqui é onde você pode adicionar plugins do Tailwind.
  plugins: [],
}
