import("./t3.mjs")
  .then(() => console.log("done3"))
  .catch((err) => console.log("not found"));
import("./t2.mjs").then(() => console.log("done2")).catch();
