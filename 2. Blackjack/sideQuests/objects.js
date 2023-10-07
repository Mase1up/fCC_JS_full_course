// Objects - store data in-depth - composite / complex data types
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using dot notation

let listing = {
    type: "Castle",
    title: "Live like a King in my Castle",
    details: {
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: "Private half-bath"
    },
    rating: [4.95, "1268 reviews"],
    superhost: true,
    price: 190
}

console.log(listing.details.baths);
console.log(listing.rating[1]);

