const chat = {
  0: {
    text: 'Hi! π I am Climabot.',
    next: 1
  },

  1: {
    text: 'This is a choice-driven chatbot. Use the options below to guide the conversation.',
    options: [{
      text: 'Hi π',
      next: 2
    }]
  },

  2: {
    text: '<iframe src="https://giphy.com/embed/KCqmVVTQRsMSliDbtt" width="380" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/climate-change-greta-thunberg-KCqmVVTQRsMSliDbtt"></a></p>',
    next: 3
  },

  3: {
    text: 'Pick any options from below that you are more interested in',
    options: [{
        text: " π Quiz Game",
        next: 4
      },
      {
        text: " π Interesting facts about Climate Change",
        next: 208
      },
      {
        text: " β 10 ways to fight Climate Crisis",
        next: 300
      },
    ]
  },



  4: {
    text: "That's impressive! π€©",
    options: [{
      text: "Let's begin π ",
      next: 7
    }]
  },


  7: {
    text: 'Which of the following is the biggest cause of global warming? π',
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
    text: "That's correct! π",
    next: 9
  },

  9: {
    text: "The combustion of fossil fuels for energy is the major cause of global warming. ",
    next: 200
  },

  200: {
    text: '<iframe src="https://giphy.com/embed/sO7fqkUEeczo41UbFp" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-sO7fqkUEeczo41UbFp"></a></p>',
    options: [{
        text: "WHOA!",
        next: 11

      }]
  },



  10: {
    text: "Oh no! π . Here's the correct answer π ",
    next: 9
  },

  11: {
    text: "Which country is the worldβs largest emitter of carbon dioxide?",
    options: [{
        text: "US πΊπΈ",
        next: 13

      },
      {
        text: "China π¨π³",
        next: 12
      },

    ]
  },

  12: {
    text: "That's Right!π",
    next: 14
  },

  14: {
    text: "China became the worldβs largest emitter of carbon dioxide in 2006",
    next: 201
  },

  201: {
    text: "<img class='botImage' src='images/china.png'>",
    options: [{
      text: "Wow! I didn't know that",
      next: 15
    }]
  },




  13: {
    text: "Oops! π",
    next: 14
  },




  15: {
    text: 'Rainstorms have become more intense over the past several decades. Is that a change in weather or climate? βοΈ',
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
    text: "Very Well! π",
    next: 17
  },


  17: {
    text: "One heavy rainstorm is a weather event. But the trend of more intense rainstorms is a sign of a changing climate β . Know more about difference between Weather and Climate in the video below π",
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
    text: "Does the ocean affects Earthβs climate? π",
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
    text: "The ocean stores vast amounts of heat and carbon, which it exchanges with the atmosphere to impact climate. Watch the video below π",
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
        next: 106

      },
      {
        text: "No",
        next: 23
      },

    ]
  },

  23: {
          text: 'Thanks for playing π. Please check these options and learn more about climate change π',
          options: [
            {
              text: " π Interesting facts about Climate Change",
              next: 208
            },
            {
              text: " β 10 ways to fight Climate Crisis",
              next: 300
            },
          ]
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
                text: "Correct!",
                next: 108
              },

              109: {
                text: "No π€",
                next: 108
              },



              108: {
                text: "Scientists predict that in this century global warming will be the main cause of animals becoming extinct.π¦π’ππ",
                next: 205
              },

              205: {
                text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jphrpR9ffKA?start=14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                options: [{
                    text: "Thank you! it really did help me understand more about extinction!",
                    next: 110

                  }]
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
                text: "That's right! You have become an Expert π€©",
                next: 206
              },

              206: {
                text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zaXBVYr9Ij0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                options: [{
                    text: "Great video! The fossil fuel industry is horrendous!",
                    next: 207

                  }]
              },

              112: {
                text: "Wrong answer π£. Learn about Fossil Fuel in the video below",
                next: 206
              },

              207: {
                text: 'How about check some other topics from below options?',
                options: [
                  {
                    text: " π 10 Interesting facts about Climate Change",
                    next: 208
                  },
                  {
                    text: " β 10 ways to fight Climate Crisis",
                    next: 300
                  },
                ]
              },

              208: {
                text: "Here are some of Mind-blowing facts about Climate Change ",
                next: 209
              },

              209: {
                text: '<iframe src="https://giphy.com/embed/SACoDGYTvVNhZYNb5a" width="380" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/amine-mind-blown-mindblown-blowing-SACoDGYTvVNhZYNb5a"></a></p>',
                options: [{
                  text: "Let's get started π ",
                  next: 210
                }]
              },

              210: {
                text: "<b>Fact 1:</b> Do you know the Golden Toad is the first species to go extinct due to climate change. ",
                next: 211
              },

              211: {
                text: "<img class='botImage' src='images/toad.png'>",
                  options: [{
                    text: "Fact 2 ",
                  next: 212
                }]
              },

              212: {
                text: "<b>Fact 2:</b> The hottest years have been experienced from 1990 till 1997. The warmest years have been since 2005 ",
                next: 213
              },

              213: {
                text: '<iframe src="https://giphy.com/embed/L2r4woXTLCrkOYK2IT" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-environment-heatwave-hot-outside-L2r4woXTLCrkOYK2IT"></a></p>',
                options: [{
                  text: "Fact 3 ",
                  next: 214
                }]
              },

              214: {
                text: "<b>Fact 3:</b> More than 1 million species are at risk of extinction by climate change",
                next: 215
              },

              215: {
                text: '<iframe src="https://giphy.com/embed/6SB7L8B0OApNBkaOck" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-climate-change-vidhyan-6SB7L8B0OApNBkaOck"></a></p>',
                options: [{
                  text: "Fact 4 ",
                  next: 216
                }]
              },

              216: {
                text: "<b>Fact 4:</b> Food prices have risen and will continue to rise by nearly 60% by 2030.",
                next: 217
              },

              217: {
                text: "This 4 minute video explains how impacts differ across different segments of the population ",
                next: 218
              },

              218: {
                text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JP-5dKdvBMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                options: [{
                  text: "Fact 5 ",
                  next: 219
                }]
              },

              219: {
                text: "<b>Fact 5:</b> Vehicles like cars and trucks contribute to 20% of carbon emissions ",
                next: 220
              },

              220: {
                text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QwpZSeX6D0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                options: [{
                  text: "Fact 6 ",
                  next: 221
                }]
              },

              221: {
                text: "<b>Fact 6:</b> Hurricanes and droughts are a few of the natural disasters caused due to climate change.",
                next: 222
              },

              222: {
                text: "This image shows all types of weather disasters, some of which are known to be influenced by climate change",
                next: 223
              },

              223: {
                text: "<img class='botImage' src='images/disaster.jpeg'>",
                options: [{
                  text: "Fact 7 ",
                  next: 224
                }]
              },

              224: {
                text: "<b>Fact 7:</b> Jakarta is one of the fastest-sinking cities in the world.",
                next: 225
              },

              225: {
                text: "Here's why π ",
                next: 226
              },

              226: {
                text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J3UomZkVgAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                options: [{
                  text: "Fact 8 ",
                  next: 227
                }]
              },

              227: {
                text: "<b>Fact 8:</b>The last seven years have been the warmest seven years on record",
                next: 228
              },

              228: {
                text: '<iframe src="https://giphy.com/embed/QBdoItysjQSlC5IhOZ" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-arielnwilson-wildfires-are-not-a-season-this-is-climate-change-QBdoItysjQSlC5IhOZ"></a></p>',
                options: [{
                  text: "Fact 9 ",
                  next: 229
                }]
              },

              229: {
                text: "<b>Fact 9:</b>Everyone may die at the end of horror movies, but we donβt have to",
                next: 230
              },

              230: {
                text: '<iframe src="https://giphy.com/embed/AZFXN9ckBvn56F6zL6" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/unitednationshumanrights-loharrisart-humanrightsday-recoverbetter-AZFXN9ckBvn56F6zL6"></a></p>',
                options: [{
                  text: "Fact 10 ",
                  next: 231
                }]
              },

              231: {
                text: "<b>Fact 10:</b>Nature is an untapped solution for climate change. Restore nature",
                next: 232
              },

              232: {
                text: '<iframe src="https://giphy.com/embed/KDzm0erxGj9DjOLIg0" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/BhumiPednekar-earth-save-help-KDzm0erxGj9DjOLIg0"></a></p>',

                  next: 233

              },

              233: {
                text: 'Check some more topics from below options',
                options: [
                  {
                    text: " π Quiz Game",
                    next: 4
                  },
                  {
                    text: " β 10 ways to fight Climate Crisis",
                    next: 300
                  },
                ]
              },

