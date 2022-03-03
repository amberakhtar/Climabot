const chat = {
  0: {
    text: 'Hi! 👋 I am Climabot.',
    next: 1
  },

  1: {
    text: 'This is a choice-driven chatbot. Use the options below to guide the conversation.',
    options: [{
      text: 'Cool! Hi 👋',
      next: 2
    }]
  },

  2: {
    text: '<iframe src="https://giphy.com/embed/KCqmVVTQRsMSliDbtt" width="380" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/climate-change-greta-thunberg-KCqmVVTQRsMSliDbtt"></a></p>',
    next: 3
  },

  3: {
    text: 'Can you tell me which topic from below you are more interested in?',
    options: [{
        text: " 🙌 Quiz Game",
        next: 4
      },
      {
        text: " 🌎 Some Interesting facts about Climate Change",
        next: 29
      },
      {
        text: " 🤖 Tell me more about Climabot",
        next: 29
      },
    ]
  },



  4: {
    text: "That's impressive! 🤩",
    options: [{
      text: "Let's begin 🚀 ",
      next: 7
    }]
  },


  7: {
    text: 'Which of the following is the biggest cause of global warming? 🌏',
    options: [{
        text: "Decomposing plants",
        next: 10

      },
      {
        text: " Burning oil, gas and coal",
        next: 8
      },
      {
        text: "Natural variation of the planet",
        next: 10
      },
    ]
  },

  8: {
    text: "That's correct! 😎",
    next: 9
  },

  9: {
    text: "The combustion of fossil fuels for energy is the biggest source of carbon dioxide emissions linked to human activity and a major cause of global warming.",
    next: 200
  },

  200: {
    text: '<iframe src="https://giphy.com/embed/tyDl7yMqn1pzVGDLWz" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-climate-change-crisis-tyDl7yMqn1pzVGDLWz"></a></p>',
    options: [{
        text: "Amazing!",
        next: 11

      }]
  },



  10: {
    text: "Oh no! 😟 . Here's the correct answer 👇 ",
    next: 9
  },

  11: {
    text: "Which country is the world’s largest emitter of carbon dioxide?",
    options: [{
        text: "US 🇺🇸",
        next: 13

      },
      {
        text: "China 🇨🇳",
        next: 12
      },

    ]
  },

  12: {
    text: "That's Right!👏",
    next: 14
  },

  14: {
    text: "China became the world’s largest emitter of carbon dioxide in 2006, watch the video below and know more about the Coal 👇",
    next: 201
  },

  201: {
    text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9Wv2GKaukZU?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [{
      text: 'Wow!',
      next: 15
    }]
  },




  13: {
    text: "Oops! 😟",
    next: 14
  },




  15: {
    text: 'Rainstorms have become more intense over the past several decades. Is that a change in weather or climate? ⛈️',
    options: [{
        text: "Weather",
        next: 18

      },
      {
        text: " Climate",
        next: 16
      },

    ]
  },

  16: {
    text: "Very Well! 👍",
    next: 17
  },


  17: {
    text: "One heavy rainstorm is a weather event. But the trend of more intense rainstorms is a sign of a changing climate. ⛈",
    next: 203
  },

  203: {
    text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vH298zSCQzY?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [{
        text: "Great! That was so informative!",
        next: 19

      }]
  },

  18: {
    text: "The correct answer is Climate",
    next: 17
  },


  19: {
    text: "Does the ocean affects Earth’s climate? 🌊",
    options: [{
        text: "Yes",
        next: 21

      },
      {
        text: "No",
        next: 21
      },


    ]
  },

  20: {
    text: "The ocean stores vast amounts of heat and carbon, which it exchanges with the atmosphere to impact climate",
    next: 204
  },

  21: {
    text: "Yes! It does.",
    next: 20
  },

  204: {
    text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dPbG408OQN4?start=90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [{
        text: "This was super helpful!",
        next: 22

      }]
  },




  22: {
    text: 'Do you want to continue to another round? ',
    options: [{
        text: "Yes",
        next: 100

      },
      {
        text: "No",
        next: 23
      },

    ]
  },

  23: {
          text: 'Thanks for playing 😊. Please check these options and learn more about climate change 👇',
          options: [
            {
              text: " 🌎 Some Interesting facts about Climate Change",
              next: 29
            },
            {
              text: " 🤖 Tell me more about Climabot",
              next: 29
            },
          ]
        },

      29: {

          text: "That's totally alright 😊",
          next: 30

      },

      30: {
            text: 'What would you like to know about? 😊 ',
            options: [{
                text: "Causes of climate change 🌍",
                next: 31
              },
              {
                text: "Effects of climate change 🌪 ",
                next: 33
              },
              {
                text: "Solving climate change 🌳",
                next: 35
              },

            ]
          },



          31: {
      text: 'Human activity is the main cause of climate change. Burning fossil fuels and convert land from forests to agriculture.',
      next: 32

    },

    32: {
      text: 'Check out the source link below',
      options: [{
          text: "www.ec.europa.eu",
          url: "https://ec.europa.eu/clima/climate-change/causes-climate-change_en",

        },

        {
          text: "Take me back",
          next: 30
        },


      ]
    },


  33: {
          text: 'The effects of climate change include more frequent wildfires, longer periods of drought and an increase in the number of tropical storms ',
          next: 34
        },
        34: {
          text: "Here's a link. If you want to read in more detail 👇",
          options: [{
              text: "www.climate.nasa.gov",
              url: "https://climate.nasa.gov/effects/",
            },
            {
              text: "Take me back",
              next: 30
            },
          ]
        },

        35: {
                text: "Reducing greenhouse gases is a direct way to help slow or stop climate change since excess greenhouse gases are what’s causing the climate to warm.",
                next: 34
              },
              34: {
                text: "Check the source link 👇",
                options: [{
                    text: "www.scied.ucar.edu",
                    url: "https://scied.ucar.edu/learning-zone/climate-solutions/solving-climate",
                  },

                  {
                    text: "Take me back",
                    next: 30
                  },

                ]
              },

              100: {
                text: "Awesome! Let's continue 😎",
                next: 101
              },

              101: {
                text: 'Scientists have only been aware of global climate change for about 50 years.',
                options: [{
                    text: "True",
                    next: 105

                  },
                  {
                    text: "False",
                    next: 103
                  },

                ]
              },

              103: {
                text: "That's right! 🙌 ",
                next: 104
              },

              105: {
                text: "Not true 😕",
                next: 104
              },



              104: {
                text: "It was around 200 years ago that scientists first began to suspect that the Earth's climate had changed many times in the past. ⛈",
                next: 106
              },

//

              106: {
                text: 'Global warming will mostly affect humans and not animals.',
                options: [{
                    text: "True",
                    next: 109

                  },
                  {
                    text: "False",
                    next: 107
                  },

                ]
              },

              107: {
                text: "Correct! 😀",
                next: 108
              },

              109: {
                text: "No 🤔",
                next: 108
              },



              108: {
                text: "Scientists predict that in this century global warming will be the main cause of animals becoming extinct. A global temperature rise could put a quarter of all species at risk! 🦌🐢🐇🐟",
                next: 110
              },

              //

              110: {
                text: 'Fossil fuels such as coal, oil and gas are formed from the remains of animals and plants that died millions of years ago.',
                options: [{
                    text: "True",
                    next: 111

                  },
                  {
                    text: "False",
                    next: 112
                  },

                ]
              },

              111: {
                text: "That's right! You have become an Expert 🤩",
                next: 22
              },

              112: {
                text: "Oh! That's a wrong answer 😣",
                next: 22
              },






};





