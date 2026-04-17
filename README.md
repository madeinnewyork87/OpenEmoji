✨ OpenEmoji - A Polished Emoji Browser

OpenEmoji is a lightweight, open-source emoji browser built for speed and visual clarity. It features a custom-built compiler that generates a local emoji database from official Unicode registries, ensuring you always have the most up-to-date icons without bloating your frontend bundle.

😎 Try it now

https://madeinnewyork87.github.io/OpenEmoji/OpenEmoji.html

🚀 Features

Full Library Compiler: A Node.js script that fetches thousands of emojis and groups them into clean, high-level categories.

Modern Dark UI: A sleek, responsive interface built with Tailwind CSS.

Searchable: Real-time filtering by emoji name.

One-Click Copy: Instant clipboard copying with user feedback.

Universal Rendering: Integrated Google Noto Color Emoji font fallback to fix the "empty box" issue on older operating systems.

Scroll-Spy Navigation: The sidebar automatically highlights the category you are currently viewing.

🛠️ Tech Stack

Frontend: HTML5, Vanilla JavaScript, Tailwind CSS.

Icons: Lucide Icons.

Data: Node.js (for the compiler script).

Fonts: Google Noto Color Emoji.

📥 Getting Started

1. Clone the repository

2. Generate the Emoji Library

Before running the browser, you need to compile the latest emoji data.

node compiler.js


This will create an emoji_data.json file in your project root.

3. Run the Application

Because the browser uses fetch() to load the JSON data, you must serve the files via a local server (you cannot simply double-click the HTML file).

Option A: Using Node.js (npx)

npx serve


Option B: Using Python

python3 -m http.server 8000


Open your browser to http://localhost:8000 (or the port provided).

📂 Project Structure

index.html: The main frontend application.

compiler.js: Node.js script to fetch and process Unicode emoji data.

emoji_data.json: The generated database (ignored by git or generated locally).

🤝 Contributing

Contributions are welcome! If you'd like to improve the UI, add new categories, or optimize the compiler:

Fork the project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📜 License

Distributed under the MIT License. See LICENSE for more information.

Built with Gemini
