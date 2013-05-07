/*  An EventSignal is the simplest way to represent an event.

    An event is a function which you can pass a listener function
        and it will call your function if an event occurred with
        the event value

    When you register a listener on this event it returns you
        a removal function which you can use to remove the event

    Note that an EventSignal has no notion of lastEvent, state or
        currentState
*/

// type RemoveListener := () => void
// type EventSignal := ((Value) => void, Boolean) => RemoveListener | void
function EventSignal(generator, removable) {
    var listeners = []

    generator(function broadcast(value) {
        listeners.forEach(function (l) { l(value) })
    })

    return removable ? createRemovableEventSignal(listeners) :
        createEventSignal(listeners)
}

function createEventSignal(listeners) {
    return function eventSignal(listener) {
        listeners.push(listener)
    }
}

function createRemovableEventSignal(listeners) {
    return function eventSignal(listener) {
        listeners.push(listener)

        return function remove() {
            listeners.splice(listeners.indexOf(listener), 1)
        }
    }
}