build: components
	@component build

build-dev: components
	@component build --dev

components: component.json
	@component install

clean:
	rm -fr components

.PHONY: build build-dev clean
