---
title: Intro to Programming should just be logic puzzles
layout: default
permalink: /blog/logic-puzzles
---
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
		<meta property="og:description" content="Personal perfolio website of Steven Sawtelle">
		<meta property="og:site_name" content="Intro to Programming should just be logic puzzles" />
		<title>Intro to Programming should just be logic puzzles - Steven Sawtelle</title>
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

<body>

<div class="content" style="width: 95%;margin: 0 auto">
<h2><i>Intro to Programming Should Just Be Logic Puzzles</i></h2>

<p>Ask a programmer what language they think that a newcomer’s first programming class should be taught in and you’ll have nearly as many different answers as there are programming languages. The reality is that we’re still not that good at knowing how to teach people how to code. Python gets out of your way and reads almost like English, while Java has more industry adoption and forces you to learn types. The legendary Edsger Dijkstra once wrote a plea to the budget council (https://www.cs.utexas.edu/users/EWD/transcriptions/OtherDocs/Haskell.html) on why Haskell should be kept over Java, which he viewed a “mess”. In it, he made one important point that I want to focus on here:</p>

<p>“It is not only the violin that shapes the violinist, we are all shaped by the tools we train ourselves to use, and in this respect programming languages have a devious influence: they shape our thinking habits."</p>

<p>It is this emphasis on “thinking habits” that almost all of what being a “good” programmer boils down to, in my view. You can spend years learning to code, but if you have a fundamentally poor set of tackling new problems, you will still find yourself ineffective. This fact is what has driven the highly controversial rise of Leetcode-style interviews, where toy problems are given to candidates in an attempt to suss out in one hour their fundamental ability to solve problems.</p>

<p>With how clear it is that having your brain set up to tackle problems effectively is important, I find it incorrect to argue Haskell vs Java or C++ vs Python. Instead, I propose that we start programmers out with no programming at all, and instead give them logic puzzles as their intro.</p>


<p>While not limited to only Japanese creators, the name “Japanese logic puzzle” is commonly used for a specific type of grid-based puzzle that tickle the brain in almost the exact way that a good programming problem does. While I won’t go into detail on it here, a really solid example I would give for this type of puzzle is one called Slitherlink (https://en.wikipedia.org/wiki/Slitherlink). Popularized by the same company that brought sudoku to the masses, Slitherlink is a relatively simple game: create one contiguous loop that fills a board with all of the numbered squares adjacent to the corresponding number of line segments of the loop. It takes less than 10 minutes to explain the rules an go through an example.</p>

<p>See <a class="linked" rel="nofollow" href="https://www.conceptispuzzles.com/index.aspx?uri=puzzle/slitherlink" alt="slitherlink rules">here</a> for the rules and <a class="linked" rel="nofollow" href="https://www.conceptispuzzles.com/index.aspx?uri=puzzle/slitherlink/techniques" alt="slitherlink techniques">here</a> for some strategies to start solving puzzles. <a class="linked" rel="nofollow" href="https://www.brainbashers.com/showslitherlink.asp" alt="slitherlink">Play the puzzle directly online here!</a></p>

<p>While it may seem to just be a game at first glance, any programmer who does the puzzle will find themselves feeling almost as if they are programming. One part of the puzzle forms, another part of the puzzle forms, you synthesize your mental model of how different parts interact, and the lines blur on whether you’re solving a Slitherlink or optimizing a sorting algorithm. When I do a Slitherlink, the corners of my brain that are satisfyingly itched are identical to what happens I solve a good coding section at work.</p>

<p>I think there are a number of benefits that starting students with puzzles would provide, but the single biggest advantage I would argue is the increase in accessibility it would give our field. I cannot tell you how many times I have told people I am a programmer and they tell me “Oh I hated math, I could never!” (It’s also a reason I generally dislike the term software engineer over programmer, as equating what I do with the work of something like a civil engineer feels extremely disingenuous to both parties). This is made even worse by the fact that our field has a special problem with diversity, and the type of student to say they didn’t like math is often the exact type of representation that would make our whole field stronger for being included. If we were to be honest about how little math is needed for 99% of us (I rarely use anything more than basic geometry/algebra) and instead focus on the absolute thrill of working through a difficult problem piece by piece until crescendoing it into a beautiful solution, we would surely do a much better job of hooking in students who would otherwise give up on the monotony of dealing with compiler errors that read like gibberish to them.</p>

<p>There are plenty of programmers all too happy to gatekeep the field (looking at you, Stack Overflow), and in the absence of a strong counter impulse, they will win by default. Not only would puzzles be an awesome way to start your first programming class, they would show you that this big daunting major is actually fundamentally easy at its core. Just like with a Slitherlink puzzle, take the code logically and piece by piece, and you’ll find a beautiful solution in no time. In fact, why not make your first big project an automatic solver for the logic puzzle you started your course working on manually?</p>

<p>Remember, the violinist is altered by their choice of violin. A professional’s mind is unable to be altered by the tools they use. Rather than nitpick the specific language we start students on (which matters just a little bit), let’s get them addicted to, and very good at, solving tricky problems (which matters a lot bit).</p>

</div>
</body>