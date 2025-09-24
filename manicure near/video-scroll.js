// Auto-scroll function for video section
function initVideoScroll() {
    const videoScroll = document.querySelector('.video-scroll');
    const videoItems = document.querySelectorAll('.video-item');
    let currentIndex = 0;

    function scrollToNext() {
        if (currentIndex < videoItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        videoItems[currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    }

    // Auto scroll every 4.5 seconds
    setInterval(scrollToNext, 9500);

    // Pause auto-scroll when user interacts
    let isUserScrolling = false;
    let scrollTimeout;

    videoScroll.addEventListener('scroll', () => {
        isUserScrolling = true;
        clearTimeout(scrollTimeout);
        
        // Resume auto-scroll after 4.5 seconds of no user interaction
        scrollTimeout = setTimeout(() => {
            isUserScrolling = false;
        }, 4500);
    });

    // Update currentIndex based on scroll position
    videoScroll.addEventListener('scroll', () => {
        const scrollPosition = videoScroll.scrollLeft;
        currentIndex = Math.round(scrollPosition / videoScroll.offsetWidth);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initVideoScroll);