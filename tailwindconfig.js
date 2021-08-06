module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

module.exports = {
    theme: {
        extend: {
            backgroundImage: theme => ({

                'hero-pattern': "url('/img/hero-pattern.svg')",

                'footer-texture': "url('/img/footer-texture.png')",
            })
        }
    }
}