.PHONY: build-CommonLayer

build-CommonLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp -R nodejs/. "$(ARTIFACTS_DIR)/nodejs/"
	npm ci --prefix "$(ARTIFACTS_DIR)/nodejs"
