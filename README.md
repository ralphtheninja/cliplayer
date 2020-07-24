# cliplayer

> Dead simple cli remote control wrapping pactl and xdotool.

Why? I'm often running e.g. netflix on my desktop computer 3 meters away and I'm lazy. So, I'm logged in over ssh with my laptop and this allows me to control the netflix window.

I originally had aliases for the underlying `xdotool` and `pactl` commands but it's painful to type and hit enter.

## Install

```
$ npm i cliplayer -g
```

## Usage

Start on command line:

```
$ cliplayer
```

And hit some of the following keys:

* `space` -> toggle pause/play
* `left arrow` -> skip left
* `right arrow` -> skip right
* `up arrow` -> increase the volume 10%
* `down arrow` -> decrease the volume 10%
* `m` -> toggle the volume on and off

Abort execution with `ctrl + c`.

## License

MIT
