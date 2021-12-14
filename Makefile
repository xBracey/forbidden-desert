compile:
	NODE_ENV=development npx webpack --config webpack.config.js

compile_game:
	yarn build:ts
	sed -i -e 's+define("forbidden-desert-main-file",+define(+g' ./build/forbiddendesert.js
