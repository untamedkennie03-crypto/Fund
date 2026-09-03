// Toggle navigation tabs on mobile tap
function toggleTabs() {
    const navTabs = document.getElementById('navTabs');
    navTabs.classList.toggle('active');
}

// Automatically close tabs when a link is clicked
function closeTabs() {
    const navTabs = document.getElementById('navTabs');
    if (window.innerWidth < 768) {
        navTabs.classList.remove('active');
    }
}

// Mock M-Pesa STK Push Execution
function handleStkPush(event) {
    event.preventDefault();
    const phone = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    const statusDiv = document.getElementById('stkStatus');
    const btn = document.getElementById('stkBtn');

    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Initiating Request...`;
    statusDiv.style.display = 'block';
    statusDiv.style.background = 'rgba(255, 215, 0, 0.1)';
    statusDiv.style.color = '#ffd700';
    statusDiv.innerText = `Connecting to Safaricom Daraja API for ${phone}...`;

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-bolt"></i> Send STK Push`;
        statusDiv.style.background = 'rgba(37, 211, 102, 0.1)';
        statusDiv.style.color = '#25d366';
        statusDiv.innerText = `STK Push sent to ${phone}. Enter your M-Pesa PIN on your handset to complete KES ${amount} payment.`;
    }, 2500);
}

// Contact form submission handler
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! Kenn Kibate will get back to you shortly.');
    document.getElementById('contactForm').reset();
}
