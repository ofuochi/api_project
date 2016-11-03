var app = require("express")();


app.get('/:arg1', (req, res) => {
   var input = req.params.arg1;
   var date, unix;
   if (/^\d+$/.test(input)) date = new Date(1000 * input);
   else date = new Date(input);

   unix = date.getTime();
   date = date.toDateString();
   date = date == "Invalid Date" ? null : date;
   res.send({
      unix: unix / 1000,
      natural: date
   });
});
app.listen(8080, () => {
   console.log("Listening on port 8080");
});