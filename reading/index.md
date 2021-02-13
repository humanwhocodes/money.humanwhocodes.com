---
title: Reading List
author: Nicholas C. Zakas
layout: page
---

# Reading List

I do a lot of reading, and when I find books that are particularly good, I write them down so I can recommend them to others. This reading list is made up of my current favorite books and are organized by category. I consider these books "must-read" for their category as they will help you learn and grow in your career.

Note: This page contains affiliate links. If you click through and purchase a book, I may receive compensation for that purchase. 

{% assign categories = site.data.reading %}

{% for category in categories %}
<h2>{{ category[0] }}</h2>

{% assign books = category[1] | sort: "title" %}
<ul class="hide-bullets grid-columns">
{% for book in books %}
    <li class="center-text">
        <p><a href="{{ book.url }}"><img src="/images/reading/{{ book.image }}" alt="{{ book.title }} Cover" loading="lazy" height="150"></a><br>
        <a href="{{ book.url }}">{{ book.title }}</a><br>
        {{ book.author }}</p>
    </li>
{% endfor %}
</ul>

{% endfor %}
