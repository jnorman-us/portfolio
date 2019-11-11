const data = new Map();
data.set('start', {
  output: [
    '$b$+--- Hello ----+$b$',
    '$w$I am Joseph Norman, Computer Science student at the $w$$o$University of Texas at Dallas.$o$',
    '$w$To get started, try out the $w$$g$"help"$g$$w$ command$w$',
    '$w$\n$w$',
  ],
  window: null,
})
data.set('error', {
  output: [
    '$r$Command not found!$r$',
    '$w$Try running the $w$$g$"help"$g$$w$ command$w$',
  ],
  window: null,
});
data.set('help', {
  output: [
    '$b$+---- Help ----+$b$',
    '$g$Glad you asked!$g$',
    '$w$Here\'s a list of commands you might want to use...$w$',
    '$w$\n$w$',
    '$o$"projects list"$o$$w$ - Display a list of my projects$w$',
    '$o$"projects $o$$b$<name>$b$$o$"$o$$w$ - Open a window for the project$w$',
    '$w$\n$w$'
  ],
  window: null,
});
data.set('projects list', {
  output: [
    '$b$+-- Projects --+$b$',
    '$w$Here are all of the projects I\'ve worked on or$w$',
    '$w$contributed to over my years as a developer...$w$',
    '$w$\n$w$',
    '$o$"portfolio"$o$$w$ - this $w$$b$React.JS$b$$w$ site so I can show off to other developers$w$',
    '$o$"placeholder"$o$$w$ - (WIP) game development platform in $w$$b$Node.JS$b$',
    '$o$"rcjava"$o$$w$ - control other computers with a simple $w$$b$Java$b$$w$ executable$w$',
    '$o$"music-leds"$o$$w$ - adafruit $w$$r$L$r$$g$E$g$$b$D$b$$w$ matrix powered by a Raspberry Pi and $w$$b$Python$b$',
    '$w$\n$w$',
  ],
  window: null,
});
data.set('projects placeholder', {
  output: [
    '$w$Opening the Placeholder information page...$w$',
  ],
  window: 'window_placeholder',
});

export const getTerminalData = function(index)
{
  return data.get(index);
}

export const hasTerminalData = function(index)
{
  return data.has(index);
}
