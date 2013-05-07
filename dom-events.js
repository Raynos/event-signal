var EventSignal = require("./index")

module.exports = events

// events := (Element, String) => EventSignal<DOMEvent>
function events(element, type) {
    return EventSignal(function (broadcast) {
        element.addEventListener(type, function (ev) {
            broadcast(ev)
        })
    })
}