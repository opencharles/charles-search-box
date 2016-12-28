<img alt="logo" src="http://www.amihaiemil.com/images/logo_mic_js.PNG" width="60" height="60"/>
# charles-search-box
[![Build Status](https://travis-ci.org/opencharles/charles-search-box.svg?branch=master)](https://travis-ci.org/opencharles/charles-search-box)

## ReactJS search box component

Component for search designed to call a REST endpoint for search.
Shows paginated results in widget-like manner. Layout of the JSON response to follow.

To use this you simply have to add a script on the page where you want the search box to show. You have to specify the two endpoints to call.

## Build

After you take down the project, simply go in its root folder and run the following commands

```
$ npm install
$ npm run dev
```

A webpack development server will start. Go at ``localhost:8080`` in your browser. There is currently some test data in some files so you can see how the widget works.
