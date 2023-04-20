Regular Expressions
===================

Node v16.10.0

## Setup

```sh
cd exercises
npm install
```

## Resources

Learning:
- [RegExOne](https://regexone.com)
- [RexEgg](http://www.rexegg.com)
- [Regex Info](http://www.regular-expressions.info)

Online interpreters:
- [RegExr](https://regexr.com/)
- [RegEx101](https://regex101.com/)
- [debuggex](https://www.debuggex.com/?flavor=javascript)

Cheat Cheets:
- [Cheatography](https://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)
- [Quickref.me](https://quickref.me/regex.html)
- [Debuggex](https://www.debuggex.com/cheatsheet/regex/javascript)
- [Regexlib](http://regexlib.com/CheatSheet.aspx)

VSCode Extension:
- [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex)

## Visual Studio Code

### How to regex

- `CTRL + F`: Find stuff
- `CTRL + H`: Replace stuff
- `CTRL + SHIFT + H`: Replace stuff in multiple files

Once in "search mode":
- `ALT + R`: **Activate Regex** -- This is obviously crucial 😉
- `ALT + C`: Case sensitive/insensitive -- Useful in certain cases


### Multicursor

Regex and multicursors, a match made in heaven.

- `CTRL + D`: Select next
- `CTRL + F2`: Select all
- `CTRL + U`: Deselect current
- `CTRL + K, D`: Deselect current & select next
- `CTRL + ALT + UP/DW`: Insert extra cursor
- `SHIFT + ALT + i`: Turn selection into cursors
- `SHIFT + ALT + LEFT/RIGHT`: Shrink/expand selection
- `CTRL + Click`: Select word / insert cursor
- `SHIFT + ALT + drag mouse`: Select box


## Exercises

If a certain exercise doesn't seem all that handy for you, skip it!


REMEMBER: Maybe you don't need to write the perfect regex!

- Write one that is good enough --> Visual Studio Code will tell you how many matches
- When you get it down to an acceptable amount, maybe it's time to just cycle through them


Many exercises have a `TODO`: Maybe regex is not the best match for this?
Maybe there is a better tool when you find yourself doing this often
and have to tweak your regex just a little bit every time?


### The List

- 0.InputValidation: Iban & INSZ validation, formatting & extracting
- 1.JSON-To-JS: Convert one to the other, or to Yaml
- 2.Rename-Files: Rename a bunch of files
- 3.Transform-CSV: We received a file but it was not in the format we were hoping for
- 4.TypeScript-Simplication: Fix some stuff in existing code
- 5.Itenium-Blog: Need to fix issues, and do some migrating and stuff
- 6.Html-Table: Cool table from Wikipedia, but we want it in Markdown/CSV instead
- 7.Data-Scraping: Find stuff in big files
