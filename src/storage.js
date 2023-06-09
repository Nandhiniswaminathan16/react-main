const INITIAL_MOVIES = [
  {
    id:1,
    name: "Asuran",
    trailer: "https://www.youtube.com/embed/vOCM9wztBYQ",
    story: "The story revolves around Sivasaamy and his family where his younger son kills a Vadakkooran, a local big shot to avenge his brother's death for a land dispute. To protect his son, Sivasaamy takes him inside forest to hide and escape from the guys of Vadakkooran. Everyone in the family thinks Sivasaamy is a submissive father for his family, fears and submits himself to protect them. But there is something more that Sivasaamy has beneath. Whether Sivasaamy saves his son from Vadakkooran and his people forms the rest of the story.",
    genere: ["Action", "Drama"],
    director: "Vetri Maaran",
    year: "2019",
    cast: "Dhanush , Manju Warrier , Prakash Raj , Ken Karunas , Pasupathy",
    image: "https://i.pinimg.com/originals/e3/c5/c2/e3c5c2085c381ebe0aad132b853db9bf.png",
    description: "The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. Will the farmer, a loving father and a pacifist by heart, be able to save his hot-blooded son is the rest of the story",
  },

  {
    id:2,
    name: "Baahubali:The Begining",
    trailer: "https://www.youtube.com/embed/CYcKs5fknb8",
    story: "It's a tale of two cousins in the Kingdom of Mahishmati, India. Balla fights his way with cousin Baahubali for the throne. Young Shivudu grows in the tribes and travels to the distant lands above the waterfalls to fall in love with the beautiful Tamanna, the tribal warrior and helps in her quest to rescue Devasena a prisoner from the claws of King Balla. In this quest he finds out that the legendary King Baahubali is his father and Devasena the prisoner is his mother from the slave commander in chief Katappa of King Balla. Katappa narrates to Shivudu about the legends of his father Baahubali and the epic battle by the brothers Balla and Baahubali against the cruel king who attacks the Mahishmati Kingdom, in this battle Baahubali is crowned as the king by Sivagami as she thinks he is more worthier to the throne. This strengthen Balla's hatred towards his brother king Baahubali.",
    genere: ["Action", "War"],
    director: "S.S.Rajamouli",
    year: "2015",
    cast: "Prabhas , Rana Daggubati , Ramya Krishnan , Sathyaraj , Anushka Shetty , Nassar",
    image: "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg",
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
  },

  {
    id:3,
    name: "Master",
    trailer: "https://www.youtube.com/embed/1_iUFT3nWHk",
    story: "The plot revolves around Bhavani, a dreadful gangster making a juvenile correction facility his centre for all illegal activities. His own rough childhood makes him a sadistic criminal who uses the young boys at the juvenile facility to achieve his misdeeds. However, Master enters the scene to foil his plans. A free-spirited but carefree schoolteacher, Master gears up to lock horns with Bhavani after a tragic incident. What follows is a pumped up showdown between the two.",
    genere: ["Action", "Thriller"],
    director: "Lokesh Kanagaraj",
    year: "2021",
    cast: "Joseph Vijay , Vijay Sethupathi , Malavika Mohan , Arjun Das , Poovaiyar , Shanthnu Bhagyaraj",
    image: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Thalapathy-Vijay-s-Master-movie-second-Look-Poster-.jpg?quality=90&zoom=1&ssl=1",
    description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
  },
  {
    id:4,
    name: "Vikram Vedha",
    trailer: "https://www.youtube.com/embed/1sVr-uWZPjE",
    story: "A badass cop Vikram leads a special task force formed to eliminate a kickass Vedha's gang running amok on the streets of Chennai, making a mockery of Law and Order. An encounter planned by a Vikram's friend Simon, kills Vedha's trusted aides and brings him out of hiding. Vedha lays his clutch on Vikram and engages in a disturbing mind game of sorts which results in a quest to reveal the truth behind that fateful encounter..",
    genere: ["Action", "Crime"],
    director: "Gayatri , Pushkar",
    year: "2017",
    cast: "Madhavan , Vijat Sethupathi , Shraddha Srinath , Kathir , Varalakshmi Sarathkumar",
    image: "https://m.media-amazon.com/images/M/MV5BMTc0MTNjN2EtMDFjNS00NWUwLWFhMzctMDg3ZTlmZTk1ZjZmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
    description: "Vikram, a no-nonsense police officer, accompanied by Simon, his partner, is on the hunt to capture Vedha, a smuggler and a murderer. Vedha tries to change Vikram's life, which leads to a conflict.",
  },

  {
    id:5,
    name: "Baahubali:The Conclusion",
    trailer: "https://www.youtube.com/embed/94BzBOpv42g",
    story: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.Kattappa narrates the story of Amarendra Baahubali to Shivudu, who learns his lineage as the prince of Mahishmati and the son of Amarendra Baahubali. Shivudu, now Mahendra Baahubali, decides to dethrone and punish Bhallaladeva for all wrongdoings of his past with the help of Kattappa.Upon listening to a narrative of his parents' love story and the treachery that led to his father's death, Shiva, the son of Bahubali, must claim his place as the rightful heir to the throne of the Mahishmati Kingdom, but first, he must avenge the injustice committed against his parents and people.",
    genere: ["Action", "War"],
    director: "S.S.Rajamouli",
    year: "2017",
    cast: "Prabhas , Rana Daggubati , Ramya Krishnan , Sathyaraj , Anushka Shetty , Nassar , Tamannaah Bhatia",
    image: "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
    description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
  },
  {
    id:6,
    name: "Petta",
    trailer: "https://www.youtube.com/embed/FCB0ZfQ9Rzs",
    story: "The story of Petta revolves around a person named Kaali, who is working as a college warden. He earns the love of the college students by helping them out in many ways. At the same time, Kaali has a past which no one knows and he has to take one someone really big.",
    genere: ["Action", "Drama"],
    director: "Karthik Subburaj",
    year: "2019",
    cast: "Rajinikanth , Vijay Sethupathi , Nawazuddin Siddiqui , Sasikumar , Simran , Bobby Simha",
    image: "https://m.media-amazon.com/images/M/MV5BN2MwZWQxY2UtNTFjNy00YWNjLWFmZDgtYjA0YzI3OTdhNTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    description: "A hostel warden becomes the target of a dreaded politician and his gangster son, but little do they realize that it is they who should fear him.",
  },
];
export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));
localStorage.setItem("movies", JSON.stringify(INITIAL_MOVIES));
export const updateStoredMovies = updateMovies => localStorage.setItem("movies", JSON.stringify(updateMovies));
updateStoredMovies(INITIAL_MOVIES);
