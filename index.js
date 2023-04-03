// const splitTxt = require('/home/maroon4/Documents/20digits/text.txt')

const splitTxt = `As the old saying goes, "divide and conquer." But what happens when the thing that's being divided is not an enemy to be defeated, but something that's already whole? This is the question at the heart of the concept of "splitting."

In psychology, splitting refers to the tendency to see things in black-and-white terms, without any shades of gray. This can happen in relationships, where one person may be idealized as perfect while the other is demonized as completely flawed. It can also happen within ourselves, where we may split off parts of our personality that we don't want to acknowledge or accept.

But splitting isn't always a negative thing. In biology, for example, cells split to form new organisms. And in linguistics, words can be split into their component parts to reveal their meaning.

So whether it's a psychological defense mechanism or a biological process, splitting is a concept that has many applications in different fields. The key is to understand when it's helpful and when it's not, and to use it wisely.`

// const text = Array.from(splitTxt)

const splitIndex = splitTxt.indexOf('split')

console.info(splitIndex)

if (splitIndex !== -1) {
    const end = splitIndex + 20;

    const lastRes = splitTxt.slice(splitIndex + 5, end + 5)

    return console.info(lastRes.split(''))
} else {
    console.info("Opps, there is no word split")
}