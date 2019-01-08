export default {
  maths: [
    {
      type: 'Maths',
      name: 'Comparison',
      explanation: 'Choose the correct logical operator.',
      complexity: 1,
      damage: 10,
      tasks: [
        {
          variables: [12, 20],
          answer: '<',
        },
        {
          variables: [99, 89],
          answer: '>',
        },
        {
          variables: [69, 96],
          answer: '<',
        },
      ],
    },
    {
      type: 'Maths',
      name: 'Equation',
      explanation: 'Solve this math example.',
      complexity: 2,
      damage: 20,
    },
    {
      type: 'Maths',
      name: 'Sequence',
      explanation: 'Continue the sequence.',
      complexity: 3,
      damage: 30,
      tasks: [
        {
          variables: [10, 12, 14],
          answer: 16,
        },
        {
          variables: [11, 22, 33],
          answer: 44,
        },
        {
          variables: [8, 15, 22],
          answer: 29,
        },
      ],
    },
    {
      type: 'Maths',
      name: 'Constructor',
      explanation: 'Put the parts of the expression in the correct order.',
      complexity: 4,
      damage: 40,
      tasks: [
        {
          variables: ['+', '12', '=', '14', '2'],
          answer: [['12', '+', '2', '=', '14'], ['2', '+', '12', '=', '14']],
        },
        {
          variables: ['=', '25', '64', '-', '39'],
          answer: [['64', '-', '25', '=', '39'], ['64', '-', '39', '=', '25']],
        },
        {
          variables: ['12', '=', '5', '*', '60'],
          answer: [['12', '*', '5', '=', '60'], ['5', '*', '12', '=', '60']],
        },
      ],
    },
  ],

  english: [
    {
      type: 'English',
      name: 'Translation',
      explanation: 'Translate the word into English.',
      complexity: 1,
      damage: 10,
      tasks: [
        {
          variables: 'слово',
          answer: ['word', 'a word', 'say', 'a say'],
        },
        {
          variables: 'ловушка',
          answer: ['trap', 'a trap', 'snare', 'a snare', 'hook', 'a hook'],
        },
        {
          variables: 'эскиз',
          answer: ['sketch', 'a sketch', 'design', 'a design', 'outline', 'an outline'],
        },
      ],
    },
    {
      type: 'English',
      name: 'Find mistake',
      explanation: 'Find one mistake in the following word.',
      complexity: 2,
      damage: 20,
      tasks: [
        {
          variables: ['d', 'i', 'r', 'r', 'e', 'c', 't', 'i', 'o', 'n'],
          answer: 'r',
        },
        {
          variables: ['a', 'n', 's', 'v', 'e', 'r'],
          answer: 'v',
        },
        {
          variables: ['s', 'k', 'h', 'o', 'o', 'l'],
          answer: 'k',
        },
      ],
    },
    {
      type: 'English',
      name: 'Listening',
      explanation: 'Write the word you  heard',
      complexity: 3,
      damage: 30,
      tasks: [
        {
          variables: './../src/audio/english/letter.mp3',
          answer: 'letter',
        },
        {
          variables: './../src/audio/english/work.mp3',
          answer: 'work',
        },
        {
          variables: './../src/audio/english/programmer.mp3',
          answer: 'programmer',
        },
      ],
    },
    {
      type: 'English',
      name: 'Words order',
      explanation: 'Put the words in the correct order to make a sentence.',
      complexity: 4,
      damage: 40,
      tasks: [
        {
          variables: ['can', 'several', 'She', 'languages', 'speak'],
          answer: ['She', 'can', 'speak', 'several', 'languages'],
        },
        {
          variables: ['children', 'were', 'happily', 'The', 'playing'],
          answer: ['The', 'children', 'were', 'playing', 'happily'],
        },
        {
          variables: ['girl', 'dress', 'in', 'is', 'Helen', 'the', 'the', 'red'],
          answer: ['Helen', 'is', 'the', 'girl', 'in', 'the', 'red', 'dress'],
        },
      ],
    },
  ],

  geography: [
    {
      type: 'Geography',
      name: 'Capitals',
      explanation: 'This is the capital of which country?',
      complexity: 1,
      damage: 10,
      tasks: [
        {
          variables: ['Berlin', ['Germany', 'Canada', 'Russia', 'Belarus']],
          answer: 'Germany',
        },
        {
          variables: ['Hanoi', ['Chile', 'Canada', 'Jamaica', 'Vietnam']],
          answer: 'Vietnam',
        },
        {
          variables: ['Helsinki', ['Germany', 'Finland', 'Russia', ' Switzerland']],
          answer: 'Finland',
        },
      ],
    },
    {
      type: 'Geography',
      name: 'Statements',
      explanation: 'Is this statement correct?',
      complexity: 2,
      damage: 20,
      tasks: [
        {
          variables: 'Russia spans 11 time zones.',
          answer: true,
        },
        {
          variables: 'Vatican City is the largest country in the world.',
          answer: false,
        },
        {
          variables: 'California has more people than all of Canada.',
          answer: true,
        },
      ],
    },
    {
      type: 'Geography',
      name: 'Attractions',
      explanation: 'What sights belong to the following country?',
      complexity: 3,
      damage: 30,
      tasks: [
        {
          variables: ['France', ['The Eiffel Tower', 'The Rijksmuseum', 'The Moulin Rouge', 'Cologne Cathedral']],
          answer: ['The Eiffel Tower', 'The Moulin Rouge'],
        },
        {
          variables: ['The Netherlands', ['The Rijksmuseum', 'Cologne Cathedral', 'Van Gogh Museum', 'The Moulin Rouge']],
          answer: ['The Rijksmuseum', 'Van Gogh Museum'],
        },
        {
          variables: ['Germany', ['Cologne Cathedral', 'Van Gogh Museum', 'The Brandenburg Gate', 'The Moulin Rouge']],
          answer: ['Cologne Cathedral', 'The Brandenburg Gate'],
        },
      ],
    },
    {
      type: 'Geography',
      name: 'Sorting',
      explanation: 'Arrange objects by size',
      complexity: 4,
      damage: 40,
      tasks: [
        {
          variables: ['Africa', 'Australia', 'Antarctica', 'Eurasia'],
          answer: ['Eurasia', 'Africa', 'Antarctica', 'Australia'],
        },
        {
          variables: ['Canada', 'United States', 'Russia', 'China'],
          answer: ['Russia', 'Canada', 'United States', 'China'],
        },
        {
          variables: ['The Indian Ocean', 'The Pacific Ocean', 'The Arctic Ocean', 'The Atlantic Ocean'],
          answer: [' The Pacific Ocean', 'The Atlantic Ocean', 'The Indian Ocean', 'The Arctic Ocean'],
        },
      ],
    },
  ],

  programming: [
    {
      type: 'Programming',
      name: 'Abbreviations',
      explanation: 'Choose the correct definition',
      complexity: 1,
      damage: 10,
      tasks: [
        {
          variables: ['HTML', ['HyperText Markup Language', 'Hyperloop Tunnel Musk\'s Launchm', 'Hover Test Metadata Language', 'Hyperlink Type Multiple Language']],
          answer: 'HyperText Markup Language',
        },
        {
          variables: ['JS', ['Junior Script', 'Jungle Script', 'Jealous Spirit', 'Java Script']],
          answer: 'Java Script',
        },
        {
          variables: ['CSS', ['Celebrating Senior Surge', 'Code Semantic Style', 'Cascading Style Sheets', 'Clear Server Signal']],
          answer: 'Cascading Style Sheets',
        },
      ],
    },
    {
      type: 'Programming',
      name: 'True/False',
      explanation: 'Is this statement correct?',
      complexity: 2,
      damage: 20,
      tasks: [
        {
          variables: 'JS was invented by Ancient Romans',
          answer: false,
        },
        {
          variables: 'HTML is the most famous JS framework.',
          answer: false,
        },
        {
          variables: 'JS is just a web version of Java language.',
          answer: false,
        },
      ],
    },
    {
      type: 'Programming',
      name: 'Fill the gap',
      explanation: 'Insert the missing function.',
      complexity: 3,
      damage: 30,
      tasks: [
        {
          variables: ['[].concat(1,2).', '(3);', '//output = 3'],
          answer: 'unshift',
        },
        {
          variables: ['"Cat".', '("C", "R");', '//output = "Rat"'],
          answer: 'replace',
        },
        {
          variables: ['[1,2,3].', '("");', '//output = "123"'],
          answer: 'join',
        },
      ],
    },
    {
      type: 'Programming',
      name: 'Code output',
      explanation: 'What will this code display?',
      complexity: 4,
      damage: 40,
      tasks: [
        {
          variables: ['alert("1"[0]);', ['0', '1', '2', 'undefined']],
          answer: '1',
        },
        {
          variables: ['[].push(1,2).unshift(3).join()', ['3,1', '1,2,3', '3,1,2', 'error']],
          answer: 'error',
        },
        {
          variables: ['true + false', ['"truefalse"', '0', '1', 'NaN']],
          answer: '1',
        },
      ],
    },
  ],
};
