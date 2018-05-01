---
layout: default
title: Git
permalink: /git/
---

<div class="home">

	<h2 class="post-list-heading">{{ page.list_title | default: "" }}</h2>

	<ul class="post-list">
		{% for post in site.categories.Git %}
			<li>
				<h3>
					<a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
				</h3>
				{%- assign date_format = site.minima.date_format | default: "%Y-%m-%d %H:%M" -%}
				<p class="post-meta">{{ post.date | date: date_format }}</p>
				<p class="post-meta">
				{%- if site.show_excerpts -%}
					{{ post.excerpt | strip_html }}
				{%- endif -%}
				</p>
			</li>
		{% endfor %}
	</ul>

</div>
