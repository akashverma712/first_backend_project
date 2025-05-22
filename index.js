const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});
fs.unlink("./files/ai.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
fs.unlink("./files/abcd.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
fs.unlink("./files/rakesh.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
fs.unlink("./files/Akash.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
fs.unlink("./files/Aman.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
fs.unlink("./files/Eren.txt.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
fs.unlink("./files.hello.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});

app.get("/file/:filename", function (req, res) {
  fs.readFile(
    `/files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      res.render("show", { filename: req.params.filename, filedata: filedata });
    }
  );
});

app.get("/edit/:filename", function (req, res) {
  res.render("edit", { filename: req.params.filename });
});
fs.unlink("./files/Abhas.txt", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});
app.post("/edit", function (req, res) {
  // console.log(req.body);
  fs.rename(
    `./files/${req.body.previous}`,
    `.files/${req.body.new}`,
    function (err) {
      res.redirect("/");
    }
  );
});

app.post("/create", function (req, res) {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    }
  );
});

app.listen(3000, function () {
  console.log("script working successfully");
});

// netstat -ano | findstr :3000
// taskkill /PID 12345 /F
