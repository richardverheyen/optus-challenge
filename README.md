# Optus Coding Challenge

Make a Progress bar app using React, Typescript good practices.
I'm going to take this as an opportunity to use Vite templates to quickly pull together some SSR, and figure out how to use vitest instead of jest to write my tests.

## Steps taken:

- `npm create vite@latest`
- `create-vite-extra`
- `ssr-react`
- `TypeScript + SWC`

- Lock down the node version with a .nvmrc file
- Deploy to vercel https://optus-challenge.vercel.app/
- Then make Vitest run a basic test
- Add a new "deploy" script which first runs our tests and only if successful, builds and deploys our code to the server.
- Run the "deploy" script in vercel when changes are detected in the master branch

Decision made to not copy the '#progress1' naming on the option input. I'd like to show off some unidirectional data flow in this example, if I used the useRef hook and made the Bar components uncontrolled, it would be an uglier solution. So instead I'm going to control the state of the inputs with an array of their values eg: [25, 50, 75]. This way I can demonstrate better scoped components, scope some tests on the Bar component, and make the buttons in the App component a little cleaner.

Built out the rest of the layout using TDD.

Added SCSS and some media queries.

## Live demo can be found at:
https://optus-challenge.vercel.app/

## Steps to host locally, in a linux terminal with the git cli installed globally:
1. `git clone https://github.com/richardverheyen/optus-challenge.git`
2. `cd optus-challenge`
3. `nvm install (or manually install node v18.12.1)`
4. `npm install`

5. `npm run build`
6. `npm run preview`

or

5. `npm run dev`

Happy coding!

### Task description:

#### Example behavior:
https://static.optus.com.au/pei/progress-bars-demo.ogv

#### Requirements:
- solution should implemented by using React Framework, TypeScript is preferred
- Behaviors match the video
- Multiple bars
- One set of controls that can control each bar on the fly
- Can't go under 0
- Can go over 100, but limit the bar itself and change its color
- Display usage amount, centered
- Write tests for your code (hint: TDD strongly preferred)
- Implement a responsive solution: testing it on the mobile, tablet, etc. Getting it working nicely.
- Animate the bar change, and make sure it works well when you tap buttons quickly.
- Publish your code online somewhere: github or something like plnkr.co, jsfiddle.net

#### Bonus points for implementing production quality code, using practices such as:
- Setting it up as a project
- Setting up some automated tools
- Load progress bar
- Version control (git)
- Linting, code quality, etc
- JavaScript/CSS minification, packaging, etc
- Using a CSS preprocessor like SASS/SCSS or Using a CSS as component like styled-components
- Styling it to a production quality level
- SSR solution