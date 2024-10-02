document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        const positionObject = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;
        if (positionObject < screenPosition) {
            item.classList.add("item1")
        } else {
            item.classList.remove("item1")
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    })
})
