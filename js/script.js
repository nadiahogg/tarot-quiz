const tarotQuiz = {};

tarotQuiz.quiz = {
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      text: "Which card is most often associated with a profound new start?",
      options: ["The Emperor", "The Fool", "The World", "Death"],
      correct: 1
    },
    {
      text:
        "Which card is about change happening whether you want it to or not?",
      options: ["Death", "The Wheel of Fortune", "The Fool", "The Devil"],
      correct: 0
    },
    {
      text: "Which card is about being at a crossroads?",
      options: ["Justice", "The Moon", "The Sun", "The Hanged Man"],
      correct: 3
    },
    {
      text:
        "Which card can sometimes indicate a need for measured and thoughtful responses and reactions?",
      options: ["Temperance", "Justice", "Strength", "Judgment"],
      correct: 3
    },
    {
      text:
        "Which card suggests that although changes are not permanent, change itself is?",
      options: [
        "The Wheel of Fortune",
        "The World",
        "The Chariot",
        "The Tower"
      ],
      correct: 0
    },
    {
      text: "Which card points to relationships at the one on one level?",
      options: ["The High Priestess", "The Empress", "The Lovers", "The Star"],
      correct: 2
    },
    {
      text:
        "Which card is about directing energies to make creative and positive beginnings?",
      options: ["The Emperor", "The Sun", "The Hierophant", "The Magician"],
      correct: 3
    },
    {
      text:
        "Which card is about doing what is right, what is expected, and is associated with upstanding, decent behavior?",
      options: ["The Hierophant", "The Emperor", "The Magician", "Justice"],
      correct: 0
    },
    {
      text: "Which card represents the power of the universe?",
      options: ["The Emperor", "The Sun", "The Fool", "The Empress"],
      correct: 1
    },
    {
      text: "Which card is about things falling apart?",
      options: [
        "The Devil",
        "The Tower",
        "The Chariot",
        "The Wheel of Fortune"
      ],
      correct: 1
    },
    {
      text:
        "Which tarot card is often associated with a feeling of being trapped?",
      options: ["The Chariot", "The Tower", "Temperance", "The Devil"],
      correct: 3
    },
    {
      text: "Which card is often a sign of being overwhelmed?",
      options: ["The World", "The Moon", "The Star", "The Chariot"],
      correct: 0
    },
    {
      text:
        "Which card is sometimes considered to be first and foremost about self-control?",
      options: ["The Hierophant", "The Emperor", "The Empress", "The Fool"],
      correct: 1
    },
    {
      text: "Which card often appears when things are far from being clear?",
      options: ["The Star", "The Moon", "The Sun", "Justice"],
      correct: 1
    },
    {
      text:
        "Which card doesn't guarantee success but says go ahead and make a wish anyway - there is always hope?",
      options: [
        "The Magician",
        "The Wheel of Fortune",
        "The Star",
        "The World"
      ],
      correct: 2
    },
    {
      text: "Which card is an indication that change is inevitable?",
      options: ["Death", "Temperance", "The Magician", "Strength"],
      correct: 0
    },
    {
      text:
        "Which card sometimes indicates that what goes around comes around?",
      options: ["The Wheel of Fortune", "The World", "Death", "Justice"],
      correct: 3
    },
    {
      text: "Which card is referred to as the Pisces of the tarot deck?",
      options: ["The High Priestess", "The Empress", "The Star", "The Moon"],
      correct: 0
    },
    {
      text:
        "Which card often appears when it seems as if the whole world has turned upside down?",
      options: ["The Chariot", "The Hanged Man", "The Tower", "The Devil"],
      correct: 0
    },
    {
      text:
        "Which card generally means that you should be on the lookout for things that are going to be important and meaningful?",
      options: ["Death", "Strength", "The Hierophant", "Justice"],
      correct: 1
    },
    {
      text:
        "Which tarot card can sometimes indicate the possibility of pregnancy?",
      options: ["The High Priestess", "The Empress", "The Moon", "The Star"],
      correct: 1
    },
    {
      text:
        "Which tarot card can sometimes indicate that a relationship from your past could start up again?",
      options: ["The Hermit", "The Lovers", "The Emperor", "The Hanged Man"],
      correct: 0
    },
    {
      text:
        "Which tarot card is considered too ambiguous for a definitive yes or no type answer?",
      options: ["The Fool", "The World", "The Magician", "The Moon"],
      correct: 3
    },
    {
      text:
        "Which tarot card could indicate that you have reached a spiritually important crossroads?",
      options: [
        "The Hanged Man",
        "The Hierophant",
        "The High Priestess",
        "The Sun"
      ],
      correct: 0
    },
    {
      text:
        "Which tarot card may mean that you need to be very cautious if you are considering mixing business with pleasure?",
      options: ["The Tower", "The Chariot", "The Lovers", "The Hanged Man"],
      correct: 2
    },
    {
      text:
        "Which tarot card could mean that a new love may be coming your way?",
      options: ["The Fool", "The Hanged Man", "The Empress", "The Sun"],
      correct: 0
    },
    {
      text:
        "Which tarot card could mean that you must learn to integrate the mundane and the spiritual in your life?",
      options: [
        "The Hierophant",
        "The High Priestess",
        "Judgment",
        "The Magician"
      ],
      correct: 3
    },
    {
      text:
        "Which tarot card sometimes indicates confusion within a love relationship?",
      options: ["The Moon", "The Fool", "The Sun", "The Star"],
      correct: 0
    },
    {
      text: "Which tarot card can sometimes point towards marriage?",
      options: [
        "The High Priestess",
        "The Hanged Man",
        "The Tower",
        "The Hierophant"
      ],
      correct: 3
    },
    {
      text:
        "Which Tarot card suggests that spiritually you should learn to see the beauty in imperfection and in the simple joy of living?",
      options: [
        "The Hermit","The Empress","Justice","Judgment"
      ],
      correct: 1
    }
  ]
};

