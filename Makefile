env = PATH=$$PATH:node_modules/.bin

install:
	@mkdir -p {platforms,plugins}
	@npm install
	@$(env) cordova plugin add org.apache.cordova.console
	@$(env) cordova plugin add org.apache.cordova.network-information
	@$(env) cordova plugin ls

prepare:
	@$(env) cordova prepare

ios:
	@$(env) cordova platform remove ios
	@$(env) cordova platform add ios
	@$(env) phonegap run ios --device

android:
	@$(env) cordova platform remove android
	@$(env) cordova platform add android
	@$(env) phonegap run android --device

run:;@pushd www; python -m SimpleHTTPServer

test:;@$(env) karma start www/spec/karma.config.js