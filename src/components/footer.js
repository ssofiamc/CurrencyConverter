const footer = () => {
    const contentFoot = document.createElement('footer');
    contentFoot.classList.add('footer');
    const text = document.createElement('p');
    text.textContent = '@2025';
    contentFoot.appendChild(text);
    return contentFoot;
};

export default footer;