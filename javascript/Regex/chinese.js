function containsChineseCharactersAndPunctuation(text) {
    const pattern = /[\u4E00-\u9FFF]/

    //[\u3000-\u303F\uFF00-\uFFEF]*[\u4E00-\u9FFF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\u2CEB0-\u2EBEF\uF900-\uFAFF\u2F800-\u2FA1F]+
    return pattern.test(text)
}

const testStrings = [
    'Hello, world!',
    '你好，世界！',
    'こんにちは、世界！',
    'This is a test 123',
    '测试123',
    'テスト123',
    '中文符号，。！',
    '测试中文符号，。！',
    '，。！', // 仅符号
    '测试',
]

testStrings.forEach((string) => {
    console.log(
        `'${string}' contains Chinese characters with optional punctuation: ${containsChineseCharactersAndPunctuation(
            string
        )}`
    )
})
