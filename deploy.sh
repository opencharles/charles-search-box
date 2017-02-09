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

set -e
set -o pipefail

TOKEN=$(cat /home/r/deployment.txt)
# deploy the build charles.min.js
#SHA_BUILD=$(curl 'https://api.github.com/repos/amihaiemil/amihaiemil.github.io/contents/js/charles/charles.min.js' | jq '.sha')
#NEW_BUILD=base64encodednewcss

#curl -H "Authorization: token ${TOKEN}" -X PUT -d '{"message": "deploy new build", "sha": ${SHA_BUILD}, "content": "${NEW_BUILD}"}' https:// #api.github.com/repos/amihaiemil/amihaiemil.github.io/contents/js/charles/charles.min.js

# deploy the css file charles_light.css
SHA_CSS_LIGHT=$(curl 'https://api.github.com/repos/amihaiemil/amihaiemil.github.io/contents/css/charles/charles_light.css' | jq '.sha')
NEW_LIGHT_CSS=$(openssl enc -base64 <<< $(cat src/css/charles_light.css) | awk 'BEGIN{ORS="\\n";} {print}')
curl -H "Authorization: token ${TOKEN}" -X PUT -d "{\"message\": \"deploy css light\", \"sha\": ${SHA_CSS_LIGHT}, \"content\": \"${NEW_LIGHT_CSS}\"}" https://api.github.com/repos/amihaiemil/amihaiemil.github.io/contents/css/charles/charles_light.css

