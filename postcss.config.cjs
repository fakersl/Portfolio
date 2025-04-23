module.exports = ({env}) => ({
    plugins: {
        'postcss-import': {},
        'tailwindcss': {},
        'autoprefixer': env === 'production'? { cssnano: {} } : false
    },
})