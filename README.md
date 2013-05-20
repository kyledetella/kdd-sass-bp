# KDD SASS Boilerplate
Front-end dev stack for rapid upstart & prototyping.
* * *

## Features
  + A node.js server
  + [ZURB's Foundation](http://foundation.zurb.com)
  + AMD Module Javascript architecture
  + Basic Backbone.js scaffold

- - -


### Installation Instructions
**Make sure you have installed [zurb-foundation gem](http://foundation.zurb.com/docs/sass.html) and the [grunt-cli](http://gruntjs.com/getting-started)**

Dependencies declared in <code>package.json</code> will be installed by running:

    $ npm install

Once dependencies have been installed, install Foundation by running:

    $ compass install foundation
    
Make sure to uncomment these directories from the `.gitignore` file:
    
    public/css
    public/js/foundation
    public/js/vendor
