export default [
  {
    text: "太 + adj. +了",
    value: {
      structure: [
        { key: "太", editable: false, type: "adverb" },
        { key: "adj1", editable: true, type: "adj" },
        { key: "了", editable: false, type: "aux" },
      ],
      translationKey: "too",
    },
  },
  {
    text: "我是 + noun",
    value: {
      structure: [
        { key: "我", editable: false, type: "noun" },
        { key: "是", editable: false, type: "verb" },
        { key: "noun1", editable: true, type: "noun" },
      ],
      translationKey: "iAm",
    },
  },
];
