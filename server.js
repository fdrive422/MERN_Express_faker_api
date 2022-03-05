const express = require("express");
const faker = require("faker");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const createUser = () => {
    const newUser = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.get("/api/user/new", (req, res) => {
    console.log("This is the new User API route");
    res.json(createUser());
});

app.get("/api/company/new", (req, res) => {
    console.log("This is the new Company API route");
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    const result = {
        user: createUser(),
        company: createCompany()
    }
    console.log("This is the new User & Company API route");
    res.json(result);
});


app.listen(8000, () => console.log("You have successfully connected to port 8000"));
