document.querySelectorAll('.person-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
        container.querySelector('.nykzx-content, .boiola-content, .brighthammer-content, .matheus-content').style.display = 'flex';
        container.querySelector('.name').style.display = 'none';
    });

    container.addEventListener('mouseleave', () => {
        container.querySelector('.nykzx-content, .boiola-content, .brighthammer-content, .matheus-content').style.display = 'none';
        container.querySelector('.name').style.display = 'block';
    });
});