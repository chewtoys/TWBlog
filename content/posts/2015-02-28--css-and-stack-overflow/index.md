---
title: "CSS and Stack Overflow"
author: "Tiffany White"
date: "2015-02-28"
category: "Web Development"
cover: 1.png
---

![](./1.png)

My friend Piper put me on the correct path for my footer with the following code:


```css
footer div {

width: 32%;

background: rgba(113,15,154,0.73);

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

overflow-x: none;

}

footer div p {

max-width: 100%;

margin-left: 0;

padding: 0;

}
```



```css
footer div {

width: 32%;

background: rgba(113,15,154,0.73);

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

overflow-x: none;

}

footer div p {

max-width: 100%;

margin-left: 0;

padding: 0;

}
```

But that left me with some janky (my new favorite word, apparently) formatting that I could not get rid of by myself. Stack Overflow to the rescue!

<strong>So</strong>. I got four answers and tried three before I tried this:


```css
footer {

background: rgba(113,15,154,0.73);

}

footer div {

width: 32%;

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

text-align: center;

}

footer div section {

max-width: 100%;

margin: auto;

padding: 20px;

text-align: center;

}
```

And <strong>boom</strong>. Fixed…but not quite.

There was an issue with the Font Awesome icons that I still can’t get right– the dribble icon was floating right of the footer. I decided to put the icons in a div id container and style it. That has worked– the icons are all at the bottom but no matter what I do, I can’t get them to float left.

Here is the HTML:



```html
<div id="container">
 <a href="https://www.behance.net/twhite412photo"><i class="fa fa-behance-square fa-2x"></i></a>
 <a href="https://www.linkedin.com/in/tiffanyrwhite/"><i class="fa fa-linkedin-square fa-2x"></i></a>
 <a href="https://twitter.com/TiffanyW_412"><i class="fa fa-twitter-square fa-2x"></i></a>
 <a href="https://github.com/twhite96"><i class="fa fa-github fa-2x"></i></a>
 <a href="https://plus.google.com/+TiffanyWhiteWriter"><i class="fa fa-google-plus-square fa-2x"></i></a>
 </div>
```

And the CSS:

```css
footer div container{
 float: left;
}
```




</pre>

<em>Sigh</em>. It is almost 2 am in Pittsburgh and I have been messing with this for the past two days. It isn’t where I want it, regardless of the hinky CSS. I need JavaScript and JQuery to make it not just a static page. Maybe some CSS animations. Don’t know. Yesterday I thought, “this will be up in running in three months, tops, regardless of if I’m ready to freelance”. Today I’m back down to earth.