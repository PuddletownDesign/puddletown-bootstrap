# Puddletown UI Bootstrap 👢

UI development environment with npm scripts, built with gulp & webpack. Produces fully optimized dist directories for templating.

## Getting started

Install all modules, set up a fresh git repo and start the server.

```bash
npm run setup
```

and navigate to:

<http://localhost:8080>

The project for dev and testing is built to the `build` directory. 

Make all of your edits in the `src` directory.

### running the application again after stopping server

```bash
npm start
```

### To build the final project build for distribution/ templating

```bash
npm run build
```

The `dist` directory will be created with the output

## Editing the CSS

SCSS is transpiled into CSS. Just edit the scss files.

They are structured as follows. Usually the 0000.scss is a good place to start. Just trash everything you don't want and build what you do.

```bash
├── _0000.scss # the default style sheet (mobile first) 
├── _0480.scss # the style sheet that begins at the 480px width breakpoint
├── _0760.scss # 760px width breakpoint
├── _0980.scss # etc
├── _1200.scss
├── _1400.scss
├── _1600.scss
├── includes
│   ├── _colors.scss # all color info
│   ├── _fonts.scss # all font info
│   ├── _mixins.scss # all SASS mixin info
│   ├── _plugins.scss # just dump all plugin code here
│   ├── _reset.scss # keeps things clean in between browsers
│   ├── _responsive.scss # master routing for all the top level scss files
│   └── _typography.scss # includes with all typography info
└── styles.scss # master scss routing file
```

## Editing the javascript

Javascript is bundled by webpack and babel is set for es5 - es7. Trash what you don't need and write exactly what and how you want.

## To run tests on your javascript using mocha

```bash
npm test
```

**Enjoy the SASS and bundled javascript!**
