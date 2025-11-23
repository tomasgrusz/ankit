# Ankit 🎴

Ankit is an open-source web application for converting text material into formatted Anki-compatible cards.

## 🚀 Demo

[ankit.grusz.dev](https://ankit.grusz.dev)

<img src="https://img.shields.io/website-up-down-green-red/https/ankit.grusz.dev">

## ❤️‍🔥 Our commitment
Ankit is committed to supporting your learning by remaining free and accessible to everyone. Because it’s open-source, anyone can create their own version by forking the project.

Your privacy matters to us - no personal data or usage analytics are collected. Since Ankit’s code is open for inspection, you can trust its transparency, and if you prefer, run your own Ankit web instance offline (see the `▶️ Running Locally` section for details).

We want you to feel empowered to tailor Ankit to your unique needs. All feedback, suggestions, issues, and contributions are warmly welcomed and appreciated!

## 📝 How it works
Ankit uses algorithms to scan through users' formatted text materials to convert them into tables that can be imported into Anki as decks.

Ankit currently supports converting two card formats:
1. (Default) Two-sided cards
2. Multiple-choice cards

### 1. Generate formatted text material
Prepare the study materials you wish to use for generating your flashcards. Make use of Ankit's prompt templates to write your prompt for the LLM of choice. This will ensure that the output will be properly formatted and can be recognised by Ankit. 

### 2. Import into Ankit
Once the flashcards material is ready, you can import it as a `.txt` file into Ankit using the file input. After selecting one of the card formats, Ankit will scan your text and process it into the proper card type. You will see how many flashcards were detected, how they look, and if any format discrepancies were found (missing content, empty options, etc.).

### 3. Edit and Convert
After Ankit finished analyzing the text, you will be able to visually view how the flashcards look like. This makes it easier to review if the format is correct, as LLMs can often generate invalid or incomplete output. Ankit will also autohighlight any discrepancies like missing rows, helping you correct them before they are exported. Flashcards can also be edited - you can specify how correct choices in multiple-choice cards are determined, delete invalid cards, or replace any duplicates.

### 4. Export
When the flashcards satisfy your preferences and have a valid format, they will be converted into an exportable format that can be downloaded and imported into Anki for educational use. Ankit currently supports the following export file formats:
- Comma separated values (`.csv`)
- *[WIP]* Anki packages (`.apkg`)

## ▶️ Runnning Locally
1. Clone the repository

```bash
git clone https://github.com/tomasgrusz/ankit.git
```

2. Navigate to project folder

```bash
cd ankit
```

3. Install all dependencies

```bash
npm install
```

4. Run the development environment

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) within your browser

## 🫂 Contributing
Contributions are the best way to support Ankit's open-source nature and dedication for providing free tools for everyone. For contributing, see `CONTRIBUTING.md` on how to get started.

## 🛡️ License
*License in progress.*

## 👍 Feedback
Have you found a bug on the website? 🐛
> Feel free to open an [Issue](https://github.com/tomasgrusz/ankit/issues) and we will take a look.

Would you like to sponsor Ankit? 💌
> Please contact us at ankit@grusz.dev

Do you have any questions or feedback? ❓
> Create a [Discussion](https://github.com/tomasgrusz/ankit/discussions/categories/general) or drop an email at ankit@grusz.dev
