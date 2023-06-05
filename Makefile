SHELL=bash

.PHONY: init-app

init-app:
	$(eval version := $(shell node -e 'console.log(require("./app/package.json").version)'))

pack-app: init-app
	pnpm install
	pnpm --filter @portal-web/* build
	node scripts/app-pack.js

start-app: init-app
	pnpm run -C ./app start

build-image: pack-app
	docker build \
		--cache-from upiksaleh/portal-web-backend-app:$(version) \
		-t upiksaleh/portal-web-backend-app:$(version) \
		./app/
	docker tag upiksaleh/portal-web-backend-app:$(version) upiksaleh/portal-web-backend-app:latest

push-image: build-image
	docker push upiksaleh/portal-web-backend-app --all-tags

enter-image: init-app
	docker run \
		--rm \
		-it \
		upiksaleh/portal-web-backend-app:$(version) \
		/bin/sh
