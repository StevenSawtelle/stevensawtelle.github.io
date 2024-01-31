---
title: Steven Sawtelle's Blog
layout: simpler
---

<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
		<meta property="og:description" content="Personal perfolio website of Steven Sawtelle">
		<meta property="og:site_name" content="Steven Sawtelle" />
		<title>Steven Sawtelle</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<script data-goatcounter="https://stevensawtelle.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
</head>

# <center>{{ page.title }}</center>

<ul style="text-align: center;">
  {% for post in site.posts %}
    <div><span class="highlight-container"><span class="highlight">
	<li style="padding: 15px;">
      {{ post.date | date_to_long_string }} - <a href="{{ post.url }}">{{ post.title }}</a>
    </li></span></span></div>
  {% endfor %}
</ul>