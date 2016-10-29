export interface KeyBindingsJSON {
    basic: BasicKeyBindings
}

interface BasicKeyBindings {
    up: number,
    down: number,
    left: number,
    right: number
}