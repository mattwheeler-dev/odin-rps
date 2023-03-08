# odin-rps
Odin Project - Rock Paper Scissors

This project is meant to help you practice introductory JS.
It was supposed to be all done in the browser console, which would admittedly be faster and easier to make.

I decided to make a page of it instead, and to try and make it fun with images. 

This was once again excellent Git practice, and definitely helped me with writing JS as well. 

I actually got stuck on what ended up having a CSS solution.
- After adding the images, the divs were no longer providing the target.id when I clicked on them, unless I clicked inside the div but outside of the img. 
- I was stuck for longer than I'd like to admit, but solely because I was searching for JS solution, or a mistake in my JS. 
- Turns out my assumption of the child element blocking the parent from the event listener was correct, so that led me to my CSS. 
- I went straight to my img styles and added "pointer-events: none;". This allows the cursor to ignore the img and click on whatever is "behind" it so to speak. Now it works fine and everyone's happy, hope you enjoy.

~Thanks
