<img alt="logo" src="http://www.amihaiemil.com/images/logo_mic_js.PNG" width="60" height="60"/>

## charles-search-box

[![DevOps By Rultor.com](http://www.rultor.com/b/opencharles/charles-search-box)](http://www.rultor.com/p/opencharles/charles-search-box)
[![Build Status](https://travis-ci.org/opencharles/charles-search-box.svg?branch=master)](https://travis-ci.org/opencharles/charles-search-box)

## ReactJS search box component

Front-end search widget of [charles-rest](https://www.github.com/opencharles/charles-rest).
To use this, add the following script to your page, **right before closing the body tag**.

Make sure you instruct [@charlesmike](https://www.github.com/charlesmike) to index your github site first.

```
<script
   type="text/javascript"
   id="charlesscript"
   repo="your/github-repo"
   src="https://www.amihaiemil.com/js/charles/charles.min.js">
</script>
```

Where ``your/github-repo`` is the fullname of the indexed repository.

The script will render the whole widget in a div with id ``charles-search``. If the
div is not present on the page, it will create and place it right after the script tag - **you will probably have to write a little CSS to position the widget (the charles-search div) on the page**.

Here is an example of how the widget works: http://www.amihaiemil.com

## Issues

Found any bug/issue or simply thought of an improvement? Please, open a ticket right here, in the repo's issue tracker.

## Customization

  * **Size** of the page customizable with the "size" parameter -- defaults to 3
  * **Placeholder** of the input field customizable with the "placeholder" parameter -- defaults to "Search as you type..."

## Build

After you take down the project, simply go in its root folder and run the following commands

```
$ npm install
$ ./node_modules/.bin/webpack
```

Even without building, you can open index.html to see how it works (there is a build saved in the repo, not necessarily the latest).

## Contribute

Contributors are [welcome](http://www.amihaiemil.com/2016/12/30/becoming-a-contributor.html)

1. Open an issue regarding an improvement you thought of, or a bug you noticed, or asked to be assigned to an existing one.
2. If the issue is confirmed, fork the repository, do the changes on a separate branch and make a Pull Request.
3. After review and acceptance, the PR is merged and closed.
4. You are automatically listed as a contributor on the repo and the project's site (to follow)
