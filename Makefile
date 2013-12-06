env = PATH=$$PATH:node_modules/.bin

install:
	@mkdir {platforms,plugins}
	@npm install

ios:;@$(env) phonegap run ios

android:;@$(env) phonegap run android

run:;@pushd www; python -m SimpleHTTPServer
