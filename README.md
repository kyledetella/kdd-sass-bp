# KDD SASS Boilerplate
Front-end dev stack for rapid upstart & prototyping. Project includes optional installation of [ZURB's Foundation](http://foundation.zurb.com).

* * *

### Installation Instructions
Dependencies declared in <code>package.json</code> will be installed by running:

    $ npm install

Once dependencies have been installed, `cd public` and run:

    $ compass install foundation
    
Make sure to uncomment these directories from the .gitignore file:
    
    public/css
    public/js/foundation
    public/js/vendor