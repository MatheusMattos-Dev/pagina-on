// Countdown Timer Logic
function updateCountdown() {
    // Placeholder logic: just decrease minutes/seconds artificially for demo
    let hoursEl = document.getElementById('hours');
    let minutesEl = document.getElementById('minutes');
    let secondsEl = document.getElementById('seconds');
    
    if (!hoursEl || !minutesEl || !secondsEl) return;
    
    let hours = parseInt(hoursEl.innerText);
    let minutes = parseInt(minutesEl.innerText);
    let seconds = parseInt(secondsEl.innerText);

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }
    }

    hoursEl.innerText = hours.toString().padStart(2, '0');
    minutesEl.innerText = minutes.toString().padStart(2, '0');
    secondsEl.innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Global Popup Functions for direct/inline invocation
window.showUpsellPopup = function(e) {
    if (e) e.preventDefault();
    console.log("showUpsellPopup called.");
    const popupOverlay = document.getElementById('upsell-popup');
    if (popupOverlay) {
        popupOverlay.style.display = 'flex';
    } else {
        console.error("upsell-popup element not found!");
    }
};

window.closeUpsellPopup = function(e) {
    console.log("closeUpsellPopup called.");
    const popupOverlay = document.getElementById('upsell-popup');
    if (popupOverlay) {
        // If triggered by click event, only close if clicking the overlay itself (not children)
        if (e && e.target && e.target !== popupOverlay) {
            return;
        }
        popupOverlay.style.display = 'none';
    }
};

// FAQ Accordion & Popup Logic Initialization
function init() {
    console.log("Initializing accordion and popup scripts...");

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Upsell Popup Logic
    const btnBasicPlan = document.getElementById('btn-basic-plan');
    const popupOverlay = document.getElementById('upsell-popup');

    if (btnBasicPlan && popupOverlay) {
        console.log("Upsell popup buttons and overlay elements found in DOM. Binding click event.");
        btnBasicPlan.addEventListener('click', window.showUpsellPopup);
        popupOverlay.addEventListener('click', window.closeUpsellPopup);
    } else {
        console.warn("Could not find btn-basic-plan or upsell-popup in the DOM.");
    }
}

// Run init based on document readyState
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Book Slider Auto-Rotation
(function initBookSlider() {
    function startSlider() {
        const slides = document.querySelectorAll('.book-slide');
        if (slides.length === 0) return;

        let currentIndex = 0;

        setInterval(function () {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startSlider);
    } else {
        startSlider();
    }
})();
