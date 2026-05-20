let mode = 'encrypt';
let cipher = 'caesar';

function setMode(m) {
  mode = m;

  document.getElementById('btn-encrypt').classList.toggle('active', m === 'encrypt');
  document.getElementById('btn-decrypt').classList.toggle('active', m === 'decrypt');

  document.getElementById('input-label').textContent = m === 'encrypt' ? 'Text to encrypt' : 'Text to decrypt';
  document.getElementById('output-label').textContent = m === 'encrypt' ? 'Encrypted output' : 'Decrypted output';
  document.getElementById('input-text').placeholder = m === 'encrypt' ? 'Type your message here...' : 'Paste encrypted text here...';

  processText();
}

function setCipher(c) {
  cipher = c;

  ['caesar', 'base64', 'reverse', 'rot13'].forEach(id => {
    document.getElementById('c-' + id).classList.toggle('active', id === c);
  });

  document.getElementById('shift-row').style.display = c === 'caesar' ? 'flex' : 'none';

  const info = {
    caesar: [
      'How Caesar cipher works',
      'Shifts each letter in the alphabet by a fixed number of positions. For example, with shift 3: A becomes D, B becomes E. One of the oldest encryption techniques.'
    ],
    base64: [
      'How Base64 works',
      'Encodes binary data into ASCII characters using a set of 64 printable characters. Widely used to encode data in URLs, emails, and web tokens like JWT.'
    ],
    reverse: [
      'How reverse cipher works',
      'Simply reverses the order of all characters in the message. Easy to break but a good introduction to the concept of text transformation.'
    ],
    rot13: [
      'How ROT13 works',
      'A special case of Caesar cipher with a fixed shift of 13. Applying it twice returns the original text. Commonly used in online forums to hide spoilers.'
    ]
  };

  document.getElementById('cipher-title').textContent = info[c][0];
  document.getElementById('cipher-desc').textContent = info[c][1];

  processText();
}

function caesarShift(text, shift, decrypt) {
  if (decrypt) shift = (26 - shift) % 26;
  return text.split('').map(ch => {
    if (/[a-z]/.test(ch)) return String.fromCharCode(((ch.charCodeAt(0) - 97 + shift) % 26) + 97);
    if (/[A-Z]/.test(ch)) return String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26) + 65);
    return ch;
  }).join('');
}

function processText() {
  const text = document.getElementById('input-text').value;
  const shift = parseInt(document.getElementById('shift-slider').value);

  if (!text.trim()) {
    document.getElementById('output-text').textContent = '—';
    return;
  }

  let result = '';

  try {
    if (cipher === 'caesar') {
      result = caesarShift(text, shift, mode === 'decrypt');
    } else if (cipher === 'base64') {
      result = mode === 'encrypt'
        ? btoa(unescape(encodeURIComponent(text)))
        : decodeURIComponent(escape(atob(text.trim())));
    } else if (cipher === 'reverse') {
      result = text.split('').reverse().join('');
    } else if (cipher === 'rot13') {
      result = caesarShift(text, 13, false);
    }

    document.getElementById('output-text').textContent = result;
  } catch (e) {
    document.getElementById('output-text').textContent = 'Invalid input for this cipher.';
  }
}

function copyOutput() {
  const out = document.getElementById('output-text').textContent;
  if (out && out !== '—') {
    navigator.clipboard.writeText(out).catch(() => {});
  }
}
