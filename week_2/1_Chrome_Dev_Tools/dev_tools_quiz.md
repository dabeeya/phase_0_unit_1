#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

* What's the quick key for your OS to spawn the Dev Tools inspector?

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

1)  Real time editing: Elements Tab. From the elements tab you can see the HTML code and CSS side by side. You also have the power to make any changes you would, but keep in mind that the changes will not be saved onto the main web page, but mainly just for your own personal use.
2)  JavaScript Debugging: Console Sources Tab. From the Console, you can find which element seems to be creating your problem. Then as you go on to the sources tab, you can pause the element from there and make any necessary changes. 
3)  Performance Optimization: Networks, Timeline and Profiles Tab. With the network tab, you can see everything the webpage requests of the code and see the method, status, type, initiator, size and time. The profile tab allows you to collect the JavaScript CPU profile or take a heap snapshot. You are also able to compare different snapshots as well.
4)  The quick key to open up Dev Tools Inspector is to right click on a specific element you want to inspect and select Inspect Element. Or you can click on the magnifying glass as well and click an element you want to inspect.
5)  The current background color for www.postmachina.com is #0b0f11. 
6)  The largest image is 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png.  It is the image that listed as featured events on the web page.
7)  The way to find the largest image is to open up Dev Tools and go to the networks tab. Then, you would need click on the clear button and refresh the web page. Once refreshed, you will get a whole list of things that were requested. From there, you would sort the file size from largest to smallest and find the largest image. The size of the image is 316 KB.
8)  The easiest thing to do would probably have to be to minimize the payload. That would entail to minify any of the code that was written to create the webpage.  If you minify the CSS portion only, you can save 4.6 KiB.

link to Codeschool score and postmachina image http://imgur.com/a/uzdf2