const bot = function() {

  const climabot = document.getElementById('climabot');
  const container = document.getElementById('climabot-container');
  const inner = document.getElementById('climabot-inner');
  let restartButton = null;

  const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const scrollContainer = function() {
    inner.scrollTop = inner.scrollHeight;
  };

  const insertNewChatItem = function(elem) {

    climabot.appendChild(elem);
    scrollContainer();

    elem.classList.add('activated');
  };

  const printResponse = async function(step) {
    const response = document.createElement('div');
    response.classList.add('chat-response');
    response.innerHTML = step.text;
    insertNewChatItem(response);





    await sleep(1500);

    if (step.options) {
      const choices = document.createElement('div');
      choices.classList.add('choices');
      step.options.forEach(function(option) {
        const button = document.createElement(option.url ? 'a' : 'button');
        button.classList.add('choice');
        button.innerHTML = option.text;
        if (option.url) {
          button.href = option.url;
          if (option.target) {
            button.target = option.target;
          }
        } else {
          button.dataset.next = option.next;
        }
        choices.appendChild(button);
      });
      insertNewChatItem(choices);
    } else if (step.next) {
      printResponse(chat[step.next]);
    }
  };


  const printChoice = function(choice) {
    const choiceElem = document.createElement('div');
    choiceElem.classList.add('chat-ask');
    choiceElem.innerHTML = choice.innerHTML;
    insertNewChatItem(choiceElem);
  };

  const disableAllChoices = function() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(function(choice) {
      choice.disabled = 'disabled';
    });
    return;
  };

  const handleChoice = async function(e) {

    if (!e.target.classList.contains('choice') || 'A' === e.target.tagName) {
      // Target isn't a button, but could be a child of a button.
      var button = e.target.closest('#climabot-container .choice');

      if (button !== null) {
        button.click();
      }

      return;
    }

    e.preventDefault();
    const choice = e.target;

    disableAllChoices();

    printChoice(choice);
    scrollContainer();

    await sleep(1500);

    if (choice.dataset.next) {
      printResponse(chat[choice.dataset.next]);
    }
    // Need to disable buttons here to prevent multiple choices
  };

  const handleRestart = function() {
    startConversation();
  }

  const startConversation = function() {
    printResponse(chat[0]);
  }

  const init = function() {
    container.addEventListener('click', handleChoice);

    restartButton = document.createElement('button');
    restartButton.innerText = "Restart";
    restartButton.classList.add('restart');
    restartButton.addEventListener('click', handleRestart);

    container.appendChild(restartButton);

    startConversation();
  };




  var content = document.getElementsByTagName('body')[0];
          var darkMode = document.getElementById('dark-change');
          darkMode.addEventListener('click', function(){
              darkMode.classList.toggle('active');
              content.classList.toggle('night');
          })


  init();
}

bot();
