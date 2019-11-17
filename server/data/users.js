var faker = require('faker')

function generateUsers() {
    var users = []
    for (var id = 0; id < 50; id++) {
        users.push({
            "id": id,
            "first_name": faker.name.firstName(),
            "last_name": faker.name.lastName(),
            "email": faker.internet.email(),
            "address": {
                "street": faker.address.streetAddress(),
                "city": faker.address.city(),
                "zipcode": faker.address.zipCode(),
            }
        })
    }
    return { "users": users }
}

module.exports = generateUsers