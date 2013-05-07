# EventSignal

A simple functional representation of an event

## Example

```js
var events = require("event-signal/events")
var map = require("event-signal/map")

var clicks = events(document.body, "click")
var targets = map(function (ev) {
	return ev.target
})(clicks)

targets(function (target) {
	console.log("target was clicked")
})
```

## Installation

`npm install event-signal`

## Contributors

 - Raynos

## MIT Licenced
