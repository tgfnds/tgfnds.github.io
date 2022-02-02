const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                current: "currentColor",
                primary: colors.orange,
            },
            backgroundImage: {
                "blob": "url(\"/static/images/blob-scene-haikei.svg\")",
            },
            fill: {
                "redux": "#764ABC",
                "reduxsaga": "#999999",
                "firebase": "#FFCA28",
                "mui": "#007FFF",
                "nextjs": "#000000",
                "dotnet": "#512BD4",
                "html5": "#E34F26",
                "css3": "#1572B6",
                "sass": "#CC6699",
                "csharp": "#239120",
                "javascript": "#F7DF1E",
                "sqlserver": "#CC2927",
                "react": "#61DAFB",
                "typescript": "#3178C6",
                "tailwind": "#06B6D4",
                "mongodb": "#47A248",
                "git": "#F05032",
                "npm": "#CB3837",
                "flutter": "#02569B",
                "vuejs": "#4FC08D",
                "django": "#092E20",
                "python": "#3776AB",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide")
    ],
}
