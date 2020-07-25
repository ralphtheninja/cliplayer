#!/usr/bin/env node

const readline = require('readline')
const { spawnSync } = require('child_process')

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

function spawn (cmd, args) {
  spawnSync(cmd, args, {
    env: Object.assign({ DISPLAY: ':0.0' }, process.env)
  })
}

function togglePausePlay () {
  console.log('pause/play toggle')
  spawn('xdotool', ['key', 'space'])
}

function skipLeft () {
  console.log('skipping left')
  spawn('xdotool', ['key', 'Left'])
}

function skipRight () {
  console.log('skipping right')
  spawn('xdotool', ['key', 'Right'])
}

function volumeUp () {
  console.log('volume up 10%')
  spawn('pactl', ['set-sink-volume', '@DEFAULT_SINK@', '+10%'])
}

function volumeDown () {
  console.log('volume down 10%')
  spawn('pactl', ['set-sink-volume', '@DEFAULT_SINK@', '-10%'])
}

function toggleMute () {
  console.log('mute toggle')
  spawn('pactl', ['set-sink-mute', '@DEFAULT_SINK@', 'toggle'])
}

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'c' && key.ctrl) process.exit(0)
  else if (key.name === 'space') togglePausePlay()
  else if (key.name === 'left') skipLeft()
  else if (key.name === 'right') skipRight()
  else if (key.name === 'up') volumeUp()
  else if (key.name === 'down') volumeDown()
  else if (key.name === 'm') toggleMute()
})
