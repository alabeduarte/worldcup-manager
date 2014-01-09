env = PATH=$$PATH:node_modules/.bin

install:
	@mkdir -p {platforms,plugins}
	@npm install
	@npm install cordova -g
	@cordova plugin add org.apache.cordova.console
	@cordova plugin add org.apache.cordova.network-information
	@cordova plugin ls

ios:
	@cordova platform remove ios
	@cordova platform add ios
	@$(env) phonegap run ios --device

android:
	@cordova platform remove android
	@cordova platform add android
	@$(env) phonegap run android --device

run:;@pushd www; python -m SimpleHTTPServer

test:;@pushd www/spec; $(env) karma start karma.config.js
	#@$(env) jasmine-node --test-dir www/spec