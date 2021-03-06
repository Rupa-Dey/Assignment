const express = require("express");
const app = express();
const Port = process.env.PORT || 3100;

const dishesRouter = require("./routes/dishes");
const promotionsRouter = require("./routes/promotions");
const leadersRouter = require("./routes/leaders");

app.get("/", (req, res) => {
  res.send("Welcome to My Restora ");
});
app.use("/dishes", dishesRouter);
app.use("/promotions", promotionsRouter);
app.use("/leaders", leadersRouter);

app.listen(Port, () => {
  console.log(`Server is running at Port ${Port}`);
});