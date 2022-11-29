release:
	rm -Rf build/
	bundle exec rake publish
serve:
	bundle exec middleman serve