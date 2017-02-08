#!/bin/bash
# Script to deploy the final build and some css files
# to the repo amihaiemil/amihaiemil.github.io
# That repo is a website hosted on Github pages and clients will fetch
# the build and css from there.
#
# It uses the Github API to PUT the files.
# We are not using git because rultor has a hard time cloning and using other
# repos (we need to use SSH and the server doesn't trust the host, or HTTPS, where we
# are prompted for user and password.)


# script here...

