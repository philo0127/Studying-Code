const quotes = [
    {
        quote: "Wisdom is a protection just as money is a protection, but the advantage of knowledge is this: Wisdom preserves the life of its owner.",
        verse: "Eccl. 7:12."
    },
    {
        quote: "What will happen to the one who falls with no one to help him up?",
        verse: "Eccl. 4:10."
    },
    {  
        quote: "I urge Euodia and I urge Syntyche to be of the same mind in the Lord.",
        verse: "Phil. 4:2."
    },   
    {  
        quote: "Jehovah . . . takes note of the humble.",
        verse: "Ps. 138:6."
    },   
    {  
        quote: "He brings vengeance on those . . . who do not obey the good news about our Lord Jesus.",
        verse: "2 Thess. 1:8."
    },   
    {
        quote: "You will find refreshment.",
        verse: "Matt. 11:29."
    },   
    {  
        quote: "You are not in darkness, so that the day should overtake you as it would thieves.",
        verse: "1 Thess. 5:4."
    },   
    {  
        quote: "Take a scroll and write in it all the words that I have spoken to you against Israel and Judah.",
        verse: "Jer. 36:2."
    },   
    {  
        quote: "God . . . energizes you, giving you both the desire and the power to act.",
        verse: "Phil. 2:13."
    },   
    {  
        quote: "The love of money is a root of all sorts of injurious things.",
        verse: "1 Tim. 6:10."
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysText = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysText.quote;
author.innerText = todaysText.verse;