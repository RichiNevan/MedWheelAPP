# date: 2024-10-27
# bootstraped by
# npx create-expo-app@latest MedWheel
# cd MedWheel
# npm i
# npm run start

####
# from Copilot by itself, NOT TESTED:
#  command to expo build web and export web, so to put it in netifly
 build-web:
	npm run build-web
	cp -r web-build/* ../medwheel-web
	cd ../medwheel-web
	git add .
	git commit -m "web build"
	git push origin master
	cd ../MedWheel

#  command to expo build android
 build-android:
	npm run build-android

#  command to expo build ios
 build-ios:
	npm run build-ios

#  command use build and export web, android and ios
 build-all:
	 build-web
	 build-android
	 build-ios

##########
# deploy from https://docs.expo.dev/distribution/publishing-websites/ TESTED, WORKS:
 expo-build-web:
	npx expo export -p web

 expo-serve-web:
	npx serve dist --single
# at this point you have the build in the dist folder
# and you can visit it with your browser using a local link, such as:
# http://localhost:3000

 netlify-install:
	npm install netlify-cli -g

# should not be done more than once, to create the netfly website
 netlify-create:
	netlify sites:create

# deploy the dist folder to netlify:
 netlify-deploy:
	netlify deploy --dir dist

# deploy, the production to netifly, provide the dist folder when asked:
 netlify-deploy2:
	netlify deploy --prod --dir=dist

deploy:
	make expo-build-web
	make netlify-deploy2
# at this point you should have a link to your site, such as:
# https://acca-medwheel-chromosound.netlify.app/
# and you can visit it with your browser

#####
# local run with expo start, presents web, android and ios options:
 start:
	npm run start

# local web run with expo's default command:
 web:
	npm run web

# local android run with expo's default command:
 android:
	npm run android

# local ios run with expo's default command:
 ios:
	npm run ios

 project-reset-after-created:
	npm run reset-project