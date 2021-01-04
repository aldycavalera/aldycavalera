module.exports = {
    future: {
       removeDeprecatedGapUtilities: true,
       purgeLayersByDefault: true
    },
    purge: [
       './components/**/*.{js,ts,jsx,tsx}',
       './widgets/**/*.{js,ts,jsx,tsx}',
       './pages/**/*.{js,ts,jsx,tsx}'
    ],
    variants: {},
 }
 