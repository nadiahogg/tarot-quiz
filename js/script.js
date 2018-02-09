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
    }
  ]
};

tarotQuiz.cards = [
  {
    cardName: "The Fool",
    fileName: "00_fool",
    meaning: "<p>The Fool is numbered 0, the number of unlimited potential, and does not actually have a specific place in the sequence of the Tarot cards. The Fool can come either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered as the Fool’s journey through life and as such, he is ever present and therefore needs no number.</p><p>The Fool is shown at the beginning of his journey with unlimited potential. The sun rising up behind him represents the beginning of his journey. He is facing north-west, the direction of the unknown. He is looking upwards, toward the sky, or Spirit. He is about to step off a cliff into the material world but is he prepared? He has all the tools and resources he needs in the bag on his staff but he has not opened the bag yet. The white rose in his left hand represents purity and innocence. He has a guardian in the little white dog who will protect him throughout his journey but who will also push him to learn the lessons the Fool came here to learn. The mountains behind the Fool represent the realms of Spirit that he has just left and will spend his life trying to regain.</p>"
  },
  {
    cardName: "The Magician",
    fileName: "01_magician",
    meaning: "<p>The Magician is associated with the planet, Mercury and carries with it skill, logic, and intellect. The number of the Magician is one, the number of beginnings. The Magician is the bridge between the world of the spirit and the world of humanity. His right hand holds a staff raised toward the sky and his left hand points to the earth. He takes the power of the Universe and channels it through his own body and directs it to the physical plane. Above the Magician’s head is the symbol of eternity and around his waist is a snake biting its own tail, another symbol of eternity. His magical table holds all four suits of the Tarot, each of which represents one of the four primordial elements of the alchemists – earth, air, fire and water. These symbolise the appropriate use of mind, heart, body and soul in the process of manifestation. The Magician’s robe is white, symbolising the purity and innocence found in the Fool but his cloak is red, representing worldly experience and knowledge. In the bed of flowers at his feet this duality is repeated in the mix of pure white lilies and thorny red roses.</p>"
  },
  {
    cardName: "The High Priestess",
    fileName: "02_highpriestess",
    meaning: "<p>The High Priestess is also known as Persephone, Isis, the Corn Maiden and Artemis. She sits at the gate before the great Mystery, as indicated by the Tree of Life in the background. She sits between the darkness and the light, represented by the pillars of Solomon’s temple, which suggests it is she who is the mediator of the passage into the depth of reality. The tapestry hung between the pillars keeps the casual onlookers out and allows only those initiated to enter. The pomegranates on the tapestry are sacred to Persephone. They are a symbol of duty (because Persephone ate a pomegranate seed in the underworld which forced her to return every year). The blue robe the Priestess is wearing is a symbol of knowledge. She is wearing the crown of Isis symbolising the Triple Goddess. The solar cross on her breast is a symbol of balance between male and female.</p><p>In her lap, she holds the half-revealed and half-concealed Torah, representative of the exoteric and the esoteric teachings and higher knowledge. The moon under her left foot shows her dominion over pure intuition. The palm indicates fertility of the mind and the cube on which she sits is the earth. The planet associated with the High Priestess is the Moon.</p>"
  },
  {
    cardName: "The Empress",
    fileName: "03_empress",
    meaning: "<p>The Empress is the archetypal Earth Mother, the Anima, the Feminine Principle, Demeter, Freyja and the Goddess of Fertility. Ruled by Venus, the planet of love, creativity, fertility, art, harmony, luxury, beauty and grace.</p><p>The main feature of this card is the Empress herself, a full-figured woman with blond hair and a peaceful and calm aura about her. On her head she wears a crown of stars, showing her connection with the mystical realm of angels and fairies. She is dressed in a patterned robe of pomegranates, symbolic of fertility and is seated upon a luxurious array of cushions and flowing red velvet with the symbol of Venus emblazoned upon it.</p><p>The Empress is surrounded by a beautiful, lush forest with a stream running through it, demonstrating the Empress’s deep emotional connection with Mother Earth and life. She draws her sense of peace from the trees and the water and is rejuvenated by the energy of nature. In the foreground, golden wheat springs from the ground, reflecting abundance from a recent harvest.</p>"
  },
  {
    cardName: "The Emperor",
    fileName: "04_emperor",
    meaning: "<p>The Emperor is the complement to the Empress. He is the Masculine Principle, the Animus and the Patriarch. He represents power and authority, and his stern attitude is quite a departure from the sensual beauty of the Empress. The Emperor has a long, white beard, a symbol of his experience. As an archetype, it is common to see masculine figures of authority or father figures with long white beards. It suggests that this man has acquired years of wisdom and experience and he is worthy of listening to because he has seen first-hand the consequences of his actions.</p><p>Behind his throne are barren mountains and the throne itself is decorated with four rams’ heads, representing intellectual heights, determination, action, initiative and leadership. The ram is also a symbol of Aries, the astral ruler of the Emperor. In his right hand, the Emperor holds an Ankh, the Egyptian symbol of Life, and in his left is an orb representing the world over which he rules. The orange background and the Emperor’s red clothing symbolise his passion and energy for life and the challenges it offers.</p>"
  },
  {
    cardName: "The Hierophant",
    fileName: "05_hierophant",
    meaning: "<p>The Hierophant is known as the High Priest in some decks. He is the masculine counterpart to the High Priestess. He is also known as Chiron, the Pope and the Shaman. The Hierophant is ruled by Taurus.</p><p>The Hierophant is represented by a religious figure, sitting within a formal church environment. He is wearing three elaborate vestments of his office that represent the three worlds. The crown he is wearing has three tiers to. His right hand is raised in benediction, the same hand the Magician has raised. While the Magician was taking raw power from the Universe and manifesting it on the material plane, the Hierophant channels that power through society (as in the religions of the world). The triple sceptre is another symbol of his dominion over the three worlds. The crossed keys represent a balance between the conscious and subconscious minds and unlock the mysteries. Before him kneel two initiates. The Hierophant’s task is to bring the two initiates into the church so that they can take up their appointed roles. This symbolises entry into all types of institutions where there is a shared group identity. These could include schools, clubs, teams, companies and societies.</p>"
  },
  {
    cardName: "The Lovers",
    fileName: "06_lovers",
    meaning: "<p>The sign associated with the Lovers is Gemini. The two figures in the Lovers card are blessed and protected by the angel in the clouds above them. Angels, in general, represent the refinement of earthly desires. This angel, in particular, is Raphael, the angel of Air. One of the associations of Air is communication, necessary for a healthy relationship. The purple cloak on the angel represents royalty, a symbol of how important communication is. The sun shines brightly over the couple, bringing warmth and security. The earth at their feet is green and fertile and suggests life and happiness. The snake in the fruit-laden tree behind the woman suggests the story of Adam and Eve, the fall of humanity from grace, and the temptations of the world. The snake is also a symbol of the senses. The flames behind the man represent the flames of passion, indicating the primary concern of the man. There are twelve flames, representing the twelve zodiac signs, the symbol of time and eternity. The man looks to the woman, who looks to the angel, indicating the path of the conscious to the subconscious to the super-conscious, or from physical desire to emotional needs to spiritual concerns. The mountain is a phallic symbol, while the water is a feminine symbol, indicating balance between the two.</p>"
  },
  {
    cardName: "The Chariot",
    fileName: "07_chariot",
    meaning: "<p>The Chariot is associated with the astrological sign of Cancer. He sits within a canopy of six-pointed stars, representing the celestial influences at work in this Tarot card. The crescent moons on the man’s shoulders are outward facing to refer to the formative world. The symbols on his tunic are alchemical symbols, representing the spiritual transformation of man. The square signifies earth, a sign of strength of will. The laurel and star crown indicate the highest attainment of man in spiritual evolution.</p><p>The wings on the Chariot represent inspiration and the Hindu sign of the union of positive and negative. The black and white sphinxes have the same meaning. The Charioteer holds no reins, just the wand from the Magician card. He controls through strength of will in the same way the Magician does. The city is behind him, indicating he has turned his back on civilisation and materialism in order to seek spiritual matters.</p>"
  },
  {
    cardName: "Strength",
    fileName: "08_strength",
    meaning: "<p>Under a golden sky, a woman gently pats a lion on its forehead and lower jaw. The woman gazes down at the lion with a peaceful smile on her face and appears to be successfully taming this wild beast. The fact that Strength is represented by a woman indicates that this card is not focused on pure physical strength. She has the infinity symbol above her head, the same symbol seen in the Magician. Her white robe is that of the innocent Fool, indicating a purity of spirit. The blue mountain in the background is the same phallic symbol seen in the Lovers. The lion is a symbol of our animal passions and desires. The lion itself is sticking out his tongue. Animals that are preparing to bite do not stick their tongues out. This lion is happy to submit and surrender to the woman. The woman overcomes the lion with a quiet strength that can only come from within. Her left arm represents mental effort, while the right arm represents physical effort. Her right arm is merely holding, while the left arm is exerting all the pressure. She wears a belt and crown of flowers and stands unprotected in an open green field. The crown on her head represents the fullest, most beautiful expression of nature and transient life. The sign associated with the Strength card is Leo.</p>"
  },
  {
    cardName: "The Hermit",
    fileName: "09_hermit",
    meaning: "<p>The Hermit stands alone on the top of a mountain with a lantern in his hand. Mountains typically symbolise achievement, growth, and accomplishment. The Hermit has attained his spiritual pinnacle and is ready to share his knowledge with others. He is also continuing the path he has chosen, committed to his goal of ultimate awareness. The star in the lantern is a six-pointed star (the Seal of Solomon, a symbol of wisdom). The staff carried by the Hermit is the patriarch’s staff, a symbol of the narrow path of initiation and an emblem of power and authority. It represents the Hermit’s ability to use his isolation and the knowledge he has gained as a tool upon his path to reach even higher levels of awareness. The staff is in the Hermit’s left hand, the hand associated with the subconscious mind. The snow at his feet represents the heights of spiritual attainment. He wears the grey cloak of invisibility. His secrets are not for everyone, only for those earnestly seeking them and those willing to climb the heights to wisdom. The astrological correspondence for this card is Virgo and the number 9 signifies accomplishment, wisdom, the attainment of goals, as well as the search for truth.</p>"
  },
  {
    cardName: "The Wheel of Fortune",
    fileName: "10_wheelfortune",
    meaning: "<p>The Wheel of Fortune is highly symbolic. The angel in the top left corner is Aquarius, the eagle is Scorpio, the lion is Leo and the bull is Taurus. These are the four fixed signs of the Zodiac but all have wings signifying stability amidst movement and change. The book they each have in their hands is the Torah, representing wisdom. On the wheel itself are the Hebrew letters IHVH (Yod Heh Vau Heh), the unpronounceable name of God. Interspersed with these letters are TORA (read anti-clockwise) or TARO (read clockwise) which also translates to TAROT when you return to the spot where you started. The snake descending on the left side of the Wheel is the Egyptian god Typhon, the god of evil. The snake also represents the life force descending into the material world. The Anubis rising on the right side of the Wheel is Hermes, a symbol of intelligence, wisdom ascending or our shadow selves. The Sphinx on the top of the wheel represents life’s riddles. The middle wheel contains the alchemical symbols for mercury, sulphur, water and salt – the building blocks of life and the four elements – and represents formative power. The outer circle represents the material world. The eight spokes in the wheel represent the Universal radiant energy, as well as the eight Sabbats of the year. The blue background represents wisdom.</p><p>The planet of this card is Jupiter, the planet of opportunity, growth, success, and expansion. The number 10 is a higher octave of the number 1, empowering the qualities of the 1.</p>"
  },
  {
    cardName: "Justice",
    fileName: "11_justice",
    meaning: "<p>Justice is ruled by Libra and the card number is 11. The figure of Justice sits in her chair, cloaked in red and holding a sword in her right hand and scales in her left. She wears a crown with a small square on it representing well-ordered thoughts. Notice the clasp holding the cloak together. The square is the law protecting the circle and the eternal state of oneness within us all. The sword is double-edged, cutting both ways, signifying impartiality. It is point-up, signifying victory. The sword in her right hand demonstrates the logical, well-ordered mindset necessary to dispense fair justice. The scales are in her left, intuitive hand, showing that logic must be balanced by the intuition. A little white shoe pops out from beneath her cloak, reminding us of the spiritual consequences of our actions. The purple cloth draped behind her signifies compassion and the grey pillars represent the constraints of the physical world.</p>"
  },
  {
    cardName: "The Hanged Man",
    fileName: "12_hangedman",
    meaning: "<p>The Hanged Man shows a man suspended, upside-down, from the living World Tree, rooted in the underworld and supporting the heavens. Given the serene expression on his face, it is believed he is hanging on the tree of his own will. His right foot is bound to the tree but his left foot remains free, bent at the knee and tucked in behind his right leg. His arms are bent, with hands held behind his back, forming an inverted triangle. The man is wearing red pants representing human passion and the physical body, a blue coat for knowledge, and yellow shoes representing his high ideals. Around the Hanged Man’s head is a bright yellow halo showing spiritual attainment, with the grey background suggesting invisibility (a good reminder to not flaunt your spirituality). This is the card of ultimate surrender, of being suspended in time and of martyrdom and sacrifice to the greater good. This is the archetype to meditate on to help break old patterns of behaviour and bad habits that restrict you.</p><p>The Hanged Man’s number is 12 – a higher octave of the number 3, representing careful planning and orderly growth leading to spiritual development. 1 (beginning) + 2 (the reasoning force) = 3 (the product of rebirth). The ruling planet is Neptune, the planet of self-sacrifice and idealism.</p>"
  },
  {
    cardName: "Death",
    fileName: "13_death",
    meaning: "<p>The Death card shows Death himself riding on a white horse, holding a black and white flag. Death is portrayed as a skeleton as the skeletal bones are the part of the body that survives death. The armour he is wearing indicates that he is invincible and unconquerable. Indeed, no-one has yet triumphed over death. The horse that Death rides is white, the colour of purity. Death is therefore the ultimate purifier. All things are reborn fresh, new and pure. Notice even the bishop paying homage to him. All sectors of the human race are represented here – men, women and children – showing that Death does not discern between age, race or gender.</p><p>The banner that Death carries has a black background, indicating an absence of light. The white rose, on the other hand, indicates beauty, purification and immortality. In the background of the card, there is a rising sun, a sign of immortality. The sun appears to ‘die’ each night but is reborn fresh and new every morning. The two pillars are guarding the gateway to the sun, symbolising the knowledge needed to gain immortality. The boat on the water in the background is the ferry that transports the souls across the River Styx. The background is a neutral grey, again showing Death’s impartiality.</p><p>Death is ruled by Scorpio (the sign of ‘sex, death and taxes’) and the number is 13, sacred to the Goddess as there are thirteen moons in a year.</p>"
  },
  {
    cardName: "Temperance",
    fileName: "14_temperance",
    meaning: "<p>On the Temperance card stands a winged angel. The angel is actually a hermaphrodite (the child of Hermes and Aphrodite), showing a balance between the genders. The angel has one foot on dry land, representative of the material world, and one foot in the water, representative of the subconscious. In this position, she also represents the need to ‘test the waters’ before jumping headfirst into unknown circumstances. Here she tempers the whimsical flight of the Fool who jumps without giving a second thought. The triangle inside the square on her robe represents the female being protected by natural law. In her hands she holds two cups which she uses to mix water. The cups represent the sub- and super-conscious minds. One cup can be thought of as holding hot water and the other cold water. The water flowing between them is actually going from the lower cup to the higher one, signifying rising from a lower plane to a higher one. The temperate individual mixes the opposites and finds a balance in life by avoiding extremes. The astrological sign is Sagittarius, the teacher of truth, enthusiasm, tolerance and beauty.</p>"
  },
  {
    cardName: "The Devil",
    fileName: "15_devil",
    meaning: "<p>The card of the Devil portrays a Satyr, a creature that is half man and half goat. In many myths, the goat was considered an unclean and lustful animal. However, the goat also symbolises the scapegoat, the person or thing upon which people project the inferior side of themselves in order to feel better about themselves. Thus the Devil is the scapegoat we blame for our troubles in life.</p><p>The Devil has the wings of a vampire bat, an animal that sucks the life blood out of its prey. This is symbolic of what happens when we give full reign to the realm of our raw desires. We lose our vitality and life energy. The Devil has an almost hypnotic stare, bringing those who come near him within his power. Above him is an inverted pentagram, signifying the darker side of magic and occultism.</p><p>At the foot of the Devil stands a man and a woman, both naked and chained to the podium on which the Devil sits. They appear to be held here, against their will, but only closer observation, the chains around their necks are loose and could be easily removed. This symbolises that bondage to the Devil is ultimately a voluntary matter which consciousness can release. The man and woman wear tiny horns like those of the Satyr – they are becoming more and more like the devil the longer they stay here. Both have tails – a further symbol of their animalistic or 'lower' tendencies.</p><p>The dark and doorless cave implies that the Devil dwells in the most inaccessible realm of the unconscious and only crisis can break through the walls.</p><p>The number 15 in numerology equals 6, the number that corresponds to the Lovers, and here the lovers are shown chained, in bondage to the material, sensual side of their nature. This card is ruled by Capricorn, the goat.</p>"
  },
  {
    cardName: "The Tower",
    fileName: "16_tower",
    meaning: "<p>The Tower shows a tall tower pitched atop a craggy mountain. Lightning strikes and flames burst from the building’s windows. People are seen to be leaping from the tower in desperation, wanting to flee such destruction and turmoil. The Tower signifies darkness and destruction on a physical scale, as opposed to a spiritual scale. The Tower itself represents ambitions built on false premises. The lightning bolt breaks down existing forms in order to make room for new ones. It represents a sudden, momentary glimpse of truth, a flash of inspiration that breaks down structures of ignorance and false reasoning. Notice the lightning bolt is oriented left to right (from the perspective of the card), from heaven to earth, and from Spirit to material. The falling figures correspond to the chained prisoners in the Devil card. They fall headfirst, because the sudden influx of spiritual consciousness represented by the lightning flash completely upsets all our old notions about the relations between subconsciousness and self-consciousness. The flames are actually the Hebrew yods. There are 22 flames, representing the 22 Major Arcana. The gray clouds are the clouds of misfortune that rain on everyone indiscriminately. The ruling planet of this card is Mars.</p>"
  },
  {
    cardName: "The Star",
    fileName: "17_star",
    meaning: "<p>The Star card shows a naked woman kneeling at the edge of a small pool. The woman holds two containers of water. She pours the water out to nourish the earth and to continue the cycle of fertility, represented by the lush greenery around her. The other container pours the water onto dry land in five rivulets, representing the five senses. The woman has one foot on the ground, representing her practical abilities and good common sense, and the other foot in the water, representing her intuition and inner resources, and listening to her inner voice. Behind her, shines one large star and seven smaller stars, representing your chakras. This represents a need to open your chakras and cleanse your aura. Notice all the stars have eight points. The Star is associated with the number 17, which equals 8 (1+7=8). Eight is Strength, the quality needed to accept your faults and love yourself in spite of them. The bird in the tree in the background is the sacred ibis of thought, roosting in the tree of the mind. The astrological sign of the Star is Aquarius.</p>"
  },
  {
    cardName: "The Moon",
    fileName: "18_moon",
    meaning: "<p>The Moon is the card of intuition, dreams and the unconscious. The Moon provides light as a reflection of the Sun, yet this light is dim, uncertain, and only vaguely illuminates our path as we journey toward higher consciousness. The pool at the base of the card represents the subconscious mind and the crayfish that crawls out of the pool symbolises the early stages of consciousness unfolding. This creature also represents the often disturbing images that appear from our inner depths, just as the dog and wolf at the beginning of the path represent the tamed and the wild aspects of our minds. The path leads between two towers into the mountains in the distance, showing the way to the unconsciousness. The astrological sign associated with this card is Pisces – psychic, receptive and mysterious.</p>"
  },
  {
    cardName: "The Sun",
    fileName: "19_sun",
    meaning: "<p>The Sun is an image of optimism and fulfilment, the dawn that follows the darkest night. As the source of all life on earth, the Sun represents the source of life itself. The child playing joyfully in the foreground represents the happiness of our inner spirit when we are in tune with our truest Self. He is naked, having nothing to hide. He has all the innocence and purity of childhood. The white horse upon which the child rides represents strength and purity of spirit. The horse is without a saddle and is controlled without the use of the hands. This is a symbol of perfect control between the conscious and subconscious. The child holds an orange banner in his left hand, showing that control has passed from the conscious to the subconscious. The orange banner represents action and vibration, and the rays of the sun represent the same thing. The straight rays are action while the wavy rays represent vibration. The sunflowers in the background represent life and the fruitfulness of the spirit under the nourishment of the Sun. There are four sunflowers, representing the four suits of the Minor Arcana, as well as the four elements. The astrological correspondence to this card is the Sun, of course.</p>"
  },
  {
    cardName: "Judgment",
    fileName: "20_judgement",
    meaning: "<p>The Judgement card shows a number of naked men, women and children rising up from their graves, arms outspread and responding to the trumpet call of the archangel, Gabriel, who hovers high above them. The people are appealing to the angel, ready to be judged by the power of the Universe. In the background, there are huge mountains, or even tidal waves, which signify insurmountable obstacles and the impossibility of avoiding judgment. The ocean represents the end of the river that flows through the Major Arcana, starting with the Empress. Gabriel’s banner is red on white, the same as the Magician’s clothing. As with everything in life, the beginning is woven irrevocably into the end and the end eventually leads to a new beginning. The planetary ruler of this card is Pluto, the ruler of the underworld.</p>"
  },
  {
    cardName: "The World",
    fileName: "21_world",
    meaning: "<p>In the centre of the World is a dancing figure, rejoicing in the completion of the journey and celebrating not only this completion but also the new beginnings it promises. The dancer has one leg crossed over the other, just like the Hanged man. She is, in a sense, his opposite (i.e. the Hanged Man upright). As the Hanged Man looks infinitely inward, the dancer in the World card looks infinitely outward. In each of her hands she holds a wand or baton, representative of evolution and balance. She is surrounded by a thick, green wreath, symbolic of success, victory, achievement and accomplishment, and tied with the red ribbons of eternity. The red ribbons form the infinity symbol, representing the infinite rewards of positive effort in improving both ourselves and those around us. Within the laurel wreath are stars of light indicating attainment of enlightenment or cosmic consciousness.</p><p>The figures in each of the four corners of the World card are the same figures that appear on the Wheel of Fortune. Interestingly, the World card is very much associated with the Wheel of Fortune, reflecting the cyclical progression of time and the human experience. The four figures (a lion, bull, cherub and eagle) represent the four fixed signs of the zodiac – Leo, Taurus, Aquarius and Scorpio. These are symbolic of the four elements, four suits of the Tarot, four compass points, four seasons, and the four corners of the universe. And all are within the dancer’s sight and power. The planetary ruler is Saturn, the symbol of time.</p>"
  }
];

