const app = require("./app.js");
require("dotenv").config();
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`@@@%%%% We are live on this Port ${PORT}!&&&&%%%%$$$###`)
});


