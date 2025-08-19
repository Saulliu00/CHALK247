source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
```

### 3. index.md
```markdown
---
layout: default
title: Home
---


  
    
    CHALK 24/7
    LIVE. BREATHE. CLIMB.
    
      Where passion meets granite. Join our community of climbers who live for the next hold, 
      the next route, the next summit.
    
    
      Join the Community
      Explore Routes
    
  


## Why Chalk 24/7


  
    🧗
    Community First
    Connect with passionate climbers who share your obsession. From beginners to pros, everyone has a place on our wall.
  
  
  
    🏔️
    Routes for Everyone
    Whether you're working on your first V0 or crushing V10s, we've got routes that challenge and inspire.
  
  
  
    💪
    24/7 Mindset
    Climbing isn't just a hobby—it's a lifestyle. We're here for those who plan life around climbing.
  


## Latest from the Community


  {% for post in site.posts limit:3 %}
  
    {{ post.title }}
    {{ post.date | date: "%B %d, %Y" }}
    {{ post.excerpt | strip_html | truncate: 150 }}
  
  {% endfor %}


[View all posts →](/blog)