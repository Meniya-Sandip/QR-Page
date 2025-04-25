function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}
function handleCopy() {
    const upi = document.getElementById("upiID").innerText;
    navigator.clipboard.writeText(upi);
    showToast("UPI ID copied !");
}

function handleDownload01() {
    showToast("Please Wait.....");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assents/QR02.jpg"; // Replace with the actual path to your QR code image
        link.download = "FampayQR.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handleDownload02() {
    showToast("Please Wait.....");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assents/QR03.jpg"; // Replace with the actual path to your QR code image
        link.download = "GpayQR.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handleDownload03() {
    showToast("Please Wait.....");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assents/QR05.jpg"; // Replace with the actual path to your QR code image
        link.download = "BankQR.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handleDownload04() {
    showToast("Please Wait.....");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assents/QR07.jpg"; // Replace with the actual path to your QR code image
        link.download = "PaytmQR.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handleDownload05() {
    showToast("Please Wait.....");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assents/QR09.jpg"; // Replace with the actual path to your QR code image
        link.download = "SmoneyQR.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

const ContactLink = 'https://t.me/SANDIPMBOT'; // Update Contact-Link value

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('paypal-address').textContent = paymentAddresses.paypal;
    document.getElementById('binance-address').textContent = paymentAddresses.binance;
    document.getElementById('coffee-address').textContent = paymentAddresses.coffee;
    document.getElementById('contact-link').href = ContactLink;
});
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

function copyPaymentAddress(method) {
    const address = paymentAddresses[method];
    if (!address) return;
    if (method === 'paypal' || method === 'coffee') {
        window.location.href = address;
        return;
    }
    if (method === 'binance') {
        navigator.clipboard.writeText(address);
        showToast(`${method.charAt(0).toUpperCase() + method.slice(1)} copied!`);
    }
}


