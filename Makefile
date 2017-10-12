release:
	rm -Rf build/
	rake publish
serve:
	middleman serve