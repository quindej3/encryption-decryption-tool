# encryption-decryption-tool
Interactive cryptography tool demonstrating classic encryption techniques — built with vanilla JavaScript
Encryption & Decryption Tool
A browser-based tool that lets users encrypt and decrypt messages using four classic cipher methods. Built to demonstrate core cryptography concepts in an interactive and educational way.
Live Demo: Open index.html in any browser — no installation needed.

Features

Caesar Cipher — shift letters by any value from 1 to 25
Base64 Encoding — used in real-world web tokens, URLs, and emails
Reverse Cipher — reverses the order of characters in the message
ROT13 — fixed shift of 13, applying it twice returns the original text
Encrypt and Decrypt modes for all ciphers
Copy output to clipboard with one click
Explanation of how each cipher works


Tech Stack
TechnologyPurposeHTMLPage structureCSSStyling and layoutJavaScriptEncryption logic and interactivity

How to Run

Download or clone the repository
Open index.html in your browser
No server or installation needed


Project Structure
encryption-tool/
├── index.html    # Main page structure
├── style.css     # Styling
├── script.js     # Cipher logic and interactivity
└── README.md     # Project documentation

Ciphers Explained
Caesar Cipher — one of the oldest known encryption techniques. Each letter is shifted by a fixed number of positions in the alphabet.
Base64 — not technically encryption but widely used encoding. Converts binary data into printable ASCII characters. Found in JWTs, email attachments, and data URLs.
Reverse Cipher — reverses the entire string. Simple but demonstrates the concept of text transformation.
ROT13 — rotates letters by 13 positions. Since the alphabet has 26 letters, applying ROT13 twice restores the original message.

Author
Justin Quinde

GitHub: https://github.com/quindej3
Email: quindej3@montclair.edu


License
This project is open source and available under the MIT License.
