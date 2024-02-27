Repository for site (hosted on GitHub Pages) for Steven Sawtelle, found at www.stevensawtelle.com. I wanted a spot to serve as a hub for interested people and blog my thoughts, so here it is.

# Build

`sudo gem install jekyll bundler`
you may need to `sudo gem install bundler -v 2.4.22`
`bundle install`
`bundle exec jekyll serve`

# Deploy

Pushing to Github master branch should auto deploy the Github pages site

# How to bring over politicle/kimzeyle build

Go into the repo, run `npm run build`. Then copy `build` folder from that command
over to the `puzzles` folder of this repo, but rename it politicle/kimzeyle as needed.
Finally, go into the generated `index.html` file in the build and change absolute path references to relative path references on the imports.

# Updating last read book

I was originally going to have a Github action kick off a daily job that updates `storygraph_cached_profile.html`,
but then realized that the page I was using `https://app.thestorygraph.com/books-read/stevensawtelle` requires a login.
I don't want to commit my login cookies, which would time out anyway, so for now I guess this is a manual process.
(Goodreads has an actual API you can call ugh). To update this page:
- log in to https://app.thestorygraph.com/users/sign_in
- go to https://app.thestorygraph.com/books-read/stevensawtelle with the Network browser inspector tab open
- `copy as cURL` the first request, paste that in your terminal, and add `-o storygraph_cached_profile.html` to the end, so it 
overrides the local version of the file
- add/commit the changes

# Attributions

Background CSS animation found at https://codepen.io/ksenia-k/pen/jXbWaJ

Text highlight found at https://alvarotrigo.com/blog/css-highlight-text/