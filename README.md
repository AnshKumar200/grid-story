# Grid Story
I've always been fascinated by large-scale collaborative projects. The idea of thousands of people interacting on one shared canvas in real-time presents a huge engineering challenge: how do you make that experience feel instant and seamless for everyone? I built Grid Story specifically to tackle that experience head-on.

## Getting Started
Follow these instructions to set up and run the project locally.

### Prerequisites
-   [npm](https://github.com/npm/cli)

### 1. Clone the Repository
```bash
git clone https://github.com/AnshKumar200/grid-story.git
cd grid-story
```

### 2. Run Frontend
Frontend code in in the root directory.
```bash
npm install
npm run dev
```

### 3. Run Backend
Backend code is in the `/api` directory. Open a seperate terminal tab.
First, create `.env` file in the `/api` directory and add the variables there.
```bash
cd api
touch .env
```
Add the following variables to the `.env` file:
```
DATABASE_URL=
```

After that, run the backend server.
```bash
npm install
npm run dev
```
