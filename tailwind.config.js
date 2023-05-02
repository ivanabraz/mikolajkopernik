const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode:'class',
    theme: {
        extend: {
            colors: {
                'nblack':'#141413',
                'nwhite':'#d8d9cf',
                'nblue':'#0000ff',
            }
        },
        screens: {
        'xs': '475px',
        ...defaultTheme.screens,
        },
        fontFamily: {
            'sans': ['"Work Sans"'],
            'serif': ['"EB Garamond"'],
            'body': ['"Work Sans"'],
        },
    },
    plugins: [
    ],
}