# TODO-List


A simple, modern task management web app built with TypeScript, Tailwind CSS & Vite.
About
This project is a lightweight “to-do list” application that allows users to create, view, edit and delete tasks. It’s built using modern front-end tooling and styling for a clean, responsive UI.
Features
Create new tasks
Edit existing tasks
Delete tasks
Mark tasks as completed (if implemented)
Responsive UI for desktop & mobile
Built using TypeScript for type safety
Styled with Tailwind CSS for utility-first styling
Bundled & served with Vite for fast development and build performance
Tech Stack
TypeScript – for type safety and modern JavaScript features
Tailwind CSS – for styling and responsiveness
Vite – fast build & dev server
HTML/CSS/JavaScript – standard web technologies
Getting Started
Prerequisites
Node.js (v14+ recommended)
npm or yarn
Installation
Clone the repo:
git clone https://github.com/anuragthippani1/TODO-List.git  
cd TODO-List  
Install dependencies:
npm install  
or
yarn  
Start the dev server:
npm run dev  
The app should now be accessible at http://localhost:3000 (or whatever port Vite uses).
Build for production:
npm run build  
This produces the dist/ folder ready to deploy.
Usage
Open the app in your browser.
Use the input field to add a new task.
Each task will appear in the list below.
(If supported) Click “edit” on a task to change its text.
Click “delete” to remove a task.
Mark a task as completed by checking it (if such a feature exists in your implementation).
The UI adapts to different screen sizes thanks to Tailwind CSS.
Folder Structure (example)
├── dist/                # production build output  
├── src/                 # source files  
│   ├── index.html       # entry HTML  
│   ├── main.ts          # app entry point  
│   ├── components/      # UI components (if any)  
│   ├── styles/          # Tailwind / custom styles  
│   └── …  
├── package.json         # npm config & scripts  
├── tailwind.config.js   # Tailwind config  
├── vite.config.ts       # Vite config  
└── tsconfig.json        # TypeScript config  
Contributing
Contributions are welcome! If you’d like to add features (e.g., persistent storage using local storage or a backend API, drag-and-drop ordering, due-dates, filters), please feel free to submit a pull request or open an issue.
License
This project is open-source and available under the MIT License (or whichever license you choose to include).
