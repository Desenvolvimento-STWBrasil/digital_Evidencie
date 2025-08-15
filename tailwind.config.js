/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ele vai olhar o index.html
    "./src/**/*.{js,ts,jsx,tsx}", // E qualquer arquivo dentro da pasta 'src' que termine com js, ts, jsx, ou tsx
  ],
  theme: {
    // É aqui que a mágica acontece
    extend: {
      // Vamos estender as cores
      colors: {
        principal: "#3370A6",
        principalhover: "#2E6595",
        secundaria: "#4494A6",
        bgterciario: "12273A",
        neutro: "#05F2DB", // Renomeei para 'neutro' para ficar mais curto
        aviso: "#F2E205",
        titulo: "#12273A",
        texto: "#18343A",

        blockEspecial: "E0EAF2",
      },
      // Adicionamos a configuração da fonte aqui
      fontFamily: {
        // 'sans' é o nome da família de fontes sans-serif padrão do Tailwind.
        // Ao sobrescrevê-la, estamos dizendo: "A partir de agora, a fonte
        // padrão para todo o site é a Lato".
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Adicione esta linha
  ],
};
