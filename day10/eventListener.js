//documentation:https://developer.mozilla.org/en-US/docs/Web/API/Event

const orangeElement = getBGcolour(pink);

pink.addEventListener('mouseenter',()=>{
    center.style.background =orangeElement
})


const magiccolourchange = (element,color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background=color;
    })
}