///



300: {
  text: "<b>SPREAD THE WORD</b>",
  next: 301
},

301: {
  text: '<iframe src="https://giphy.com/embed/ZbH9DaFU2dZ4F6M4OI" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/barack-obama-greta-thunberg-ZbH9DaFU2dZ4F6M4OI"></a></p>',
  options: [{
    text: "2",
    next: 302
  }]
},

302: {
  text: "<b>TRANSFORM YOUR TRANSPORT</b>",
  next: 303
},

303: {
  text: "<img class='botImage' src='images/transport.png'>",
  options: [{
    text: "3",
    next: 304
  }]
},


304: {
  text: "<b>EAT MORE PLANT-BASED MEALS</b>",
  next: 305
},

305: {
  text: '<iframe src="https://giphy.com/embed/9Tk1psIYXD8OfI9Sbx" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/umwelthessen-9Tk1psIYXD8OfI9Sbx"></a></p>',
  options: [{
    text: "4",
    next: 306
  }]
},

306: {
  text: "<b>SHOP LOCAL AND BUY SUSTAINABLE</b>",
  next: 307
},

307: {
  text: '<iframe src="https://giphy.com/embed/dvxricDG1KWHYdClmp" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Modicum-animation-motion-design-modicum-dvxricDG1KWHYdClmp"></a></p>',
  options: [{
    text: "5",
    next: 308
  }]
},

