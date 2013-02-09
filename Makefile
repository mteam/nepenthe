build: components
	@component build $(OPTS)

components: component.json
	@component install

clean:
	rm -fr components

.PHONY: clean
