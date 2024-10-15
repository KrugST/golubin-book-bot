
interface inlineChapterButtons {
    text: string;
    callback_data: string;
}

// Old version, keybord with buttons
const generateChapterNames = (numberOfChapters: number) => {
    const chapterNames: string[] = [];
    for (let i = 1; i <= numberOfChapters; i++) {
        chapterNames.push(`Глава ${i}`);
    }
    return chapterNames;
}

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

export { generateChapterNames, generateChapterNamesInline }
