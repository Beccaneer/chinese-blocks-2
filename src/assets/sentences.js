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
  {
    text: "subject + adv1 + adj",
    value: {
      structure: [
        { key: "subject", editable: true, type: "noun" },
        { key: "adv1", editable: true, type: "adverb" },
        { key: "adj1", editable: true, type: "adj" },
      ],
      translationKey: "someoneIsSomeState",
    },
  },
  {
    text: "subject + 是 + noun",
    value: {
      structure: [
        { key: "subject", editable: true, type: "noun" },
        { key: "是", editable: false, type: "verb" },
        { key: "noun1", editable: true, type: "noun" },
      ],
      translationKey: "someoneIsSomething",
    },
  },
  {
    text: "subject + verb + object",
    value: {
      structure: [
        { key: "subject", editable: true, type: "noun" },
        { key: "verb", editable: true, type: "verb" },
        { key: "object", editable: true, type: "noun"},
      ],
      translationKey: "someoneDoesSomething",
    },
  },
];
