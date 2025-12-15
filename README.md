# CIS Advising Handbook

This repo contains the code for the CIS Department Advising Handbook, which is a collection of academic advising articles for students in the [Penn CIS Department](https://www.cis.upenn.edu). The live version of the handbook is online at [advising.cis.upenn.edu](https://advising.cis.upenn.edu).

# Contributing

The code here is all open-source. Contributions in the form of clarifications are welcome as pull requests on individual articles or as issues. However, this is not the venue for requests for *policy changes*, such as wanting a new course to be classified as a Technical Elective, or wanting different rules for CU limit increases, etc. PRs or issues on such topics will be closed.

## How to contribute

The articles are part of a [Jekyll](https://jekyllrb.com) site, which is hosted via [Github Pages](https://docs.github.com/en/pages).

The articles here are written in Markdown, a simple markup language. Github has a nice [Markdown tutorial](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) to learn the basics of writing text in Markdown.

If you want to link to another article on this site, in addition to the typical Markdown link syntax of `[]()`, we require that you use Jekyll's `link` filter to specify the name of the page you are referencing:
```
[link-name]({% link article.md %})
```
Using this link syntax 1) prevents broken links and 2) provides more flexibility to reorganize the site without breaking said links.

If you want to add a new article, add a new `.md` file in the root directory. You can look at existing articles for examples of how to format the code so that Jekyll sees the right title, tags, etc.

## Course Directory

There is a directory of CS-related courses in `core.json`, with course titles and links to course homepages. To add/edit the directory:
1. edit `core.json`
2. run `python3 update_site.py` to re-generate `_data/*.yml` (used by Jekyll) and `public.json` (used by external sites).
3. commit & push updated yaml/json files

Edits made directly on github.com will *not* trigger `update_site.py`, and hence will not appear to have any effect. This is because the GitHub site build process cannot run `update_site.py` before the Jekyll build. So course directory updates must be done on a working copy of the repo and then pushed to GitHub.
