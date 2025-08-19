# blog.md
---
layout: page
title: Blog
permalink: /blog/
---

## Climbing Stories & Tips

<div class="posts-list">
  {% for post in site.posts %}
    <article class="post-preview">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <time class="post-date">{{ post.date | date: "%B %d, %Y" }}</time>
      <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>
