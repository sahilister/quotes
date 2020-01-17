const quoteData = [
    {
        id: 0,
        quote: "You only lose what you cling to",
        author: "Buddha Siddhartha Guatama Shakyamuni "
    },
    {
        id: 1,
        quote: "Friends are the family you choose",
        author: "Jess C Scott, The Other Side of Life "
    },
    {
        id: 2,
        quote: "I was a victim of a series of accidents, as are we all.",
        author: "Kurt Vonnegut, The Sirens of Titan "
    },
    {
        id: 3,
        quote: "Women should be respected as well! Generally speaking, men are held in great esteem in all parts of the world, so why shouldn't women have their share? Soldiers and war heroes are honored and commemorated, explorers are granted immortal fame, martyrs are revered, but how many people look upon women too as soldiers?...Women, who struggle and suffer pain to ensure the continuation of the human race, make much tougher and more courageous soldiers than all those big-mouthed freedom-fighting heroes put together! ",
        author: "Anne Frank, The Diary of a Young Girl "
    },
    {
        id: 4,
        quote: "I was, but then I realized that I was holding on to something that didn't exist anymore. That the person I missed didn't exist anymore. People change. The things we like and dislike change. And we can wish they couldn't all day long but that never works.",
        author: "Sarah Ockler, Fixing Delilah"
    },
    {
        id: 5,
        quote: "Genuine love is rarely an emotional space where needs are instantly gratified. To know love we have to invest time and commitment...dreaming that love will save us, solve all our problems or provide a steady state of bliss or security only keeps us stuck in wishful fantasy, undermining the real power of the love -- which is to transform us.' Many people want love to function like a drug, giving them an immediate and sustained high. They want to do nothing, just passively receive the good feeling.",
        author: "Bell Hooks"
    },
    {
        id: 6,
        quote: "Love is the will to extend one's self for the purpose of nurturing one's own or another's spiritual growth... Love is as love does. Love is an act of will -- namely, both an intention and an action. Will also implies choice. We do not have to love. We choose to love.",
        author: "M. Scott Peck"
    },
    {
        id: 7,
        quote: "I used to think the world was broken down by tribes,' I said. 'By Black and White. By Indian and White. But I know this isn't true. The world is only broken into two tribes: the people who are assholes and the people who are not.",
        author: "Sherman Alexie, The Absolutely True Diary of a Part-Time Indian "
    },
    {
        id: 8,
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "Bill Keane"
    },
    {
        id: 9,
        quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein"
    },
    {
        id: 10,
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
        author: "Dr. Seuss, Oh, the Places You'll Go!"
    },
    {
        id: 11,
        quote: "You've gotta dance like there's nobody watching , Love like you'll never be hurt , Sing like there's nobody listening, And live like it's heaven on earth.",
        author: " William W. Purkey"
    },
    {
        id: 12,
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        id: 13,
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Rober Frost"
    },
    {
        id: 14,
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        id: 15,
        quote: "It is better to be hated for what you are than to be loved for what you are not. only lose what you cling to",
        author: "Andre Gide, Autumn Leaves"
    },
    {
        id: 16,
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone "
    },
    {
        id: 17,
        quote: "Life is what happens to us while we are making other plans.",
        author: " Allen Saunders"
    },
    {
        id: 18,
        quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        author: "Douglas Adams, The Long Dark Tea-Time of the Soul "
    },
    {
        id: 19,
        quote: "Sometimes the questions are complicated and the answers are simple.",
        author: "Dr. Seuss "
    },
    {
        id: 20,
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        id: 21,
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    }, 
    {
        id: 22,
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        id: 23,
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        id: 24,
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt, This is My Story "
    },
    {
        id: 25,
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: " Mahatma Gandhi"
    },
    {
        id: 26,
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches "
    },
    {
        id: 27,
        quote: "We accept the love we think we deserve.",
        author: " Stephen Chbosky, The Perks of Being a Wallflower "
    },
    {
        id: 28,
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe"
    },
    {
        id: 29,
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        id: 30,
        quote: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Oscar Wilde, Lady Windermere's Fan "
    },
    {
        id: 31,
        quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        author: " Neil Gaiman, Coraline "
    },
    {
        id: 32,
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. ",
        author: "Bill Keane "
    },
    {
        id: 33,
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison "
    },
    {
        id: 34,
        quote: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
        author: "Elie Wiesel "
    },
    {
        id: 35,
        quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein "
    },
    {
        id: 36,
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
        author: "Dr. Seuss, Oh, the Places You'll Go! "
    },
    {
        id: 37,
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot "
    },
    {
        id: 38,
        quote: "There is no greater agony than bearing an untold story inside you.",
        author: "Maya Angelou, I Know Why the Caged Bird Sings "
    },
    {
        id: 39,
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso "
    },
    {
        id: 40,
        quote: "You can never get a cup of tea large enough or a book long enough to suit me.",
        author: "C.S. Lewis "
    },
    {
        id: 41,
        quote: "To the well-organized mind, death is but the next great adventure.",
        author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone "
    },
    {
        id: 42,
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw "
    },
    {
        id: 43,
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt "
    },
    {
        id: 44,
        quote: "Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.",
        author: "Shel Silverstein "
    },
    {
        id: 45,
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Helen Keller"
    },
    {
        id: 46,
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        id: 47,
        quote: "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower "
    },
    {
        id: 48,
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author: " John Lennon "
    }
]

export default quoteData

// Template object
// {
//     id: ,
//     quote: " ",
//     author: " "
// },