tarotQuiz.cards = [
  {
    cardName: "The Fool",
    fileName: "00_fool",
    meaning:
      "<h1>The Fool</h1><p>The Fool is a very powerful card in the Tarot deck, usually representing a new beginning -- and, consequently, an end to something in your old life. The Fool's position in your spread reveals which aspects of your life may be subject to change. The Fool portends important decisions ahead which may not be easy to make, and involve an element of risk for you. Approach the changes with optimism and care to gain the most positive outcome.</p><h3>Past</h3><p>The risks you have taken and your original thinking have brought you success. By doing things in a new way, you have allowed for great potential.</p><h3>Present</h3><p>At this moment, you are entering a new phase of life. The experience of this change may seem good or bad now, but its influence will be clearer in the future. Assessing the risks is crucial to making the right choice.</p><h3>Future</h3><p>In order to succeed, you must find new ways to bring about the achievement of your goals. When the opportunity comes, you must be willing to shed old habits and if it never comes, it may be time to create it for yourself with new methods.<p/><h3>Yes/No Key Interpretation</h3><p>The Fool represents new beginnings and carefree adventure. Though this card could indicate foolishness, it is more optimistic in the sense that it stands for pure actions and being free from the constraints of your present life. More than likely, there are important decisions coming your way, and the answer to your question is yes.</p>"
  },
  {
    cardName: "The Magician",
    fileName: "01_magician",
    meaning:
      "<h1>The Magician</h1><p>The Magician generally associates with intelligent and skillful communicators. His presence in your spread indicates a level of self-confidence and drive which allows you to translate ideas into action. A practical card, the revelations it brings are best applied to the pragmatic and physical aspects of your life, rather then the ephemeral or theoretical. Your success in upcoming ventures in politics or business will likely hinge upon your own strength of will and determination.</p><h3>Past</h3><p>Your confidence and creativity have allowed you to effectively make your ideas into reality. You have found success through intelligence and skillful execution.</p><h3>Present</h3><p>Presently, there is a need for your knowledge and skills to influence the changes that are occuring. In order to make the changes beneficial, you must play your cards right.</p><h3>Future</h3><p>The future before you is uncertain, presenting both risk and opportunity. The possibilities will be influenced by the friendships you have nurtured and the support you have from those who are close. A triumph or creative success may bring about a new beginning for you.<p/><h3>Yes/No Key Interpretation</h3><p>The Magician is symbolic of action and power in your life. Its positive connotations illustrate someone who is a smooth talker and good at all aspects of communication. This card suggests using your strong will power to move forward and take action. The answer to your question is yes.</p>"
  },
  {
    cardName: "The High Priestess",
    fileName: "02_highpriestess",
    meaning:
      "<h1>The High Priestess</h1><p>Your identification with the High Priestess suggests you possess inherent good judgment, in the form of strong intuition. She may indicate that reason should take second place to instinct. Your head must trust in the wisdom of your heart for a change. Yet, she is also an aide by nature, and her presence in certain parts of your spread could be indicative of someone close to you coming to your rescue with their own intuition. Intuition is most effective at seeing what is hidden to the senses, so the High Priestess may also come as a warning of concealed facts or influences that are, or will be, important to you.</p><h3>Past</h3><p>You have been in need of new experiences and may wander somewhere outside of your comfort zone. If you are lacking support in important areas of your life, you should consider the idea of investing your time in new people and new ideas. You are entering a time of renewal, but you may need the help of another.</p><h3>Present</h3><p>The undiscovered or repressed creative abilities you have are demanding to be expressed. Finding a spiritual guide will help you realize the full potential of your psychic or artistic abilities. In order to get what you desire, you will need to overcome your fear of commitment.</p><h3>Future</h3><p>You are on course to receive real rewards, but only if you continue your discipline and motivation. If you reject the attempts to dissuade you, your future is bright. Follow your intuition and you are headed towards the lasting contentment of success.<p/><h3>Yes/No Key Interpretation</h3><p>The High Priestess is a spiritually intuitive woman full of mystery, wisdom, and understanding. A journey of self-discovery goes hand-in-hand with the presence of this card in your spread. She stands for things yet to be discovered in your life, and thus the answer to your question is unclear.</p>"
  },
  {
    cardName: "The Empress",
    fileName: "03_empress",
    meaning:
      "<h1>The Empress</h1><p>Traditionally associated with strong maternal influence, the presence of the Empress is excellent news if you are looking for harmony in your marriage or hoping to start a family. Any artistic endeavours you are currently associated with are also likely to be more successful, as this card often finds those exposed to strong bursts of creative or artistic energy. That creative energy may not be in the form of a painting or art project, however: This card also suggests a very strong possibility of pregnancy -- not necessarily yours, but you might be seeing a new addition to your extended family or the family of a close friend in the near future! This card is a good portent for you and those around you.</p><h3>Past</h3><p>The last opportunity you had is proving its influence now. Whether business, personal, or artistic, a new partnership will require your continued effort to succeed. Remember your most resourceful behaviors, but especially your discipline.</p><h3>Present</h3><p>There may be a new beginning unfolding before you and you decided its quality. Be understanding and especially sensitive to the emotional aspects of life. A loved one will need a helping hand or light in the dark. The role is yours to fill, no matter your choice.</p><h3>Future</h3><p>The future will bring healing and respite for your emotional and physical wounds. Spending time walking on new paths will be more beneficial than mending bridges. Your investments will pay off if you carefully tend them.<p/><h3>Yes/No Key Interpretation</h3><p>The Empress stands for all things motherly. A nurturing, loving problem solver, she indicates successful business ventures or other positive, productive opportunities to come. She suggests moving forward to fulfill your full potential, and the answer you seek is yes.</p>"
  },
  {
    cardName: "The Emperor",
    fileName: "04_emperor",
    meaning:
      "<h1>The Emperor</h1><p>Counterpart to the Empress, the Emperor is signifies a powerful influence, generally male in nature. This can also include concepts in your life historically considered masculine, such as leadership and authority, self-discipline, and stability through the power of action. Its positive influences suggest you may be on a path to advancement or promotion, but it can also be neutral. Often a companion to those destined to take on greater responsibility, it may presage change or loss that necessitates you stepping forward to shoulder a greater burden than you have in the past. Whatever the impetus for the change, it indicates you may possess an uncommon inner strength that will compel you act and to lead.</p><h3>Past</h3><p>Authority has played a great role in shaping your life. Your good position may be due to a government or a powerful person. The resolution of a recent conflict is approaching.</p><h3>Present</h3><p>There may be a moment where someone in a position of authority offers to help you. In any form, the more experienced hand that has come to help you may be more capable than yours. Protecting your loved ones is important, but those in a leadership position must know how to compromise. Beware the overly-dependant.</p><h3>Future</h3><p>Taking the initiative may lead you closer to your goal, but only if you can bear the responsibility of all your actions. You will be given the opportunity to lead in one of life's many roles. Remember those who follow behind you.<p/><h3>Yes/No Key Interpretation</h3><p>The Emperor, as the counterpart to the Empress, stands for all things fatherly. He is structure, order, and authority in your life. While moving forward in your endeavours, this card indicates that assertiveness and rationality will take you a long way. With that, your answer is yes.</p>"
  },
  {
    cardName: "The Hierophant",
    fileName: "05_hierophant",
    meaning:
      "<h1>The Hierophant</h1><p>Depending on your own nature, the Hierophant can mean very different things. At its root, it represents doctrine, but doctrine can come in the form of teaching and guidance or rigid authority. Where it appears in your spread is also important, as it is most often indicative of your own approach to the moral, religious, and social conventions of the world. Considered wisely, it helps show the path towards fulfillment.</p><h3>Past</h3><p>There is value in an ambition from your past. Look to a strength that you may have neglected.</p><h3>Present</h3><p>The opportunity for work or study under a superior is approaching. If the others around you are capable of being wrong, so are you.</p><h3>Future</h3><p>Look to the support of a solid organization or structured principles to achieve success. Your actions should be motivated beyond selfish reasons, or there will be little reward for them.<p/><h3>Yes/No Key Interpretation</h3><p>The Hierophant is a symbol of education and tradition. This card suggests seeking spiritual guidance or advice in your life. Also indicative of conformity and religious approval, this card has neither a positive or negative connotation. The only answer is maybe.</p>"
  },
  {
    cardName: "The Lovers",
    fileName: "06_lovers",
    meaning:
      "<h1>The Lovers</h1><p>Your first instinct will most likely be to associate this card as representing love, but, much like love, it does not possess a simple nature. Not only does love comes in many forms, but the Lovers may indicate important or difficult choices ahead in your life. This is bad, in that the choices it portends are generally mutually exclusive, paths to two very different futures, but also good, in that it also confirms that at least one of those paths will take you to a good place. As such, if you happen to find it in your spread, you should consider it carefully, but not fear it. It tells a story of difficult choices, likely painful, but that the correct decision and a positive outcome are within your grasp.</p><h3>Past</h3><p>By becoming more in tune with yourself, you will be more able to connect with others. The emotional burden of a recent conflict will soon be lifted and a successful resolution reached.</p><h3>Present</h3><p>There is an approaching conflict that will test your values. In order to progress, you are going to have to make a decision between love and career. Neither will disappear forever, but the choice will shape your priorities.</p><h3>Future</h3><p>It will benefit you to remember that opposites are two sides of the same coin; there is not one without the other. The right choice will be made only if you have accepted others and yourself.<p/><h3>Yes/No Key Interpretation</h3><p>The Lovers suggest being at a crossroads somewhere in your life. While this card is highly symbolic of relationships, love, and togetherness, it could also be revealing a positive business partnership or teaming up to move forward in your life. The answer to your question is yes.</p>"
  },
  {
    cardName: "The Chariot",
    fileName: "07_chariot",
    meaning:
      "<h1>The Chariot</h1><p>The Chariot is associated with the astrological sign of Cancer. He sits within a canopy of six-pointed stars, representing the celestial influences at work in this Tarot card. The crescent moons on the man’s shoulders are outward facing to refer to the formative world. The symbols on his tunic are alchemical symbols, representing the spiritual transformation of man. The square signifies earth, a sign of strength of will. The laurel and star crown indicate the highest attainment of man in spiritual evolution.</p><p>The wings on the Chariot represent inspiration and the Hindu sign of the union of positive and negative. The black and white sphinxes have the same meaning. The Charioteer holds no reins, just the wand from the Magician card. He controls through strength of will in the same way the Magician does. The city is behind him, indicating he has turned his back on civilisation and materialism in order to seek spiritual matters.</p>"
  },
  {
    cardName: "Strength",
    fileName: "08_strength",
    meaning:
      "<h1>Strength</h1><p>Under a golden sky, a woman gently pats a lion on its forehead and lower jaw. The woman gazes down at the lion with a peaceful smile on her face and appears to be successfully taming this wild beast. The fact that Strength is represented by a woman indicates that this card is not focused on pure physical strength. She has the infinity symbol above her head, the same symbol seen in the Magician. Her white robe is that of the innocent Fool, indicating a purity of spirit. The blue mountain in the background is the same phallic symbol seen in the Lovers. The lion is a symbol of our animal passions and desires. The lion itself is sticking out his tongue. Animals that are preparing to bite do not stick their tongues out. This lion is happy to submit and surrender to the woman. The woman overcomes the lion with a quiet strength that can only come from within. Her left arm represents mental effort, while the right arm represents physical effort. Her right arm is merely holding, while the left arm is exerting all the pressure. She wears a belt and crown of flowers and stands unprotected in an open green field. The crown on her head represents the fullest, most beautiful expression of nature and transient life. The sign associated with the Strength card is Leo.</p>"
  },
  {
    cardName: "The Hermit",
    fileName: "09_hermit",
    meaning:
      "<h1>The Hermit</h1><p>The Hermit stands alone on the top of a mountain with a lantern in his hand. Mountains typically symbolise achievement, growth, and accomplishment. The Hermit has attained his spiritual pinnacle and is ready to share his knowledge with others. He is also continuing the path he has chosen, committed to his goal of ultimate awareness. The star in the lantern is a six-pointed star (the Seal of Solomon, a symbol of wisdom). The staff carried by the Hermit is the patriarch’s staff, a symbol of the narrow path of initiation and an emblem of power and authority. It represents the Hermit’s ability to use his isolation and the knowledge he has gained as a tool upon his path to reach even higher levels of awareness. The staff is in the Hermit’s left hand, the hand associated with the subconscious mind. The snow at his feet represents the heights of spiritual attainment. He wears the grey cloak of invisibility. His secrets are not for everyone, only for those earnestly seeking them and those willing to climb the heights to wisdom. The astrological correspondence for this card is Virgo and the number 9 signifies accomplishment, wisdom, the attainment of goals, as well as the search for truth.</p>"
  },
  {
    cardName: "The Wheel of Fortune",
    fileName: "10_wheelfortune",
    meaning:
      "<h1>The Wheel of Fortune</h1><p>The Wheel of Fortune is highly symbolic. The angel in the top left corner is Aquarius, the eagle is Scorpio, the lion is Leo and the bull is Taurus. These are the four fixed signs of the Zodiac but all have wings signifying stability amidst movement and change. The book they each have in their hands is the Torah, representing wisdom. On the wheel itself are the Hebrew letters IHVH (Yod Heh Vau Heh), the unpronounceable name of God. Interspersed with these letters are TORA (read anti-clockwise) or TARO (read clockwise) which also translates to TAROT when you return to the spot where you started. The snake descending on the left side of the Wheel is the Egyptian god Typhon, the god of evil. The snake also represents the life force descending into the material world. The Anubis rising on the right side of the Wheel is Hermes, a symbol of intelligence, wisdom ascending or our shadow selves. The Sphinx on the top of the wheel represents life’s riddles. The middle wheel contains the alchemical symbols for mercury, sulphur, water and salt – the building blocks of life and the four elements – and represents formative power. The outer circle represents the material world. The eight spokes in the wheel represent the Universal radiant energy, as well as the eight Sabbats of the year. The blue background represents wisdom.</p><p>The planet of this card is Jupiter, the planet of opportunity, growth, success, and expansion. The number 10 is a higher octave of the number 1, empowering the qualities of the 1.</p>"
  },
  {
    cardName: "Justice",
    fileName: "11_justice",
    meaning:
      "<h1>Justice</h1><p>Justice is ruled by Libra and the card number is 11. The figure of Justice sits in her chair, cloaked in red and holding a sword in her right hand and scales in her left. She wears a crown with a small square on it representing well-ordered thoughts. Notice the clasp holding the cloak together. The square is the law protecting the circle and the eternal state of oneness within us all. The sword is double-edged, cutting both ways, signifying impartiality. It is point-up, signifying victory. The sword in her right hand demonstrates the logical, well-ordered mindset necessary to dispense fair justice. The scales are in her left, intuitive hand, showing that logic must be balanced by the intuition. A little white shoe pops out from beneath her cloak, reminding us of the spiritual consequences of our actions. The purple cloth draped behind her signifies compassion and the grey pillars represent the constraints of the physical world.</p>"
  },
  {
    cardName: "The Hanged Man",
    fileName: "12_hangedman",
    meaning:
      "<h1>The Hanged Man</h1><p>The Hanged Man shows a man suspended, upside-down, from the living World Tree, rooted in the underworld and supporting the heavens. Given the serene expression on his face, it is believed he is hanging on the tree of his own will. His right foot is bound to the tree but his left foot remains free, bent at the knee and tucked in behind his right leg. His arms are bent, with hands held behind his back, forming an inverted triangle. The man is wearing red pants representing human passion and the physical body, a blue coat for knowledge, and yellow shoes representing his high ideals. Around the Hanged Man’s head is a bright yellow halo showing spiritual attainment, with the grey background suggesting invisibility (a good reminder to not flaunt your spirituality). This is the card of ultimate surrender, of being suspended in time and of martyrdom and sacrifice to the greater good. This is the archetype to meditate on to help break old patterns of behaviour and bad habits that restrict you.</p><p>The Hanged Man’s number is 12 – a higher octave of the number 3, representing careful planning and orderly growth leading to spiritual development. 1 (beginning) + 2 (the reasoning force) = 3 (the product of rebirth). The ruling planet is Neptune, the planet of self-sacrifice and idealism.</p>"
  },
  {
    cardName: "Death",
    fileName: "13_death",
    meaning:
      "<h1>Death</h1><p>The Death card shows Death himself riding on a white horse, holding a black and white flag. Death is portrayed as a skeleton as the skeletal bones are the part of the body that survives death. The armour he is wearing indicates that he is invincible and unconquerable. Indeed, no-one has yet triumphed over death. The horse that Death rides is white, the colour of purity. Death is therefore the ultimate purifier. All things are reborn fresh, new and pure. Notice even the bishop paying homage to him. All sectors of the human race are represented here – men, women and children – showing that Death does not discern between age, race or gender.</p><p>The banner that Death carries has a black background, indicating an absence of light. The white rose, on the other hand, indicates beauty, purification and immortality. In the background of the card, there is a rising sun, a sign of immortality. The sun appears to ‘die’ each night but is reborn fresh and new every morning. The two pillars are guarding the gateway to the sun, symbolising the knowledge needed to gain immortality. The boat on the water in the background is the ferry that transports the souls across the River Styx. The background is a neutral grey, again showing Death’s impartiality.</p><p>Death is ruled by Scorpio (the sign of ‘sex, death and taxes’) and the number is 13, sacred to the Goddess as there are thirteen moons in a year.</p>"
  },
  {
    cardName: "Temperance",
    fileName: "14_temperance",
    meaning:
      "<h1>Temperance</h1><p>On the Temperance card stands a winged angel. The angel is actually a hermaphrodite (the child of Hermes and Aphrodite), showing a balance between the genders. The angel has one foot on dry land, representative of the material world, and one foot in the water, representative of the subconscious. In this position, she also represents the need to ‘test the waters’ before jumping headfirst into unknown circumstances. Here she tempers the whimsical flight of the Fool who jumps without giving a second thought. The triangle inside the square on her robe represents the female being protected by natural law. In her hands she holds two cups which she uses to mix water. The cups represent the sub- and super-conscious minds. One cup can be thought of as holding hot water and the other cold water. The water flowing between them is actually going from the lower cup to the higher one, signifying rising from a lower plane to a higher one. The temperate individual mixes the opposites and finds a balance in life by avoiding extremes. The astrological sign is Sagittarius, the teacher of truth, enthusiasm, tolerance and beauty.</p>"
  },
  {
    cardName: "The Devil",
    fileName: "15_devil",
    meaning:
      "<h1>The Devil</h1><p>The card of the Devil portrays a Satyr, a creature that is half man and half goat. In many myths, the goat was considered an unclean and lustful animal. However, the goat also symbolises the scapegoat, the person or thing upon which people project the inferior side of themselves in order to feel better about themselves. Thus the Devil is the scapegoat we blame for our troubles in life.</p><p>The Devil has the wings of a vampire bat, an animal that sucks the life blood out of its prey. This is symbolic of what happens when we give full reign to the realm of our raw desires. We lose our vitality and life energy. The Devil has an almost hypnotic stare, bringing those who come near him within his power. Above him is an inverted pentagram, signifying the darker side of magic and occultism.</p><p>At the foot of the Devil stands a man and a woman, both naked and chained to the podium on which the Devil sits. They appear to be held here, against their will, but only closer observation, the chains around their necks are loose and could be easily removed. This symbolises that bondage to the Devil is ultimately a voluntary matter which consciousness can release. The man and woman wear tiny horns like those of the Satyr – they are becoming more and more like the devil the longer they stay here. Both have tails – a further symbol of their animalistic or 'lower' tendencies.</p><p>The dark and doorless cave implies that the Devil dwells in the most inaccessible realm of the unconscious and only crisis can break through the walls.</p><p>The number 15 in numerology equals 6, the number that corresponds to the Lovers, and here the lovers are shown chained, in bondage to the material, sensual side of their nature. This card is ruled by Capricorn, the goat.</p>"
  },
  {
    cardName: "The Tower",
    fileName: "16_tower",
    meaning:
      "<h1>The Tower</h1><p>The Tower shows a tall tower pitched atop a craggy mountain. Lightning strikes and flames burst from the building’s windows. People are seen to be leaping from the tower in desperation, wanting to flee such destruction and turmoil. The Tower signifies darkness and destruction on a physical scale, as opposed to a spiritual scale. The Tower itself represents ambitions built on false premises. The lightning bolt breaks down existing forms in order to make room for new ones. It represents a sudden, momentary glimpse of truth, a flash of inspiration that breaks down structures of ignorance and false reasoning. Notice the lightning bolt is oriented left to right (from the perspective of the card), from heaven to earth, and from Spirit to material. The falling figures correspond to the chained prisoners in the Devil card. They fall headfirst, because the sudden influx of spiritual consciousness represented by the lightning flash completely upsets all our old notions about the relations between subconsciousness and self-consciousness. The flames are actually the Hebrew yods. There are 22 flames, representing the 22 Major Arcana. The gray clouds are the clouds of misfortune that rain on everyone indiscriminately. The ruling planet of this card is Mars.</p>"
  },
  {
    cardName: "The Star",
    fileName: "17_star",
    meaning:
      "<h1>The Star</h1><p>The Star card shows a naked woman kneeling at the edge of a small pool. The woman holds two containers of water. She pours the water out to nourish the earth and to continue the cycle of fertility, represented by the lush greenery around her. The other container pours the water onto dry land in five rivulets, representing the five senses. The woman has one foot on the ground, representing her practical abilities and good common sense, and the other foot in the water, representing her intuition and inner resources, and listening to her inner voice. Behind her, shines one large star and seven smaller stars, representing your chakras. This represents a need to open your chakras and cleanse your aura. Notice all the stars have eight points. The Star is associated with the number 17, which equals 8 (1+7=8). Eight is Strength, the quality needed to accept your faults and love yourself in spite of them. The bird in the tree in the background is the sacred ibis of thought, roosting in the tree of the mind. The astrological sign of the Star is Aquarius.</p>"
  },
  {
    cardName: "The Moon",
    fileName: "18_moon",
    meaning:
      "<h1>The Moon</h1><p>The Moon is the card of intuition, dreams and the unconscious. The Moon provides light as a reflection of the Sun, yet this light is dim, uncertain, and only vaguely illuminates our path as we journey toward higher consciousness. The pool at the base of the card represents the subconscious mind and the crayfish that crawls out of the pool symbolises the early stages of consciousness unfolding. This creature also represents the often disturbing images that appear from our inner depths, just as the dog and wolf at the beginning of the path represent the tamed and the wild aspects of our minds. The path leads between two towers into the mountains in the distance, showing the way to the unconsciousness. The astrological sign associated with this card is Pisces – psychic, receptive and mysterious.</p>"
  },
  {
    cardName: "The Sun",
    fileName: "19_sun",
    meaning:
      "<h1>The Sun</h1><p>The Sun is an image of optimism and fulfilment, the dawn that follows the darkest night. As the source of all life on earth, the Sun represents the source of life itself. The child playing joyfully in the foreground represents the happiness of our inner spirit when we are in tune with our truest Self. He is naked, having nothing to hide. He has all the innocence and purity of childhood. The white horse upon which the child rides represents strength and purity of spirit. The horse is without a saddle and is controlled without the use of the hands. This is a symbol of perfect control between the conscious and subconscious. The child holds an orange banner in his left hand, showing that control has passed from the conscious to the subconscious. The orange banner represents action and vibration, and the rays of the sun represent the same thing. The straight rays are action while the wavy rays represent vibration. The sunflowers in the background represent life and the fruitfulness of the spirit under the nourishment of the Sun. There are four sunflowers, representing the four suits of the Minor Arcana, as well as the four elements. The astrological correspondence to this card is the Sun, of course.</p>"
  },
  {
    cardName: "Judgment",
    fileName: "20_judgement",
    meaning:
      "<h1>Judgment</h1><p>The Judgement card shows a number of naked men, women and children rising up from their graves, arms outspread and responding to the trumpet call of the archangel, Gabriel, who hovers high above them. The people are appealing to the angel, ready to be judged by the power of the Universe. In the background, there are huge mountains, or even tidal waves, which signify insurmountable obstacles and the impossibility of avoiding judgment. The ocean represents the end of the river that flows through the Major Arcana, starting with the Empress. Gabriel’s banner is red on white, the same as the Magician’s clothing. As with everything in life, the beginning is woven irrevocably into the end and the end eventually leads to a new beginning. The planetary ruler of this card is Pluto, the ruler of the underworld.</p>"
  },
  {
    cardName: "The World",
    fileName: "21_world",
    meaning:
      "<h1>The World</h1><p>In the centre of the World is a dancing figure, rejoicing in the completion of the journey and celebrating not only this completion but also the new beginnings it promises. The dancer has one leg crossed over the other, just like the Hanged man. She is, in a sense, his opposite (i.e. the Hanged Man upright). As the Hanged Man looks infinitely inward, the dancer in the World card looks infinitely outward. In each of her hands she holds a wand or baton, representative of evolution and balance. She is surrounded by a thick, green wreath, symbolic of success, victory, achievement and accomplishment, and tied with the red ribbons of eternity. The red ribbons form the infinity symbol, representing the infinite rewards of positive effort in improving both ourselves and those around us. Within the laurel wreath are stars of light indicating attainment of enlightenment or cosmic consciousness.</p><p>The figures in each of the four corners of the World card are the same figures that appear on the Wheel of Fortune. Interestingly, the World card is very much associated with the Wheel of Fortune, reflecting the cyclical progression of time and the human experience. The four figures (a lion, bull, cherub and eagle) represent the four fixed signs of the zodiac – Leo, Taurus, Aquarius and Scorpio. These are symbolic of the four elements, four suits of the Tarot, four compass points, four seasons, and the four corners of the universe. And all are within the dancer’s sight and power. The planetary ruler is Saturn, the symbol of time.</p>"
  }
];

