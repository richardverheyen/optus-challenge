# Optus Coding Challenge

Make a Progress bar app using React, Typescript good practices.
I'm going to take this as an opportunity to use Vite templates to quickly pull together some SSR, and figure out how to use vitest instead of jest to write my tests.

## Steps taken:

`npm create vite@latest`
` - create-vite-extra`
` - ssr-react`
` - TypeScript + SWC`

- Lock down the node version with a .nvmrc file
- Deploy to vercel https://optus-challenge.vercel.app/
- Then make Vitest run a basic test
- Add a new "deploy" script which first runs our tests and only if successful, builds and deploys our code to the server.
- Run the "deploy" script in vercel when changes are detected in the master branch

Decision made to not copy the '#progress1' naming on the option input. I'd like to show off some unidirectional data flow in this example, if I used the useRef hook and made the Bar components uncontrolled, it would be an uglier solution. So instead I'm going to control the state of the inputs with an array of their values eg: [25, 50, 75]. This way I can demonstrate better scoped components, scope some tests on the Bar component, and make the buttons in the App component a little cleaner.