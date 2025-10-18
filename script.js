const el = document.getElementById('ip');
const pc = new RTCPeerConnection({
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});

pc.createDataChannel('test');

pc.onicecandidate = (event) => {
  if (event.candidate && event.candidate.candidate) {
    const candidate = event.candidate.candidate;
    const ipMatch = candidate.match(/(\d{1,3}(\.\d{1,3}){3})/);
    if (ipMatch) {
      el.textContent = ipMatch[1];
    }
  } else if (!event.candidate) {
    if (el.textContent === '') el.textContent = 'unknown';
  }
};

pc.createOffer()
  .then((offer) => pc.setLocalDescription(offer))
  .catch(console.error);
