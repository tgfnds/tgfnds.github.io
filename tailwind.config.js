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
                "hero-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ccd8ff' fill-opacity='0.7' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                "dark-hero-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%234239bf' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
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
