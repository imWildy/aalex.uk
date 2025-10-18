const peerConnection = new RTCPeerConnection({ iceServers: [] });
  const el = document.getElementById('ip')
  peerConnection.createDataChannel('');

  peerConnection.createOffer()
    .then((offer) => peerConnection.setLocalDescription(offer))
    .catch((error) => console.log(error));

  peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    el.textContent = event.candidate.address;
  } else {
    el.textContent = 'unknown (nice opsex)';
  };
};