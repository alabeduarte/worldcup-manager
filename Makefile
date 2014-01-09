env = PATH=$$PATH:node_modules/.bin

install:
	@mkdir -p {platforms,plugins}
	@npm install
	@$(env) cordova plugin add org.apache.cordova.console
	@$(env) cordova plugin add org.apache.cordova.network-information
	@$(env) cordova plugin ls

ios:
	@$(env) cordova platform remove ios
	@$(env) cordova platform add ios
	@$(env) phonegap build ios

android:;@$(env) cordova prepare android

run:;@pushd www; python -m SimpleHTTPServer

test:;@pushd www/spec; $(env) karma start karma.config.js
	#@$(env) jasmine-node --test-dir www/spec