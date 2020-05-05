---
title: Algorithmic Puzzle Creation
layout: default
permalink: /blog/algorithmic-puzzle-creation
---
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
		<meta property="og:site_name" content="Algorithmic Puzzle Creation" />
		<title>Algorithmic Puzzle Creation - Steven Sawtelle</title>
		<link rel="stylesheet" type="text/css" href="../../../css/style.css">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137815317-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-137815317-1');
    </script>
</head>

<center><b><h1>wip - Algorithmic Puzzle Creation</h1></b></center>

One of the coolest perks about my current job is that I am in the puzzle team and get to create cool puzzles for employees, interns, and recruiting targets. This is my first year on it and first time creating a puzzle like this, so I wanted to document it a bit. A note before starting: the puzzle idea itself I created with help from others, the algorithmic part refers to finding a possible solution and will be explained later. But first, I need to explain the puzzle.

The puzzle I created is loosely based on the classic game Q*Bert. It is made up of 16 cubes that look like this:

![alt text](/images/algo-puz/cube.png "Simple cube")

Each cube will be filled out by a 3 letter word, one letter per side. The letters are constrained such that the letter on the blue side must be alphabetically smaller than or equal to the letter on the red side, and the letter on the red side must be alphabetically smaller than or equal to the letter on the yellow side. 

For example, this is a valid cube:

![alt text](/images/algo-puz/boy.png "Boy cube")

You can see here that blue (B) <= red (O) <= yellow (Y).

Similarly, this is also valid.

![alt text](/images/algo-puz/boa2.png "Boa cube")

This is to show that <i>where</i> the word starts on the cube doesn't matter, just that it follows the alphabetical properties. For this same reason this would -not- be a valid cube:

![alt text](/images/algo-puz/cat.png "Cat cube")

In fact, as you might be realizing, there is NO way to make cat work for a cube with these constraints. Some 3 letter words are simply unavailable for the purposes of this puzzle!


For the puzzle, I decided that the final grid will look like this:

![alt text](/images/algo-puz/emptygrid.png "empty grid")

And when I filled it out it looked like this:

![alt text](/images/algo-puz/filledgrid.png "filled grid")

Notice that for each cube, the constraint that B < R < Y is satisfied and some reading of them in counterclockwise order makes sense. 







