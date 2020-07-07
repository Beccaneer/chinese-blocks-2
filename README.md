# Chinese Blocks

## Description

This is an app written in Vue.js designed to help beginner to intermediate students of Mandarin (Simplified Chinese).

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Adding sentence structures

New sentence structures need to be added in two places: `/src/assets/sentences.js` and `/src/assets/sentenceTranslations.js`.

### sentences.js

This file contains an array of sentence objects in the following structure:

```
{
    text: "太。。。。。。了",
    value: {
      structure: [
        { key: "太", editable: false, type: "adverb" },
        { key: "adj1", editable: true, type: "adj" },
        { key: "了", editable: false, type: "aux" },
      ],
      translationKey: "too",
    },
  },
```

- `text` is a string representing the sentence. It is what is displayed in the dropdown.
- `value` is an object containing the following items:
  - `structure` is an array of word objects:
    - `key` is a string containing either a character or a variable name that is mapped to the corresponding translation (described below).
    - `editable` is a boolean. This should be set to `true` if the user can change the word, and set to `false` if it is part of the set structure.
    - `type` is a string describing the word type. Currently, valid word types include: `adj`,`verb`,`noun`,`aux`,`adverb`. These can be found in `/src/components/Block.vue`.
  - `translatonKey` is a string that maps to a corresponding translation (described below).

### sentenceTranslations.js

This file contains an object of sentence translations. New translations should be added in the `sentence` object where the key corresponds to the `translationKey` above
and the value is the translated string of the sentence. Variable interpolation is implemented by the variable name surrounded by curly braces. For example, `adj1` in
`"too {adj1}"` will replace the `adj1` according to the character selected based on the parameters given in the `structure` -> `key` parameter as described above.

## Adding vocabulary

Vocbaulary files are located in `/src/assets`. To add a new word, it should be an object in the following structure:

```
 忙: {
    english: "busy",
    pinyin: "máng",
    hanzi: "忙",
  }
```

Where the key of the object is the character(s) of the word,

- `english` is a string that represents the translation of the word in English
- `pinyin` is the pinyin of the word (with tone markers)
- `hanzi` are the characters of the word, and should likely be the same as the key
