console.log("script working");
const slides = document.querySelector(".slides");
const sliders = [];
const slidesarray = [
  {
    id: "lastclone",
    image: "./assets/images/slide5.webp",
    title: "Luca",
    hashtags: ["Animation", "2021"],
    description:
      "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
  },
  {
    image: "./assets/images/slide1.webp",
    title: "Loki",
    hashtags: ["Marvel", "Superhero"],
    description:
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
  },
  {
    image: "./assets/images/slide2.webp",
    title: "What If...?",
    hashtags: ["Marvel", "Superhero", "English"],
    description:
      "What If…? flips the script on the MCU, reimagining famous events from the films in unexpected ways.",
  },
  {
    image: "./assets/images/slide3.webp",
    title: "Cruella",
    hashtags: ["Crime", "2021"],
    description:
      "The film is about the rebellious early days of cinema's most notorious and fashionable villains, the legendary Cruella de Vil.",
  },
  {
    image: "./assets/images/slide4.webp",
    title: "Black Widow",
    hashtags: ["Superhero", "2021"],
    description:
      "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
  },
  {
    image: "./assets/images/slide5.webp",
    title: "Luca",
    hashtags: ["Animation", "2021"],
    description:
      "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
  },
  {
    id: "firstclone",
    image: "./assets/images/slide1.webp",
    title: "Loki",
    hashtags: ["Marvel", "Superhero"],
    description:
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
  },
];
//creating slides
slidesarray.forEach((slidee) => {
  let slide = document.createElement("div");
  let imagecontent = document.createElement("div");
  let imageelement = document.createElement("img");
  let slideconent = document.createElement("div");
  let contentcontainer = document.createElement("div");
  let heading = document.createElement("h1");
  let hashtags = document.createElement("div");
  let ul = document.createElement("ul");
  let description = document.createElement("div");

  imageelement.appendChild(document.createTextNode(""));
  imageelement.src = slidee.image;
  imagecontent.appendChild(imageelement);
  //classnames
  slide.className = "slide";
  slideconent.className = "slidecontent";
  contentcontainer.className = "contentcontainer";
  heading.className = "title";
  hashtags.className = "hashtags";
  description.className = "description";
  imagecontent.className = "imagecontent";
  //appenind
  heading.appendChild(document.createTextNode(slidee.title));
  //   creating hashtags based on number
  let hashtagsarray = [];
  for (let i = 0; i < slidee.hashtags.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(slidee.hashtags[i]));
    hashtagsarray.push(li);
  }
  if (slidee.id) {
    slide.id = slidee.id;
  }
  description.appendChild(document.createTextNode(slidee.description));
  //   ul.appendChild(li);
  hashtagsarray.forEach((li) => {
    ul.appendChild(li);
  });
  hashtags.appendChild(ul);
  contentcontainer.appendChild(heading);
  contentcontainer.appendChild(hashtags);
  contentcontainer.appendChild(description);

  slideconent.appendChild(contentcontainer);
  slide.appendChild(slideconent);
  slide.appendChild(imagecontent);
  sliders.push(slide);
});
// console.log(sliders);
sliders.forEach((slide) => {
  slides.appendChild(slide);
});
//slide transition
const slidewidth = document.querySelector(".slide").clientWidth + 20;
const slidesarraycontainer = document.querySelectorAll(".slides .slide");
const slidescontainer = document.querySelector(".slides");
const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nextbtn");
let counter = 1;
slidescontainer.style.transform = "translateX(" + -slidewidth + "px)";
function nextslide() {
  if (counter >= slidesarraycontainer.length - 1) return;
  slidescontainer.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slidescontainer.style.transform =
    "translateX(" + -(slidewidth * counter) + "px)";
   setTimeout(nextslide, 5000);
}

 nextslide();
