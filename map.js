var EventSignal = require("./index")

module.exports = map

// map := ((A) => B) => (EventSignal<A>) => EventSignal<B>
function map(lambda) { return function (event) {
    return EventSignal(function (broadcast) {
        event(function (value) {
            broadcast(lambda(value))
        })
    })
} }