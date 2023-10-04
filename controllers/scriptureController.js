import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require('../data/BookOfMormon.json');

const bom = data.BookOfMormon;
const books = [];
for (let i in bom) {
    books.push(bom[i].book);
}
const bookLength = books.length;

export const generateReference = () => {

    const getBookIndex = Math.floor(Math.random() * (bookLength + 1));

    const bookLocation = bom[getBookIndex].chapters;
    let chapterCount = 0;
    for (let item in bookLocation) {
        chapterCount += 1;
    }

    const getChapterIndex = Math.floor(Math.random() * (chapterCount - 1))

    const verseLocation = bookLocation[getChapterIndex].verses;
    let verseCount = 0;
    for (let v in verseLocation) {
        verseCount += 1;
    }

    const getVerseIndex = Math.floor(Math.random() * (verseCount -1))
    const verseReference = verseLocation[getVerseIndex].reference
    const verseText = verseLocation[getVerseIndex].text

    return {verseReference, verseText};
}

export const retrieveReferenceData = ( bookReq ) => {
    let foundObject = null;
    for (const obj of bom) {
      if (obj.book === bookReq) {
        foundObject = obj;
        break;
      }
    }

    const chapterObject = foundObject.chapters;
    let chapterCount = 0;
    for (let item in chapterObject) {
        chapterCount += 1;
    }

    const getChapterIndex = Math.floor(Math.random() * (chapterCount - 1))

    const verseLocation = chapterObject[getChapterIndex].verses;
    let verseCount = 0;
    for (let v in verseLocation) {
        verseCount += 1;
    }

    const getVerseIndex = Math.floor(Math.random() * (verseCount -1))
    const verseReference = verseLocation[getVerseIndex].reference
    const verseText = verseLocation[getVerseIndex].text

    return {verseReference, verseText};
}


export const bookOfMormonRandom = (req, res) => {
    try  {
        let randomRef = generateReference();
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(randomRef);
    }
    catch {
        res.status(404).json("Some error occur")
    }
}

export const bookOfMormonBookFilter = (req, res ) => {
    let bookReq = req.query.book;
    let filteredRef = retrieveReferenceData( bookReq );
    res.status(200).json(filteredRef)
}