

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.image-post').forEach(parent => {
        const img = parent.querySelector('img');
        if (!img.src || img.src.endsWith('/')) {
            parent.style.display = 'none'
        }
    })
})

const para = document.querySelectorAll('p');
para.forEach((p) => {
    p.addEventListener('click', () => {
        p.classList.toggle('active')
    })
})

const comment_output = document.querySelector('.comment-output');
const comment_form = document.querySelector('.commentForm');

document.querySelectorAll('.icon.commentIcon').forEach((element)=>{
    element.addEventListener('click', () => {
        comment_output.style.display='flex';
    });
})
document.querySelector('.header-comment .bx-x').addEventListener('click',()=>{
    comment_output.style.display='none';
})
