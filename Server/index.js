const express = require("express");
var cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());




app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "testing.." });

});


