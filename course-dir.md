---
title: Course Site Directory
toc: true
read_time: false
tags: 
---

# Overview

Hello!!!

This page contains a list of course websites for UPenn that are taught by CIS faculty (and a few others).

The point of this is to help with figuring out which courses may be interesting to you. There is always the course description, but sometimes you want to see more than that. Hopefully this site helps you figure out what courses there are and what is involved in each of them.

{: .note }
> Note that some of these course sites may be out of date and so may be somewhat inaccurate. We still list the sites that are most up to date in case it helps someone decide on a course.

{: .note }
> Also note that the 6xxx and 7xxx courses can vary a lot from professor to professor and semester to semester. So take those courses with a grain of salt.

If you notice anything wrong (like a course missing or a site missing) then feel free to reach out to `tqmcgaha` AT `seas.upenn.edu` and let us know!

Hopefully you are doing well and this helps!

## Intro Courses

{% for course in site.data.intro %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Mini Courses

{: .note }
> The main website for mini courses can be found here <a href="https://www.cis.upenn.edu/~cis19x/">CIS 19XX - Minicourses</a>.

{% for course in site.data.mini %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Programming Languages, Compilers, Software Engineering

{% for course in site.data.pl %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Systems, Networking, Security, Crypto

{% for course in site.data.systems %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Embedded, Internet of Things, Health

{% for course in site.data.embed %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## AI, ML, NLP, CV

{: .note }
> There are A LOT of AI courses in ESE, you may want to look at those too <a href="#electrical-and-systems-engineering">ESE Courses</a>.

{% for course in site.data.aiml %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Databases, ML Systems, Data Science

{% for course in site.data.db %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Architecture

{% for course in site.data.arch %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Theory

{% for course in site.data.theory %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Human Computer Interaction, Human Factors

{% for course in site.data.hci %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Network Science

{% for course in site.data.nets %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Graphics, Games

{% for course in site.data.graphics %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

## Electrical and Systems Engineering

Yeah these ones aren't taught by CIS faculty, but these ones are taken often enough by CIS and CMPE students that I felt ok including them.

{% for course in site.data.ese %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}



## MCIT

{% for course in site.data.mcit %}
<div class="staffer">
  <div>
    <h3 class="staffer-name">
      {% if course.website %}
      <a href="{{ course.website }}">{{course.title}}</a>
      {% else %}
      {{course.subject}} {{course.number}}
      {% endif %}
    </h3>
    <p><b>{{ course.name }}</b></p>
    {% if course.note %}
    <p>{{ course.note }}</p>
    {% endif %}
    {% if course.link %}
    <p><a href="{{ course.link }}">{{ course.link }}</a></p>
    {% else %}
    <p>No link found :(</p>
    {% endif %}
  </div>
</div>
{% endfor %}