308: {
  text: "<b>LIMIT IN YOUR POWER USE:</b> Install solar panels on your roof",
  next: 309
},

309: {
  text: '<iframe src="https://giphy.com/embed/Is0BjvPeeZ7w5EuFIT" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/AZoCleantech-cleantech-azo-azocleantech-Is0BjvPeeZ7w5EuFIT"></a></p>',
  options: [{
    text: "6",
    next: 310
  }]
},


310: {
  text: "<b>DON'T WASTE FOOD</b>",
  next: 311
},

311: {
  text: '<iframe src="https://giphy.com/embed/AauZyD5f2pnamJ3Zj0" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-food-waste-80-billion-pounds-of-is-thrown-away-each-year-equivalent-AauZyD5f2pnamJ3Zj0"></a></p>',
  options: [{
    text: "7",
    next: 313
  }]
},


313: {
  text: "<b>DRESS (CLIMATE) SMART</b>",
  next: 314
},

314: {
  text: "<img class='botImage' src='images/clothes.png'>",
  options: [{
    text: "8",
    next: 315
  }]
},


315: {
  text: "<b>PLANT TREES</b>",
  next: 316
},

316: {
  text: '<iframe src="https://giphy.com/embed/ns3zyhixqVTuE" width="380" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ns3zyhixqVTuE"></a></p>',
  options: [{
    text: "9",
    next: 317
  }]
},

317: {
  text: "<b>REDUCE WATER WASTE</b>",
  next: 318
},

318: {
  text: '<iframe src="https://giphy.com/embed/lYJGu43Val3WSeQLgW" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studioclip-green-ecology-save-water-lYJGu43Val3WSeQLgW"></a></p>',
  options: [{
    text: "10",
    next: 319
  }]
},

319: {
  text: "<b>FOCUS ON PLANET-FRIENDLY INVESTMENTS</b>",
  next: 320
},

320: {
  text: '<iframe src="https://giphy.com/embed/Z5gNSqVmPCNgYYJjcN" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IntoAction-clean-water-air-fund-the-fight-for-climate-justice-Z5gNSqVmPCNgYYJjcN"></a></p>',
  options: [{
    text: "Thank you for sharing these!",
    next: 321
  }]
},

321: {
  text: 'Have you checked other topics from the options below?',
  options: [
    {
      text: " π 10 Interesting facts about Climate Change",
      next: 208
    },
    {
      text: " π Quiz Game",
      next: 4
    },
  ]
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
