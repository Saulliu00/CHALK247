---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-content">
    <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Chalk 24/7" class="logo-hero">
    <h1>CHALK 24/7</h1>
    <p class="tagline">LIVE. BREATHE. CLIMB.</p>
    <p class="hero-description">
      Where passion meets granite. Join our community of climbers who live for the next hold, 
      the next route, the next summit.
    </p>
    <div class="cta-buttons">
      <a href="#community" class="btn btn-primary">Join the Community</a>
      <a href="/routes" class="btn btn-secondary">Explore Routes</a>
    </div>
  </div>
</section>

## Why Chalk 24/7

<div class="features-grid">
  <div class="feature">
    <span class="feature-icon">🧗</span>
    <h3>Community First</h3>
    <p>Connect with passionate climbers who share your obsession. From beginners to pros, everyone has a place on our wall.</p>
  </div>
  
  <div class="feature">
    <span class="feature-icon">🏔️</span>
    <h3>Routes for Everyone</h3>
    <p>Whether you're working on your first V0 or crushing V10s, we've got routes that challenge and inspire.</p>
  </div>
  
  <div class="feature">
    <span class="feature-icon">💪</span>
    <h3>24/7 Mindset</h3>
    <p>Climbing isn't just a hobby—it's a lifestyle. We're here for those who plan life around climbing.</p>
  </div>
</div>

## Latest from the Community

<div class="posts-preview">
  {% for post in site.posts limit:3 %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <time>{{ post.date | date: "%B %d, %Y" }}</time>
    <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
  </article>
  {% endfor %}
</div>

[View all posts →](/blog)