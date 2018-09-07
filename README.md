# Restaurant Reviews FEND Project 5

## Table of Contents

* [How-to-Run](#How-to-Run)
* [Dependencies](#Dependencies)
* [Known-Bugs](#Known-Bugs)
* [Contributing](#Contributing)

## How-to-Run

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, the web page will then load. restaurants can be filtered using the pull-down menues and clicking the (View Details) button will present reviews and restaurant information.

## Dependencies

This project requires normalize.css v8.0.0, leaflet@1.3.1, and python for a local server.

## Known-Bugs

None.

## Contributing
 This code was based on starting code provided by Udacity and is found [here](https://github.com/udacity/mws-restaurant-stage-1). The rest of the code was written by Brian Reinert with help from mentors and fellow students at Udacity. Help for the service worker was found at [WebFundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/).