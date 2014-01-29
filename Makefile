env = PATH=$$PATH:node_modules/.bin
karma = PATH=$$PATH:node_modules/.bin/karma

install:
	@mkdir -p {platforms,plugins}
	@npm install
	@cordova plugin add org.apache.cordova.console
	@cordova plugin add org.apache.cordova.network-information
	@cordova plugin ls

prepare:
	@cordova prepare

ios:
	@cordova platform remove ios
	@cordova platform add ios
	@$(env) phonegap run ios --device

android:
	@cordova platform remove android
	@cordova platform add android
	@$(env) phonegap run android --device

run:;@pushd www; python -m SimpleHTTPServer

test:;@$(env) karma start www/spec/karma.config.js
	#@$(env) jasmine-node --test-dir www/spec