# HENI APP - Exercise -  Edoardo Fenati

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions and considerations

As I am applying for a more backend oriented position I did a pretty basic app to show the Prints images as required. 
I'll list here below some of my assumptions/thoughts. 

- I have been using default boostrap components/styles
-  I created two main modules: `Core` and `Prints`. The Core contains the basic components for the App and those components
   that might be shared by other modules (like toast messages). `Prints` is the module where the main components and logic of this exercise is.
- Some of the prints had multiple images therefore I decided to use a carousel to show multiple images for the same print
- I used graphQL as requested but without using any external client-side library like Apollo Client. I simply made an axios post request 
  (`./src/APIClient/prints.service.js`)  containing the graphQL query and stored the result in redux. With a library like Apollo Client I could have taken advantage of the cache as well.
- As requested I am displaying the feed of images with pagination (10 images) and a new "page" can be requested clicking the 
  "Load More" button at the bottom of the page. The new set of prints simply get appended to the existing ones.
- Another way of doing this exercise could have been to have real pagination (with page numbers as  buttons), but I thought that having a "continuous feed"
  is more modern.
- I could have made the new page load happening when scrolling to the bottom but for the purpose of this exercise I thought it was
  more transparent to trigger manually the page loading. 
- The page size can be modified in the parameters of the GraphQL query along with the page number and the fields projections. 
- The images links provided by the harvard API allow resizing images when calling the endpoint. I decided to limit 
the width to 400px in order not to download an image larger than the displayed size. One improvement could be to click the image
  to open a full size version of it (maybe in a modal).
- I added some basic error handling as well (using toasts). 
- For the `Prints` module I used a functional approach while for the toast helper I used a more classic (and old) class approach. 


## Available Scripts

In the project directory, you can run:

### `npm start:local`

Runs the app in the development mode.<br>
Open [http://localhost:4444](http://localhost:4444) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