tarotQuiz.newQuestion = function() {
    //check number of questions that the user has completed.
    //if the number is less than 10 
    //Select a random question from a pool of 30 available questions
    //remove the selected question from the pool of available questions
    const randomNumber = Math.floor(Math.random() * tarotQuiz.quiz.questions.length)
    const randomQuestion = tarotQuiz.quiz.questions[randomNumber];
    tarotQuiz.quiz.currentAnswer = randomQuestion;
    const displayedText = randomQuestion.text;
    const answerOptions = randomQuestion.options;
    const questionIndex = tarotQuiz.quiz.questions.indexOf(randomQuestion);
    const askedQuestion = tarotQuiz.quiz.questions.splice(questionIndex, 1);
    const currentQuestionNumber = tarotQuiz.quiz.currentQuestion + 1;
      //calculate and display the current question number
      $(".question-number").text("Question #" + currentQuestionNumber);
      //insert question text into question-text element to be displayed
      $(".question-text").text(displayedText);
      console.log(displayedText);
      //iterate through the array of answer options and add each option as an li to the ul
      $(".remaining-questions").append("<p>" + (11 - currentQuestionNumber) + " question(s) remaining." + "</p>");
      $(".options").html("");
      for (let i = 0; i < answerOptions.length; i = i + 1) {
        $(".options").append('<li id="' + i + '">' + answerOptions[i] + "</li>");
        console.log(answerOptions[i]);
      }
      //if the number is 10
      //display results page
};


    //User click the 'next' button
    //Display question to user
    $(".next-question").click(function(event) {
      if (tarotQuiz.quiz.currentQuestion + 1 !== 10) {
        console.log("clicked next Button");
        tarotQuiz.quiz.currentQuestion = tarotQuiz.quiz.currentQuestion + 1;
        console.log(tarotQuiz.quiz.currentQuestion);
        $(".show-meaning").addClass("hidden");
        $(".next-question").addClass("hidden");
        $(".feedback").html('');
        $(".card-meaning").html("");
        $(".remaining-questions").html("");
        tarotQuiz.newQuestion();
      } 
      else {
        console.log("Da jam done son!!");
        $(".question-view").addClass("hide");
        $(".quiz-end-page").removeClass("hidden");
        if (tarotQuiz.quiz.score < 5) {
                 $(".score-display").text("Nice try, this result simply means you're at the beginning of your journey...kinda like The Fool" + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
        } else if (tarotQuiz.quiz.score >= 5 && tarotQuiz.quiz.score < 8) {
                  $(".score-display").text("You haven't mastered the deck as yet, but you're definitely starting to come into your own with your practice. " + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
        } else if (tarotQuiz.quiz.score >= 8) {
                $(".score-display").text("Wow, you're a true Star!" + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
              }
      }
    $(".options").addClass("active");  
    $(".card-image").removeAttr("src");
    });
      
    
    //show card meaning when user clicks show meaning button
    


    $(".options").on('click','li',function() {
      if ($(".options").hasClass("active")) {
        console.log('linked clicked')
        let guess = $(this).attr('id');
        $(".options").removeClass("active");
        $(this).addClass("selected");
        $(".show-meaning").removeClass("hidden");
        $(".next-question").removeClass("hidden");
        tarotQuiz.checkAnswer(guess);
      }
    });

    
  

    $(".options").on("mouseover", "li", function() {
      if ($(".options").hasClass("active")) {
      let optionName = (this.innerText);
      for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
        if (optionName == tarotQuiz.cards[i].cardName){
          $(".card-image").attr("src", "./assets/" + tarotQuiz.cards[i].fileName + ".jpg");
        }
      }
    }

    });

    $(".options").on("mouseleave", "li", function() {
      console.log("left area")
      if ($(".options").hasClass("active")) {
      $(".card-image").removeAttr("src");
      }
    });

    $(".restart").click(function(event) {
      tarotQuiz.quiz.current = 0;
      tarotQuiz.quiz.score = 0;
      $(".quiz-end-page").addClass("hidden");
      $(".score").addClass("hide");
      $(".feedback").html("");
      $(".remaining-questions").html("");
      $(".quiz-start-page").show();
    });

    $(".show-meaning").click(function(event) {
      for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
    if ($(".correct-answer")[0].innerText == tarotQuiz.cards[i].cardName) {
      console.log("HELLL YAS");
      $('.card-meaning').html(`<p> ${tarotQuiz.cards[i].meaning} </p>`);
  }
}
    });





    tarotQuiz.checkAnswer = function(guess) {
      const currentAnswer = tarotQuiz.quiz.randomQuestion;
	if (guess == tarotQuiz.quiz.currentAnswer.correct) {
    console.log("correct!");
    $(".feedback").append(`<p>You got it right! The correct answer is</p>`); 
    tarotQuiz.quiz.score++;
  } else {
    console.log("try again");
    $(".feedback").append(`<p>Sorry, that's incorrect.</p>`);
   
  }
  $("#" + tarotQuiz.quiz.currentAnswer.correct).addClass("correct-answer");
  
  for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
    if ($(".correct-answer")[0].innerText == tarotQuiz.cards[i].cardName) {
      $(".card-image").attr("src", "./assets/" + tarotQuiz.cards[i].fileName + ".jpg");
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

$(document).ready(function() {
	$(".start").click(function(event) {
        console.log("Clicked Start Button");
        $(".quiz-start-page").hide();
		$(".question-view").removeClass("hide");
        event.preventDefault();
        tarotQuiz.newQuestion();
    })
});