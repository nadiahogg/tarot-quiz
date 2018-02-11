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
      "<h1>The Fool</h1><h4>Carefree · Foolish · Important decisions · New beginnings · Optimistic</h4><p>The Fool is a very powerful card in the Tarot deck, usually representing a new beginning -- and, consequently, an end to something in your old life. The Fool's position in your spread reveals which aspects of your life may be subject to change. The Fool portends important decisions ahead which may not be easy to make, and involve an element of risk for you. Approach the changes with optimism and care to gain the most positive outcome.</p><h3>Past</h3><p>The risks you have taken and your original thinking have brought you success. By doing things in a new way, you have allowed for great potential.</p><h3>Present</h3><p>At this moment, you are entering a new phase of life. The experience of this change may seem good or bad now, but its influence will be clearer in the future. Assessing the risks is crucial to making the right choice.</p><h3>Future</h3><p>In order to succeed, you must find new ways to bring about the achievement of your goals. When the opportunity comes, you must be willing to shed old habits and if it never comes, it may be time to create it for yourself with new methods.<p/><h3>Yes/No Key Interpretation</h3><p>The Fool represents new beginnings and carefree adventure. Though this card could indicate foolishness, it is more optimistic in the sense that it stands for pure actions and being free from the constraints of your present life. More than likely, there are important decisions coming your way, and the answer to your question is yes.</p>"
  },
  {
    cardName: "The Magician",
    fileName: "01_magician",
    meaning:
      "<h1>The Magician</h1><h4>Confident · Creative · Important communications · Skillful · Talented & proficient</h4><p>The Magician generally associates with intelligent and skillful communicators. His presence in your spread indicates a level of self-confidence and drive which allows you to translate ideas into action. A practical card, the revelations it brings are best applied to the pragmatic and physical aspects of your life, rather then the ephemeral or theoretical. Your success in upcoming ventures in politics or business will likely hinge upon your own strength of will and determination.</p><h3>Past</h3><p>Your confidence and creativity have allowed you to effectively make your ideas into reality. You have found success through intelligence and skillful execution.</p><h3>Present</h3><p>Presently, there is a need for your knowledge and skills to influence the changes that are occuring. In order to make the changes beneficial, you must play your cards right.</p><h3>Future</h3><p>The future before you is uncertain, presenting both risk and opportunity. The possibilities will be influenced by the friendships you have nurtured and the support you have from those who are close. A triumph or creative success may bring about a new beginning for you.<p/><h3>Yes/No Key Interpretation</h3><p>The Magician is symbolic of action and power in your life. Its positive connotations illustrate someone who is a smooth talker and good at all aspects of communication. This card suggests using your strong will power to move forward and take action. The answer to your question is yes.</p>"
  },
  {
    cardName: "The High Priestess",
    fileName: "02_highpriestess",
    meaning:
      "<h1>The High Priestess</h1><h4>Feminine influences · Insightful · Mystery · Understanding · Wisdom</h4><p>Your identification with the High Priestess suggests you possess inherent good judgment, in the form of strong intuition. She may indicate that reason should take second place to instinct. Your head must trust in the wisdom of your heart for a change. Yet, she is also an aide by nature, and her presence in certain parts of your spread could be indicative of someone close to you coming to your rescue with their own intuition. Intuition is most effective at seeing what is hidden to the senses, so the High Priestess may also come as a warning of concealed facts or influences that are, or will be, important to you.</p><h3>Past</h3><p>You have been in need of new experiences and may wander somewhere outside of your comfort zone. If you are lacking support in important areas of your life, you should consider the idea of investing your time in new people and new ideas. You are entering a time of renewal, but you may need the help of another.</p><h3>Present</h3><p>The undiscovered or repressed creative abilities you have are demanding to be expressed. Finding a spiritual guide will help you realize the full potential of your psychic or artistic abilities. In order to get what you desire, you will need to overcome your fear of commitment.</p><h3>Future</h3><p>You are on course to receive real rewards, but only if you continue your discipline and motivation. If you reject the attempts to dissuade you, your future is bright. Follow your intuition and you are headed towards the lasting contentment of success.<p/><h3>Yes/No Key Interpretation</h3><p>The High Priestess is a spiritually intuitive woman full of mystery, wisdom, and understanding. A journey of self-discovery goes hand-in-hand with the presence of this card in your spread. She stands for things yet to be discovered in your life, and thus the answer to your question is unclear.</p>"
  },
  {
    cardName: "The Empress",
    fileName: "03_empress",
    meaning:
      "<h1>The Empress</h1><h4>Abundant creativity · Fertility · Fulfillment · Mother figure · Productivity</h4><p>Traditionally associated with strong maternal influence, the presence of the Empress is excellent news if you are looking for harmony in your marriage or hoping to start a family. Any artistic endeavours you are currently associated with are also likely to be more successful, as this card often finds those exposed to strong bursts of creative or artistic energy. That creative energy may not be in the form of a painting or art project, however: This card also suggests a very strong possibility of pregnancy -- not necessarily yours, but you might be seeing a new addition to your extended family or the family of a close friend in the near future! This card is a good portent for you and those around you.</p><h3>Past</h3><p>The last opportunity you had is proving its influence now. Whether business, personal, or artistic, a new partnership will require your continued effort to succeed. Remember your most resourceful behaviors, but especially your discipline.</p><h3>Present</h3><p>There may be a new beginning unfolding before you and you decided its quality. Be understanding and especially sensitive to the emotional aspects of life. A loved one will need a helping hand or light in the dark. The role is yours to fill, no matter your choice.</p><h3>Future</h3><p>The future will bring healing and respite for your emotional and physical wounds. Spending time walking on new paths will be more beneficial than mending bridges. Your investments will pay off if you carefully tend them.<p/><h3>Yes/No Key Interpretation</h3><p>The Empress stands for all things motherly. A nurturing, loving problem solver, she indicates successful business ventures or other positive, productive opportunities to come. She suggests moving forward to fulfill your full potential, and the answer you seek is yes.</p>"
  },
  {
    cardName: "The Emperor",
    fileName: "04_emperor",
    meaning:
      "<h1>The Emperor</h1><h4>Authority · Father figure · Masculine influence · Rational · Stable</h4><p>Counterpart to the Empress, the Emperor is signifies a powerful influence, generally male in nature. This can also include concepts in your life historically considered masculine, such as leadership and authority, self-discipline, and stability through the power of action. Its positive influences suggest you may be on a path to advancement or promotion, but it can also be neutral. Often a companion to those destined to take on greater responsibility, it may presage change or loss that necessitates you stepping forward to shoulder a greater burden than you have in the past. Whatever the impetus for the change, it indicates you may possess an uncommon inner strength that will compel you act and to lead.</p><h3>Past</h3><p>Authority has played a great role in shaping your life. Your good position may be due to a government or a powerful person. The resolution of a recent conflict is approaching.</p><h3>Present</h3><p>There may be a moment where someone in a position of authority offers to help you. In any form, the more experienced hand that has come to help you may be more capable than yours. Protecting your loved ones is important, but those in a leadership position must know how to compromise. Beware the overly-dependant.</p><h3>Future</h3><p>Taking the initiative may lead you closer to your goal, but only if you can bear the responsibility of all your actions. You will be given the opportunity to lead in one of life's many roles. Remember those who follow behind you.<p/><h3>Yes/No Key Interpretation</h3><p>The Emperor, as the counterpart to the Empress, stands for all things fatherly. He is structure, order, and authority in your life. While moving forward in your endeavours, this card indicates that assertiveness and rationality will take you a long way. With that, your answer is yes.</p>"
  },
  {
    cardName: "The Hierophant",
    fileName: "05_hierophant",
    meaning:
      "<h1>The Hierophant</h1><h4>Approval · Conformity · Consent · Good advice · Marriage or Union</h4><p>Depending on your own nature, the Hierophant can mean very different things. At its root, it represents doctrine, but doctrine can come in the form of teaching and guidance or rigid authority. Where it appears in your spread is also important, as it is most often indicative of your own approach to the moral, religious, and social conventions of the world. Considered wisely, it helps show the path towards fulfillment.</p><h3>Past</h3><p>There is value in an ambition from your past. Look to a strength that you may have neglected.</p><h3>Present</h3><p>The opportunity for work or study under a superior is approaching. If the others around you are capable of being wrong, so are you.</p><h3>Future</h3><p>Look to the support of a solid organization or structured principles to achieve success. Your actions should be motivated beyond selfish reasons, or there will be little reward for them.<p/><h3>Yes/No Key Interpretation</h3><p>The Hierophant is a symbol of education and tradition. This card suggests seeking spiritual guidance or advice in your life. Also indicative of conformity and religious approval, this card has neither a positive or negative connotation. The only answer is maybe.</p>"
  },
  {
    cardName: "The Lovers",
    fileName: "06_lovers",
    meaning:
      "<h1>The Lovers</h1><h4>Attachment or combination · Conflicting choices · Partners · Relationships · Union</h4><p>Your first instinct will most likely be to associate this card as representing love, but, much like love, it does not possess a simple nature. Not only does love comes in many forms, but the Lovers may indicate important or difficult choices ahead in your life. This is bad, in that the choices it portends are generally mutually exclusive, paths to two very different futures, but also good, in that it also confirms that at least one of those paths will take you to a good place. As such, if you happen to find it in your spread, you should consider it carefully, but not fear it. It tells a story of difficult choices, likely painful, but that the correct decision and a positive outcome are within your grasp.</p><h3>Past</h3><p>By becoming more in tune with yourself, you will be more able to connect with others. The emotional burden of a recent conflict will soon be lifted and a successful resolution reached.</p><h3>Present</h3><p>There is an approaching conflict that will test your values. In order to progress, you are going to have to make a decision between love and career. Neither will disappear forever, but the choice will shape your priorities.</p><h3>Future</h3><p>It will benefit you to remember that opposites are two sides of the same coin; there is not one without the other. The right choice will be made only if you have accepted others and yourself.<p/><h3>Yes/No Key Interpretation</h3><p>The Lovers suggest being at a crossroads somewhere in your life. While this card is highly symbolic of relationships, love, and togetherness, it could also be revealing a positive business partnership or teaming up to move forward in your life. The answer to your question is yes.</p>"
  },
  {
    cardName: "The Chariot",
    fileName: "07_chariot",
    meaning:
      "<h1>The Chariot</h1><h4>Journey · Progression · Strong character · Success from effort · Transportation and movement</h4><p>You have some hard work ahead of you. It may be resolved quickly, but the Chariot is a powerful card, and the labor you are undertaking will probably trend towards long and difficult. You will quite possibly experience rough roads, long uphill slopes, dead ends, and painful setbacks. A good outcome is only assured if the card is upright, but do not let yourself lose hope: This hard road will instil in you a strength of purpose, the ability to overcome through organization and endurance, and the confidence possessed only by those who have done what they thought they could not. Harnessed correctly, few forces can stand against an individual like that.</p><h3>Past</h3><p>Your character has been tested by the tendency to protect your own interests and ego. The struggle has strengthened you and recent events have given you a chance to accomplish your victory.</p><h3>Present</h3><p>Good news is coming and you will better the opposition in a decisive victory.</p><h3>Future</h3><p>Continue your struggle and the end you seek will be achieved. Honor, acclaim, and recognition are all possible outcomes for you if you do not quit.<p/><h3>Yes/No Key Interpretation</h3><p>The Chariot reveals some sort of journey. With a positive connotation, this journey will most likely be a progression of some sort. It could also be the final success you have been working for. The confidence, direction, and victory shown through this card indicate that the answer is yes.</p>"
  },
  {
    cardName: "Strength",
    fileName: "08_strength",
    meaning:
      "<h1>Strength</h1><h4>Energy · Facing problems · Strengh · Vitality · Willpower</h4><p>Strength is the rawest form of power, and you possess it in some form. It is a very happy card if you are fighting illness or recovering from injury. As might be suspected, its influence over you, and the use you put it to, can trend towards light or dark. You likely trend towards facing your problems courageously, head-on, and conquering them through perseverance and will. With this ability to overcome life's obstacles, though, comes the responsibility to control yourself, and it this card may be a warning to take command of your own actions or emotions before they damage you or the people you care about.</p><h3>Past</h3><p>Your strength is balanced and you have both physical endurance and mental strength. This inner strength may lead you to explore the other potentials for your abilities.</p><h3>Present</h3><p>Do not turn down any offers that will change your future. Have faith in your own convictions, and be strong enough to trust where you will land.</p><h3>Future</h3><p>There is a strong, energetic release in your future which will lead you into major life changes. By understanding your true value, you will make the most of a wonderful chance to improve your life.<p/><h3>Yes/No Key Interpretation</h3><p>The Strength card shows a presence of self-assurance and confidently facing problems in your life. It suggests a person who enjoys power but has the capacity to exercise great self-control in all matters. Patience and strength may be required in your pursuits, and the answer you seek is most likely yes.</p>"
  },
  {
    cardName: "The Hermit",
    fileName: "09_hermit",
    meaning:
      "<h1>The Hermit</h1><h4>Detachment · Guidance · Solitude · Soul-searching and introspection · Thinking and reflection</h4><p>There are times in every life, when one must step back and make a careful examination of their situations and decisions. Finding the Hermit in your spread suggests this is just such a time for you. You are in need of a period of inner reflection, away from the current demands of your position. This retreat can be physical, or a search within. Only a deep and honest introspection will lead to a solution, however.</p><h3>Past</h3><p>The pace of your past has slowed, and it is time to accept this. Continue looking for your finals goals and consider the insight you have recently gained.</p><h3>Present</h3><p>There is someone who can help you through all your problems, and their insight may surprise you. This person is yourself. By understanding yourself, you can better understand others.</p><h3>Future</h3><p>When you become aware of your true road, there will be nothing to stand in your way. Life has challenged you, but you are prepared to make the best of the future.<p/><h3>Yes/No Key Interpretation</h3><p>The Hermit is a card symbolic of seeking some sort of spiritual enlightenment. Solitary introspection and contemplation are also associated with the Hermit. Perhaps some soul-searching and reflection are required on your part. The answer to your question, therefore, is maybe.</p>"
  },
  {
    cardName: "The Wheel of Fortune",
    fileName: "10_wheelfortune",
    meaning:
      "<h1>The Wheel of Fortune</h1><h4>Change · Destiny · Good luck · Life cycles · New directio</h4><h1>The Wheel of Fortune</h1><p>Symbolic of life's cycles, the Wheel of Fortune speaks to good beginnings. Most likely, you will find the events foretold to be positive, but, being aspects of luck, they may also be beyond your control and influence. Tend those things you can control with care, and learn not to agonize over the ones you cannot.</p><h3>Past</h3><p>The actions of your past are the seeds of your future success. To make progress, you must accept the changes coming.</p><h3>Present</h3><p>There is a beneficial change approaching, but keep in mind that luck is out of your control.</p><h3>Future</h3><p>The future will yield an opportunity to change paths towards personal growth and happiness. You must be ready to change your ways of thinking, because whether or not your actions bring success, they represent beneficial change.<p/><h3>Yes/No Key Interpretation</h3><p>The Wheel of Fortune stands for luck, changes, and a new direction in your life. While it also shows ups and downs, the overall feel of the card is a positive one indicating changes for the better and good fortune. The answer you are looking for is yes.</p>"
  },
  {
    cardName: "Justice",
    fileName: "11_justice",
    meaning:
      "<h1>Justice</h1><h4>Balance · Equality · Fairness · Justice · Law and legal matters</h4><p>Justice is a very good card to find in your spread if you have acted with kindness and fairness towards other and, especially, if you have been a victim. It is a significant indicator of a positive resolution, although how and what sort will depend on your own experiences. If you have been unfair, abusive, or otherwise shady and immoral in your dealings, though, pay heed. For the unjust, this card is, at best, a dire warning to change your ways before retribution falls upon you, and, at worst, a simple statement that it is already too late. In neutral cases, it may simply be telling you to seek out balance in your life.</p><h3>Past</h3><p>Balancing your emotions will pay off and bring you harmony in relationships. The confusion of your life can be overcome if you find inner balance.</p><h3>Present</h3><p>You wil receive some gift of advice or have a debt repaid to you.</p><h3>Future</h3><p>When all is said and done, you will receive the outcome that you truly deserve. Your moral character will be justified, so maintain integrety and strive to balance yourself.<p/><h3>Yes/No Key Interpretation</h3><p>The Justice card is all about karma, fairness, and balance in different affairs in your life. It does not suggest an outcome that is either for or against you, but accountability, dignity, and integrity are all liked to its presence. There is no clear cut answer to your question.</p>"
  },
  {
    cardName: "The Hanged Man",
    fileName: "12_hangedman",
    meaning:
      "<h1>The Hanged Man</h1><h4>A period of transition · Gaining for a sacrifice · Suspending · Restricting · Discontinued</h4><p>The Hanged Man can be interpreted in two very different ways. All change is a small kind of death, as the old must die to create the new, and it may simply indicate upheaval or change in your future, perhaps beyond your control, but more likely a decision that, for good or ill, you will not be able to turn back from. The other interpretation is one of sacrifice, although whether this sacrifice is small or great may not be easily interpreted. Both interpretations imply permanence, and that you should give very careful thought to the decisions in your life.</p><h3>Past</h3><p>Letting go of some things from your past has brought new value to your spiritual life. That which you sacrificed must be seen in a new way.</p><h3>Present</h3><p>If there is something being rushed, this may suggest that it is going to pause. Keep in mind that the act of giving help is not more important than the person being helped.</p><h3>Future</h3><p>Many things are unknown to you now, so you must make new goals and plan carefully. Acting at the right moment will get you ahead.<p/><h3>Yes/No Key Interpretation</h3><p>The Hanged Man suggests some sort of metamorphosis through breaking patterns, letting go, or going through a period of transition. Although it could indicate having to give something up in order to gain a fresh perspective, it has neither positive or negative connotations. Maybe is the answer.</p>"
  },
  {
    cardName: "Death",
    fileName: "13_death",
    meaning:
      "<h1>Death</h1><h4>End · New beginning · Loss · Dramatic change · Destruction</h4><p>Death is indicative of change in your future. This change can be in almost any aspect of your life, but it will almost certainly be permanent, significant, and absolute. Death suggests a complete severance between the past and the future, and it will likely be painful. Despite the sense of loss that may accompany it, Death fills an important and natural role in life, and leads eventually to acceptance. It is a necessary part of moving forward, and you will find the changes easiest if you embrace them, rather than fight them. Expect the end of a close friendship, a job, a marriage, or even a life, but do not focus too greatly on the negative.</p><h3>Past</h3><p>You have moved into a new phase of life. All things change with time, and your path through this world is no different.</p><h3>Present</h3><p>A major event is approaching and will arrive suddenly. You will lose something valuable.</p><h3>Future</h3><p>To move forward, develop a new perspective on the world. The past is behind you and the rest of your life is still ahead of you, so continue the journey with all your heart.<p/><h3>Yes/No Key Interpretation</h3>The Death card shows some sort of dramatic change in order to have a new beginning. It is often associated with some sort of loss, failure, or destruction. The overall tone of this card is dark and not good. Thus, your answer is no.</p>"
  },
  {
    cardName: "Temperance",
    fileName: "14_temperance",
    meaning:
      "<h1>Temperance</h1><h4>Capable · Control · Harmony and balance · Moderation (drugs / alcohol) · Self-confidence</h4><p>An optimistic card, Temperance encourages you to find balance in your life and approach problems with a calm demeanour. It recognizes that opposing forces need not be at war within you. Tread carefully in any major decisions you make, with confidence that good decisions will lead to a good resolution for you.</p><h3>Past</h3><p>The experiences you've had learning to work in harmony with others will be an ongoing trend. Balancing the material and psychic elements in your life has deeply influenced you.</p><h3>Present</h3><p>Something you have long desired will come to fruition. Expect a wealthy partnership or marriage to develop in your immediate social circle.</p><h3>Future</h3><p>Take control of your life and practice moderation. By staying in balance, you will resolve any current conflicts and begin a new chapter in your life.<p/><h3>Yes/No Key Interpretation</h3>The Temperance card suggests divine intervention, balance, and harmony. The positive overall presence of this card in your spread reveals high levels of self-confidence and control in your endeavors. The answer provided by this card is most likely yes.</p>"
  },
  {
    cardName: "The Devil",
    fileName: "15_devil",
    meaning:
      "<h1>The Devil</h1><h4>Anger · Jealousy and resentment · Self-delusion · Selfishness · Violence</h4><p>The Devil is in the business of entrapment. It signifies a situation from which there is no escape, or a road leading to one. Forewarning may let you avoid the trap, or it may not. What sort of trap, and how you might avoid it, depends on where the Devil appears in your spread, and what other cards surround it. This card does not foretell doom, only the need for prudence.</p><h3>Past</h3><p>One of the choices you've made was wrong for you. Negative forces are slowing your development.</p><h3>Present</h3><p>There is an event beyond your influence that will change your life. It is uncertain whether it is good or bad, but avoid extravagant behavior and be true to yourself.</p><h3>Future</h3><p>The time is coming that you will have to find beauty within yourself and stop the projections you are casting on the world. Find the courage to change your life. The course of your life is beyond your knowing, but this awareness will defeat your self-delusions.<p/><h3>Yes/No Key Interpretation</h3>The Devil is about all things negative. Anger, violence, temptation, fear, and doubt are just some of the terrors associated with this card. It suggests feeling trapped perhaps in an unhealthy relationship, an addiction, or a lie. Without a doubt, this card is telling you no.</p>"
  },
  {
    cardName: "The Tower",
    fileName: "16_tower",
    meaning:
      "<h1>The Tower</h1><h4>Destruction · Dramatic change · Loss and ruin · New start · Unexpected events</h4><p>Dark and foreboding, the Tower is the embodiment of disruption and conflict. Not just change, but the abrupt and jarring movement caused by the unforeseen and traumatic events which are part of life. The Tower in your spread is always a threat, but life inevitably involves tragedy, and you must decide whether you will face it with grace.</p><h3>Past</h3><p>To make room for the new, the old must be destroyed. The ambitions that you have been following are built on weak foundations and offer false rewards.</p><h3>Present</h3><p>A conflict is coming to a head in your life. Relationships will need to be reevaluated and restructured in order to maintain.</p><h3>Future</h3><p>By withstanding the coming challenges, your future will be bright. Seein things as you want them to be in order to make them become that way. Knowing the worst is behind you can give strength.<p/><h3>Yes/No Key Interpretation</h3>The Tower is all about unexpected events and changes coming up in your life. However, the changes are along the lines of something catastrophic, disasterous, and overall negative. It could be related to some sort of accident, disaster, or damage to another area of your life. The answer provided by this card is no.</p>"
  },
  {
    cardName: "The Star",
    fileName: "17_star",
    meaning:
      "<h1>The Star</h1><h4>Calm and serenity · Destiny · Hope · Opportunity · Renewal</h4><p>The Star's presence signifies a period of respite and renewal for you. This renewal may be spiritual, physical, or both. It is a particularly positive sign if you or someone close is recovering from illness or injury. It is a light in the darkness, illuminating your future and your past.</p><h3>Past</h3><p>Move on from the hardships of the past and begin your renewal. At the end of all struggles will be peace; rely on your inner strength and external support systems.</p><h3>Present</h3><p>Consider balance and restraint when finding solutions to your current problems. The right amount of help and encouragement will bring harmony and happiness to your circles.</p><h3>Future</h3><p>The time of your renewal is approaching. You have chosen the right path to restore your mental and physical health. By being brave enough to choose the riskier roads, you will inspire those around you.<p/><h3>Yes/No Key Interpretation</h3>The Star is symbolic of hope, renewal, and beauty. It suggests a period of spiritual tranquility, happiness, and positive opportunities. The overall feeling of this card is optimistic and serene. The answer suggested by its presence is yes.</p>"
  },
  {
    cardName: "The Moon",
    fileName: "18_moon",
    meaning:
      "<h1>The Moon</h1><h4>Be careful · Caution · Confusion · Delusion · Risk</h4><p>Something in your life is not what it seems. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself. It may also indicate something important being kept from you by another. This may be a source of worry or depression in your life, and the Moon is a strong indicator that you must rely on your intuition to see through the subterfuge.</p><h3>Past</h3><p>Your understanding of a past event may be distorted by your current perceptions. Reflect on your history and make sure the pieces fit together. By eliminating uncertainty, you will find more peace.</p><h3>Present</h3><p>There is a challenge approaching, taking the form of either a new creative project or a conflict in a relationship. Your history will reveal the best course of action.</p><h3>Future</h3><p>Your imagination will bring you success if your thoughts are coupled with practical action. The struggle to reach your potential may bring about many conflicts in your life, but the results will be beautiful.<p/><h3>Yes/No Key Interpretation</h3>The Moon is an illusive and confusing card. It suggests the presence of risks, secrets, and some level of mental confusion. It would warn you to take caution and be careful in whatever endeavor you are pursuing in your life. The answer you are seeking is no.</p>"
  },
  {
    cardName: "The Sun",
    fileName: "19_sun",
    meaning:
      "<h1>The Sun</h1><h4>Abundance · Achievement · Joy · Productivity · Success</h4><p>As an inherently good influence, finding the Sun is a positive development. It is suggestive of personal gain, and that personal goals and joy are within reach, if you are willing to invest the effort to actualize them. If you are embarking on a new personal venture, such as marriage or beginning a family, the Sun is of particular influence.</p><h3>Past</h3><p>The successes you have achieved in the past will set the stage for future joys. Continue developing your line of work or field of study and the rewards will come.</p><h3>Present</h3><p>There is an opportunity for new friendship or a relationship that will lead to happiness and contentment. Do not give up and you will be led to success.</p><h3>Future</h3><p>You are approaching a moment that has the potential to change your life. Take full advantage of this time and you will achieve a future of endless possibility.<p/><h3>Yes/No Key Interpretation</h3>The Sun, being the opposition to the Moon, is a card full of life, joy, and energy. It reveals positive achievements, successful endeavors, and an overall manifestations of good fortune in your life. Thus, the answer it provides for your question is yes.</p>"
  },
  {
    cardName: "Judgment",
    fileName: "20_judgement",
    meaning:
      "<h1>Judgment</h1><h4>Change · Decisions · Success · Transformation · Upheaval</h4><p>Judgment tells a story of transition, but unlike Death or the Tower, it is not sudden change, or born of luck or intuition, but change that springs from reason. It signifies plans, often long in the making, coming to fruition. If it points towards the future, it may also speak towards the nature of the change; if there is a choice that needs to be made, ruminate and let your mind guide the decision. Logic, in this case, is a better guide than intuition. Be prepared to make a major decision in your life, likely one that will shape the next chapter of your life.</p><h3>Past</h3><p>Your past is full of good work, but the process of your liberation from those experiences is ongoing. You are beginning a new chapter in your life.</p><h3>Present</h3><p>The present has arrived and the past is relinquishing its hold on your fate. This is the best time to change an element of your lifestyle.</p><h3>Future</h3><p>The fruits of your decisions are coming and you will receive that which you deserve. The path at your feet and the direction it is leading you are clear. You will see your ultimate desire through to the end.<p/><h3>Yes/No Key Interpretation</h3>The Judgement card is representative of some sort of change or transformation, likely one that has already occurred. It could mean the presence of a spiritual or professional calling and making decisions that will lead to your success. The answer to your question is yes.</p>"
  },
  {
    cardName: "The World",
    fileName: "21_world",
    meaning:
      "<h1>The World</h1><h4>Certainty · Completion · Positive · Reward · Satisfaction</h4><p>The World is an indicator of a major and inexorable change, of tectonic breadth. This change represents a chance for you to bring about a desirable end to the Old and a good beginning to the New. It is indicative of growing maturity, a sense of inner balance and deeper understanding. It suggests that you may be approaching a more final sense of identity, and the security in the self that comes with age. It also represents the falling away of boundaries, sometimes in the effusive sense of the spiritual, but sometimes in a purely physical sense, indicating travels or journeys in the future.</p><h3>Past</h3><p>The path you are on will eventually bring you full circle. It may take a while to realize this, but the journey will allow you to accept new responsibilities and points of view.</p><h3>Present</h3><p>The present moment will bring you the fulfillment of a wish or a long desired change in scenery. To find satisfaction, you must accept the ideas of others to be equally valid as your own.</p><h3>Future</h3><p>You must find your purpose to accomplish it. The same with dreams; you must first be aware of it to make it exist. There is no guarantee for success but the experience you gain will have the potential to fulfill your desires.<p/><h3>Yes/No Key Interpretation</h3>The World card means satisfaction and success at a journey's end. Fulfillment, rewards, certainty, and positive outcomes are all things directly associated with the presence of this card. The answer more than likely is yes.</p>"
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
        "You scored " + tarotQuiz.quiz.score + " out of " + 10 + "." + " Not to be confused with an actual fool, this result simply implies you're at the beginning stages of your journey. There is lots more to learn and explore and if you're serious about growing your tarot knowledge, it will take both dedication and fool-like enthusiasm. Are you up for the challenge?");
    } else if (tarotQuiz.quiz.score >= 5 && tarotQuiz.quiz.score < 8) {
      $(".score-display").text(
        "You scored " + tarotQuiz.quiz.score + " out of " + 10 + "." + " You've upped your game and you're starting to really understand what tarot is and what it means to you. It's clear you've spent some dedicated time studying the complexity of this tool. Continue your time in reflection, consulting your own inner compass as well as tried and true texts. You'll be a star in no time!");
    } else if (tarotQuiz.quiz.score >= 8) {
      $(".score-display").text(
        "You scored " + tarotQuiz.quiz.score + " out of " + 10 + "." + " You've aced this quiz and proven you're a true star! Congratulations on the dedication and practice you've applied - it's paid off! Remember, there are always lots more ways to learn and grow. You've come a long way and it's up to you now how far you'll take it!");
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
