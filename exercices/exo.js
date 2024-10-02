document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        const positionObject = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;
        if (positionObject < screenPosition || positionObject<200 ) {
            item.classList.add("item1")
        } else {
            item.classList.remove("item1")
        }
    })
})
