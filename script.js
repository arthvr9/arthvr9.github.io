function showComments() {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
        commentsSection.classList.add('slideDown');
    } else {
        commentsSection.style.display = 'none';
        commentsSection.classList.remove('slideDown');
    }
}
