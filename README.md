# Stormwall Auto Refresh
==============================
## who made this
me and  https://github.com/DeesMood (make sure to follow him)

## background
During my internship arc as an SOC Analysts, we've been using this one particulary troublesome tools 'Stormwall' which is a web application firewall. What I find troublesome about this is that the webapps need to be refreshed manually every time i need to look at it and the logs wont even update on its own, althought it has a built-in autorefresh which works... badly i dare say (tbh we can't even use it, we lack of the SKILLS required)... that's why we usemore of 'POST-PRIMITIVE' approaches.

## what is this
so... this is a automatic manual-refresher for stormwall. this product might (or might not) comes with many features (many features are still in development ofc), BUT at least it's working for now (the main functionality) #atLeastItWorks

## features
omg what could this piece of plugin does? well be happy because this is our hardwork (extra shoutout to chatGPT and Blackbox to help us out). \
main features:
- automatic manual refresh the pages every x minutes / second
- after the refresh it will tp (teleport if you dont know) to the graph so there's no scrolling needed (WOW, yes i know it's gud)
- specify the refresh interval
- save button that actually work to save the value and config!!

thats all for now

## how to install
- download / copy this the script
- open / paste the script in tamper monkey
- refresh or open the stormwall webapps
- setup as you like
- done. enjoy the 'no-more-manually-refreshing-the-stormwall-webapps' freedom (woohoo)

## todo
- actually create the documentation for this (might want to ask the senior about screenshoting our stormwall :V)
- add pps and bps switch for the graph
- add period/time/interval boxes for the graph
- anything that might come in mind