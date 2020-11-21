const updateCSSColors = (section, type, value) =>{
    document
        .documentElement.style.setProperty(`--${section}-${type}-color`, value)
}

export default updateCSSColors