//When the user clicks the start button we will hide the current view and show the question view in it's place.
$(document).ready(function() {
  $(".start").click(function(event) {
    $(".quiz-start-page").hide();
    $(".question-view").removeClass("hide");
    event.preventDefault();
    tarotQuiz.newQuestion();
  });

//When the user hovers over an answer option the card image for that option will show.
$(".options").on("mouseover", "li", function() {
  if ($(".options").hasClass("active")) {
    let optionName = this.innerText;
    for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
      if (optionName == tarotQuiz.cards[i].cardName) {
        $(".card-image").attr("src","./images/" + tarotQuiz.cards[i].fileName + ".jpg");
      }
    }
  }
});

 $(".options").on("mouseleave", "li", function() {
   if ($(".options").hasClass("active")) {
     $(".card-image").removeAttr("src");
   }
 });

//When the user selects an answer their choice will become highlighted
//Hover and click properties are turned off
$(".options").on("click", "li", function() {
  if ($(".options").hasClass("active")) {
    let guess = $(this).attr("id");
    $(".options").removeClass("active");
    $(this).addClass("selected");
    $(".show-meaning").removeClass("hide");
    $(".next-question").removeClass("hide");
    tarotQuiz.checkAnswer(guess);
  }
});

//Check that current question is not 10 then hide question section and show the quiz end page.
$(".next-question").click(function(event) {
  $(".options").addClass("active");
  $(".card-image").removeAttr("src");
  $(".show-meaning").addClass("hide");
  $(".next-question").addClass("hide");
  $(".feedback").html("");
  $(".card-meaning").html("");
  $(".remaining-questions").html("");
  if (tarotQuiz.quiz.currentQuestion !== 10) {
    tarotQuiz.newQuestion();
  } else {
    $(".question-view").addClass("hide");
    $(".quiz-end-page").removeClass("hide");
    if (tarotQuiz.quiz.score < 5) {
      $(".score-display").text(
        "Nice try, this result simply means you're at the beginning of your journey...kinda like The Fool! " + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
    } else if (tarotQuiz.quiz.score >= 5 && tarotQuiz.quiz.score < 8) {
      $(".score-display").text(
        "You haven't mastered the deck as yet, but you're definitely starting to come into your own with your practice. " + "You scored " +  tarotQuiz.quiz.score + " out of " + 10);
    } else if (tarotQuiz.quiz.score >= 8) {
      $(".score-display").text(
        "Wow, you're a true Star! " +  "You scored " +  tarotQuiz.quiz.score +
          " out of " +  10);
    }
  }
  
});

$(".restart").click(function(event) {
  tarotQuiz.quiz.currentQuestion = 0;
  tarotQuiz.quiz.score = 0;
  $(".quiz-end-page").addClass("hide");
  $(".score").addClass("hide");
  $(".feedback").html("");
  $(".remaining-questions").html("");
  $(".quiz-start-page").show();
});

  tarotQuiz.newQuestion = function() {
    tarotQuiz.quiz.currentQuestion = tarotQuiz.quiz.currentQuestion + 1;
    const randomNumber = Math.floor(
      Math.random() * tarotQuiz.quiz.questions.length
    );
    const randomQuestion = tarotQuiz.quiz.questions[randomNumber];
    tarotQuiz.quiz.currentAnswer = randomQuestion;
    const displayedText = randomQuestion.text;
    const answerOptions = randomQuestion.options;
    const questionIndex = tarotQuiz.quiz.questions.indexOf(randomQuestion);
    const askedQuestion = tarotQuiz.quiz.questions.splice(questionIndex, 1);
    const currentQuestionNumber = tarotQuiz.quiz.currentQuestion;
    //calculate and display the current question number
    $(".question-number").text("Question #" + currentQuestionNumber);
    //insert question text into question-text element to be displayed
    $(".question-text").text(displayedText);
    console.log(displayedText);
    //iterate through the array of answer options and add each option as an li to the ul
    $(".remaining-questions").append(
      "<p>" + (11 - currentQuestionNumber) + " question(s) remaining" + "</p>"
    );
    $(".options").html("");
    for (let i = 0; i < answerOptions.length; i = i + 1) {
      $(".options").append('<li id="' + i + '">' + answerOptions[i] + "</li>");
      console.log(answerOptions[i]);
    }
   
  };

  // //User click the 'next' button
  // //Display question to user
  // $(".next-question").click(function(event) {
  //   if (tarotQuiz.quiz.currentQuestion + 1 !== 10) {
  //     console.log("clicked next Button");
  //     tarotQuiz.quiz.currentQuestion = tarotQuiz.quiz.currentQuestion + 1;
  //     console.log(tarotQuiz.quiz.currentQuestion);
  //     $(".show-meaning").addClass("hide");
  //     $(".next-question").addClass("hide");
  //     $(".feedback").html("");
  //     $(".card-meaning").html("");
  //     $(".remaining-questions").html("");
  //     tarotQuiz.newQuestion();
  //   } else {
  //     console.log("Da jam done son!!");
  //     $(".question-view").addClass("hide");
  //     $(".quiz-end-page").removeClass("hide");
  //     if (tarotQuiz.quiz.score < 5) {
  //       $(".score-display").text(
  //         "Nice try, this result simply means you're at the beginning of your journey...kinda like The Fool! " +
  //           "You scored " +
  //           tarotQuiz.quiz.score +
  //           " out of " +
  //           10
  //       );
  //     } else if (tarotQuiz.quiz.score >= 5 && tarotQuiz.quiz.score < 8) {
  //       $(".score-display").text(
  //         "You haven't mastered the deck as yet, but you're definitely starting to come into your own with your practice. " +
  //           "You scored " +
  //           tarotQuiz.quiz.score +
  //           " out of " +
  //           10
  //       );
  //     } else if (tarotQuiz.quiz.score >= 8) {
  //       $(".score-display").text(
  //         "Wow, you're a true Star! " +
  //           "You scored " +
  //           tarotQuiz.quiz.score +
  //           " out of " +
  //           10
  //       );
  //     }
  //   }
  //   $(".options").addClass("active");
  //   $(".card-image").removeAttr("src");
  // });

  //show card meaning when user clicks show meaning button

  


 

  

  $(".show-meaning").click(function(event) {
    $(".overlay").removeClass("hide");
    for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
      if ($(".correct-answer")[0].innerText == tarotQuiz.cards[i].cardName) {
        $(".card-meaning").html(`<p> ${tarotQuiz.cards[i].meaning} </p>`);
      }
    }
  });

  $(".close-meaning").click(function(event) {
    $(".overlay").addClass("hide");
  });

  tarotQuiz.checkAnswer = function(guess) {
    const currentAnswer = tarotQuiz.quiz.randomQuestion;
    if (guess == tarotQuiz.quiz.currentAnswer.correct) {
      console.log("correct!");
      $(".feedback").append(`<p>You got it right!</p>`);
      tarotQuiz.quiz.score++;
    } else {
      console.log("try again");
      $(".feedback").append(`<p>Sorry, that's incorrect.</p>`);
    }
    $("#" + tarotQuiz.quiz.currentAnswer.correct).addClass("correct-answer");

    for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
      if ($(".correct-answer")[0].innerText == tarotQuiz.cards[i].cardName) {
        $(".card-image").attr(
          "src",
          "./images/" + tarotQuiz.cards[i].fileName + ".jpg"
        );
      }
    }
  };

  // tarotQuiz.showImage = function(correctCard) {
  //   const correctCard = tarotQuiz.quiz.currentAnswer.;
  // }

  //User mouse over an answer option.
  //display the image file for the that option

  //User clicks an answer.
  //check if the question answer matches the user's selection
  //if answer is correct display message "You got it right!"
  //add +1 correct answer count
  //else display "Sorry, the correct answer is ${...}"
  //display the image for the correct answer.

  //User clicks reveal meaning.
  //show the description of the card $('.description-box').fadeIn(2000);

  //User clicks the close button on the meaning
  // $(".description-box").fadeOut();

  //User clicks 'try again' button
  //start game again.
});
