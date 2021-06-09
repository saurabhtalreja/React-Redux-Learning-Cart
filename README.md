# Understanding Redux
## Thanks to [Ronit Mukherjee](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbm1UTkloeWY0WWlVQ2VtQmtOdVdBcVhneWVtUXxBQ3Jtc0ttQWxrVm9zck9oS1VaNGJJUTNDdWJDcHlqYWI5dDAycWZiUG1PemVTZFg2Zi1xanBzdTBRTUJIdmxJT0xLYkI0dlhGdkYwY1hDZHByMl9KZ05BZ3RHMG1HSzdQZWFuV3d6S1hOUHF5UEJRZ0JRZGZUMA&q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmukherjeeronit%2F) for creating this amazing free [Redux Playlist](https://www.youtube.com/watch?v=GGxK3oKimLA&list=PLZjjdd9-SJS0UiiJ0-dYk_PpI5GjYQ-Eb&t=0s)

Basic Redux Terminology
* Actions - Calls all reducers, object with properties type & payload
* Reducers - Pure function, takes state and action as param
* Store - State Manager, wrap react code with <Provider store={yourStore}> </Provider>
* Dispatch - Dispatches the action
* Connect/useSelector - Both of them expose your state to the component, connect uses mapsToProps and useSelector gives state at any given point.

### Products list is rendered using Functional Components and used useSelector hook to get state.
### Whereas Cart functionality is implemented using class based components and used methods such as mapStateToProps & mapDispatch to props to get access of state and Dispatch

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
