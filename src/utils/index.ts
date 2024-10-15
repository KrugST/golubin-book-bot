const generateChapterNames = (numberOfChapters: number) => {
    const chapterNames: string[] = [];
    for (let i = 1; i <= numberOfChapters; i++) {
        chapterNames.push(`Глава ${i}`);
    }
    return chapterNames;
}

export { generateChapterNames }