function prevslide() {
  if (counter <= 0) return;
  slidescontainer.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slidescontainer.style.transform =
    "translateX(" + -(slidewidth * counter) + "px)";
}
nextbtn.addEventListener("click", nextslide);
prevbtn.addEventListener("click", prevslide);
slidescontainer.addEventListener("transitionend", () => {
  if (slidesarraycontainer[counter].id === "lastclone") {
    slidescontainer.style.transition = "none";
    counter = slidesarraycontainer.length - 2;
    slidescontainer.style.transform =
      "translateX(" + -(slidewidth * counter) + "px)";
  }
  if (slidesarraycontainer[counter].id === "firstclone") {
    slidescontainer.style.transition = "none";
    counter = slidesarraycontainer.length - counter;
    slidescontainer.style.transform =
      "translateX(" + -(slidewidth * counter) + "px)";
  }
});
const newstuffarray = [
  {
    image: "./assets/images/new/1.jpg",
    title: "Nona",
    description:
      "7min Animation, Family, English, 2021 A grandmother's plan for a day alone is upended by an unexpected visit from her granddaughter.",
  },
  {
    image: "./assets/images/new/2.jpg",
    title: "Star Wars : Visions",
    description:
      "Action, Science Fiction, Adventure, Animation, Star Wars An animated anthology celebrating Star Wars through the lens of the world’s best anime creators.",
  },
  {
    image: "./assets/images/new/4.jpg",
    title: "A Galaxy of Sounds",
    description:
      "Musical, Family, Star Wars A Galaxy of Sounds immerses audiences in the nostalgic ambience of a galaxy far, far away.",
  },
  {
    image: "./assets/images/new/5.jpg",
    title: "LEGO Star Wars Terrifying Tales",
    description:
      "Animation, Family, Horror, English, 2021 <br> Three terrifying tales tell of artifacts and iconic villains from across all eras of Star Wars.",
  },
  {
    image: "./assets/images/new/6.jpg",
    title: "Among the Stars",
    description:
      "Documentary, Disney <br> NASA Astronaut Captain Chris Cassidy and the NASA team take on the challenges of space exploration.",
  },
  {
    image: "./assets/images/new/7.jpg",
    title: "Fauci",
    description:
      "Documentary, English, 2021 <br> Fauci examines the life of Dr. Fauci, a public servant and physician, whose career spans seven pre ...",
  },
  {
    image: "./assets/images/new/8.jpg",
    title: "Just Beyond",
    description:
      "Horror, Comedy, Disney <br> Inspired by the writings of R.L. Stine, “Just Beyond” is a supernatural anthology series.",
  },
  {
    image: "./assets/images/new/9.jpg",
    title: "Monster Croc Wrangler",
    description:
      "Animals & Nature, Nat Geo <br> In Australia's Northern Territory, Matt Wright with his mates will catch at least one saltwater croc ...",
  },
  {
    image: "./assets/images/new/10.jpg",
    title: "X-Men: Apocalypse",
    description:
      "Superhero, Action, English, 2016 <br> The X-Men stand united to face Apocalypse, the first mutant, who returns from the darkness and sees  ...",
  },
  {
    image: "./assets/images/new/11.jpg",
    title: "Raya and the Last Dragon",
    description:
      "Animation, Fantasy, Adventure, Kids, English, Hindi, Tamil, Telugu, 2021 <br> Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have ...",
  },
];
const monsters = [
  {
    image: "./assets/images/monsters/1.webp",
    title: "Monsters and Uniersity",
    description:
      "7min Animation, Family, English, 2021 Mike and Sulley, two arch-rivals, join the Monsters University to graduate as the scariest monsters  ...",
  },
  {
    image: "./assets/images/monsters/2.webp",
    title: "Beauty and the Beast",
    description:
      "2hr 20min Hindi, 2017, Belle is taken prisoner by a beast in his castle. Despite her fears, she looks beyond the Beast's hi ...",
  },
  {
    image: "./assets/images/monsters/3.webp",
    title: "Sleeping Beauty",
    description:
      "1hr 11min After being snubbed by the royal family, a malevolent fairy places a curse on a princess which only  ...",
  },
  {
    image: "./assets/images/monsters/4.webp",
    title: "Monsters Inc",
    description:
      "1hr 32min 2021 Sulley, a lovable monster, and his friend Mike try their best to help a little girl to return home a ...",
  },
  {
    image: "./assets/images/monsters/5.webp",
    title: "Toy Story",
    description:
      "Kids  2014 During a post-Christmas play date, the gang find themselves in uncharted territory when the coolest  ...",
  },
  {
    image: "./assets/images/monsters/6.webp",
    title: "Monsters at Work",
    description:
      "Tylor Tuskmon graduates top of his class from Monsters University and arrives at Monsters Incorporat ...",
  },
  {
    image: "./assets/images/monsters/7.webp",
    title: "Fantasia 2020",
    description:
      "1hr 17min Animation, Family, English, 2021 Sixty years later, a new generation of Disney animators and filmmakers offer an exciting reinterpret ...",
  },
  {
    image: "./assets/images/monsters/8.webp",
    title: "The Good Dinosor",
    description:
      "1hr 7min Animation, Fantasy, Adventure, Kids, English, Hindi, Tamil, Telugu, 2015 Arlo, an Apatosaurus makes friends with a human friend and learns how to deal with his fears and wha ...",
  },
  {
    image: "./assets/images/monsters/9.webp",
    title: "Gravity Calls",
    description:
      "Adventure, Comedy, Kids, Animation, Disney Twins Dipper and Mabel travel to the mysterious town of Gravity Falls for their summer vacations but ...",
  },
  {
    image: "./assets/images/monsters/10.webp",
    title: "Petes Dragon",
    description:
      "Adventure, Fantasy, Family, Kids, English, Hindi, Tamil, Telugu, 2016 Pete tells Grace about his friend in the forest called Elliot, a dragon. Not believing Pete, she ask ...",
  },
  {
    image: "./assets/images/monsters/11.webp",
    title: "Beauty and the Beast",
    description:
      "Belle vows to warm the cold castle by planning an elaborate Christmas celebration. Despite, the Beas ...",
  },
  {
    image: "./assets/images/monsters/12.webp",
    title: "Ice Age 3",
    description:
      "2hr 45min Animation, Family, Manny is soon to be a father and suffers from anxiety. While Scrat pursues the acorn, Sid invites tr ...",
  },
];
const classic = [
  {
    image: "./assets/images/classic/1.webp",
    title: "Mulan",
    description:
      "Action, Adventure, English, Hindi, Tamil, Telugu, 2020 Masquerading as a male soldier to protect her father and tested every step of the way, Mulan must ha ...",
  },
  {
    image: "./assets/images/classic/2.webp",
    title: "Maleficient: Mistress of Evil",
    description:
      "Adventure, Fantasy, Family, English, Hindi, 2019 Maleficent and her goddaughter Aurora begin to question their tangled ties as they are pulled in dif ...",
  },
  {
    image: "./assets/images/classic/3.webp",
    title: "Cruella",
    description:
      "Crime, Comedy, English, Hindi, Tamil, Telugu, 2021 The film is about the rebellious early days of cinema's most notorious and fashionable villains, the ...",
  },
  {
    image: "./assets/images/classic/4.webp",
    title: "Dumbo",
    description:
      "Family, Kids, English, Hindi, Tamil, Telugu, 2019 In this grand live-action adventure, Dumbo, a flying elephant, soars to new heights alongside specta ...",
  },
  {
    image: "./assets/images/classic/6.webp",
    title: "Freaky Friday",
    description:
      "Comedy, English, 2003 Friday turns freaky when mother-daughter with contrasting views and opinions find themselves inside  ...",
  },
  {
    image: "./assets/images/classic/7.webp",
    title: "Alice Through The Looking Glass",
    description:
      "Adventure, Fantasy, Family, English, 2016 Alice returns to the wonderland and discovers that her friend the Hatter is in trouble. She must tra ...",
  },
  {
    image: "./assets/images/classic/8.webp",
    title: "Petes Dragon",
    description:
      "Adventure, Fantasy, Family, Kids, English, Hindi, Tamil, Telugu, 2016 Pete tells Grace about his friend in the forest called Elliot, a dragon. Not believing Pete, she ask ...",
  },
  {
    image: "./assets/images/classic/9.webp",
    title: "Christoper Robin",
    description:
      "Adventure, Fantasy, Comedy, Kids, English, Hindi, Tamil, Telugu, 2018 A working-class family man, Christopher Robin, encounters his childhood friend Winnie-the-Pooh, who  ...",
  },
  {
    image: "./assets/images/classic/10.webp",
    title: "Ever After",
    description:
      "Romance English Danielle lives like a servant thanks to her step-mother and two step-sisters. One day, she runs into ...",
  },
  {
    image: "./assets/images/classic/11.webp",
    title: "Lady and the Tramp",
    description:
      "Romance, Adventure, English, 2019 A re-telling of the 1955 classic, Lady, a pampered Cocker Spaniel and Tramp, a lovable stray, come t ...",
  },
  {
    image: "./assets/images/classic/12.webp",
    title: "The Lion King",
    description:
      "Adventure Fantasy , In the African savanna, a young prince overcomes betrayal and tragedy to assume his rightful place o ...",
  },
];
const cardContainer = document.querySelector(".cardContainer");
const monsterscontainer = document.querySelector(".monsterscontainer");
const classiccontainer = document.querySelector(".classiccontainer");
function generateCards(array, appenditem) {
  let newcards = [];
  let newstuffarray = array;
  let cardContainer = appenditem;
  newstuffarray.forEach((carditem) => {
    let carddescription = document.createElement("div");
    let cardtitle = document.createElement("div");
    let contentcard = document.createElement("div");
    let imageelement = document.createElement("img");
    let card = document.createElement("div");
    let cardbuttons = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    carddescription.classNam = "carddescription";
    cardtitle.className = "cardtitle";
    cardbuttons.className = "cardbuttons";
    contentcard.className = "contentcard";
    card.className = "card";
    carddescription.className = "carddescription";

    let playicon = document.createElement("img");

    playicon.src = "./assets/images/play.svg";
    let watchicon = document.createElement("img");
    watchicon.src = "./assets/images/add.svg";
    button1.appendChild(playicon);
    button1.appendChild(document.createTextNode("Watch Movie"));
    button2.appendChild(watchicon);
    button2.appendChild(document.createTextNode("Add to Watchlist"));
    cardbuttons.appendChild(button2);
    cardbuttons.appendChild(button1);
    imageelement.appendChild(document.createTextNode(""));
    imageelement.src = carditem.image;
    cardtitle.appendChild(document.createTextNode(carditem.title));
    carddescription.appendChild(document.createTextNode(carditem.description));

    contentcard.appendChild(cardtitle);
    contentcard.appendChild(carddescription);
    contentcard.appendChild(cardbuttons);

    card.appendChild(imageelement);
    card.appendChild(contentcard);
    newcards.push(card);
  });
  newcards.forEach((card) => {
    cardContainer.appendChild(card);
  });
}
//new to disney plus
generateCards(newstuffarray, cardContainer);
generateCards(monsters, monsterscontainer);
generateCards(classic, classiccontainer);
//slider menu translation
const hamburger = document.querySelector(".hamburger");
const leftitem = document.querySelector(".leftitem");
const leftitemclose = document.querySelector(".leftitemclose");
hamburger.addEventListener("click", () => {
  console.log("clicked");
  leftitem.style.transform = "translateX(0%)";
});
leftitemclose.addEventListener("click", () => {
  leftitem.style.transform = "translateX(-100%)";
});
window.onresize = function () {
  location.reload();
};
