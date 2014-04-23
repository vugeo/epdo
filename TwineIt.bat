set TEMPLATE="sugarcube"
set FILENAME="index"

:: Locate all Twee files in the current directory and pass them
:: to the twee command with the chosen target and HTML filename.

DIR 
find . -name '*.tw' &::for print output only
twee -t $TEMPLATE *.tw > $FILENAME.html

:: Now open the resulting file in the default HTML application.

chrome $FILENAME.html

