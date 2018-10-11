# Mavenhive Website

## Setup

* Unzip the file or clone the repo and run `npm install` to install all the dependencies. 
* Run `npm run build` to build the site ( or `npm run develop` to start the development mode)

## Libraries used

* [GatsbyJS](https://www.gatsbyjs.org/) - A static site generator for React
* [TachyonsCSS](https://tachyons.io/) - A functional CSS Toolkit
* [NetlifyCMS](https://www.netlifycms.org/) - As an npm package that takes care of the admin/CMS part

## Files/Folders of importance

* `src/pages` - To create a page, add a markdown file to this folder. The route is automatically added with the file name. Eg. `about.md` compiles to `/about/index.html`
* `src/content` - This folder has content in `JSON` format for all the pages.
* `static/img` - Any image uploaded via the CMS gets added here.
* `static/admin` - This has the config for NetlifyCMS. You can add fields for pages and also assign widgets to each field. [More info here](https://www.netlifycms.org/docs/widgets/)

## How are all these connected and what happens behind the scenes?

1. When one edits the content on NetlifyCMS, those files(JSON) are pushed to `src/content` folder. It understands what repo to use and where to dump content based on the `static/admin/config.yml` file
2. Gastby's responsibility is to build the site and dump it into `public` folder. This happens whenever we run `npm run build`. The JSON files from `src/content` folder are used to build each page.
3. Netlify just runs the `npm run build` command on every push to `master` branch and serves the `public` folder