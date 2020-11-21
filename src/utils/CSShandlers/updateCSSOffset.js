const updateCSSOffset = (section, type, value) =>{
    const currentOffset = window
        .getComputedStyle(document.documentElement) 
        .getPropertyValue(`--${section}-${type}-offset`)
        .split('')
        .filter(el => !isNaN(parseInt(el)) || el === "-")
        .join('');
    const newOffset = `${parseInt(currentOffset) + value}rem`
    document
        .documentElement.style.setProperty(`--${section}-${type}-offset`, newOffset)
}

export default updateCSSOffset