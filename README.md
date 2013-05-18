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
Dependencies declared in <code>package.json</code> will be installed by running:

    $ npm install

Once dependencies have been installed, `cd public` and run:

    $ compass install foundation
    
Make sure to uncomment these directories from the `.gitignore` file:
    
    public/css
    public/js/foundation
    public/js/vendor