import sampleData from '../books/sample.json';

interface inlineChapterButtons {
    text: string;
    callback_data: string;
}

interface Chapter {
    content: string;
    order: number;
}

interface Book {
    [key: string]: Chapter;
}

const book: Book = sampleData;

const findChapterById = (chapterId: string): Chapter => {
    return book[chapterId];
};

const generateChapterNamesInline = (numberOfChapters: number, buttonsPerRow: number) => {
    const chapterNames: inlineChapterButtons[] = [];
    for (let i = 1; i <= numberOfChapters; i++) {
        chapterNames.push({ text: `Глава ${i}`, callback_data: `chapter-${i}` });
    }

    const buttonRows: inlineChapterButtons[][] = [];
    for (let i = 0; i < chapterNames.length; i += buttonsPerRow) {
        buttonRows.push(chapterNames.slice(i, i + buttonsPerRow));
    }

    return buttonRows;
}

const getChapterContent = (chapterId: string) => {
    const chapter: Chapter = findChapterById(chapterId);
    return chapter?.content;
};

export { generateChapterNamesInline, getChapterContent }
