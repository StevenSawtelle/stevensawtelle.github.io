Repository for site (hosted on GitHub Pages) for Steven Sawtelle, found at www.stevensawtelle.com. I wanted a spot to serve as a hub for interested people and blog my thoughts, so here it is.

# Build

`sudo gem install jekyll bundler`
you may need to `sudo gem install bundler -v 2.4.22`
`bundle install`
`bundle exec jekyll serve`

#How to bring over politicle/kimzeyle build

Go into the repo, run `npm run build`. Then copy `build` folder from that command
over to the `puzzles` folder of this repo, but rename it politicle/kimzeyle as needed.
Finally, go into the generated `index.html` file in the build and change absolute path references to relative path references on the imports.

# Deploy

Pushing to Github master branch should auto deploy the Github pages site

Background CSS animation found at https://codepen.io/ksenia-k/pen/jXbWaJ

Text highlight found at https://alvarotrigo.com/blog/css-highlight-text/