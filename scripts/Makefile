
build:
#	make sure we have a valid JSON file, trailing commas are not allowed
	python3 no-dupes.py jekyll-site/37cu_csci_tech_elective_list.json
	python3 -c "import json; json.load(open('jekyll-site/3d_to_4d_course_translation.json'))"
	cd jekyll-site && bundle exec jekyll build

check-links: build
	cd jekyll-site && bundle exec htmlproofer ./_site

local: build
	cd jekyll-site && bundle exec jekyll serve --livereload

ship-4d:
	rsync -rz -v jekyll-site/_site/4-digit-conversion cisadv@eniac.seas.upenn.edu:html/dynamic/

ship: build
	cp htaccess-pennkey-only jekyll-site/_site/advisor-meeting/.htaccess
	rsync -L -rz -v jekyll-site/_site/ cisadv@eniac.seas.upenn.edu:html/dynamic/
#	ssh cisadv@eniac.seas.upenn.edu 'find html/dynamic/ -name .htaccess -exec chmod 644 {} \;'
