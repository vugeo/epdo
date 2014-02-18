#!/bin/bash

TEMPLATE="sugarcube"
FILENAME="index"

# Locate all Twee files in the current directory and pass them
# to the twee command with the chosen target and HTML filename.

find . -name '*.tw' #for print output only
twee -t $TEMPLATE *.tw > $FILENAME.html

# Now open the resulting file in the default HTML application.
# (Expected to work on OS X only.)

open $FILENAME.html

# Note: Sugarcube is not compatible with the back button removing
# macro...