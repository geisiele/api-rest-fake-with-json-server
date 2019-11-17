var faker = require('faker')

function generateComments() {
    var comments = []
    for (var id = 0; id < 50; id++) {
        comments.push({
            "postId": id,
            "id": faker.random.uuid(),
            "name": faker.hacker.phrase(),
            "email": faker.internet.email(),
            "body": faker.lorem.paragraphs(),
        })
    }
    return { "comments": comments }
}

module.exports = generateComments