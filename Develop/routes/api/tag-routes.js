const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({ include: [Product] })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => console.log(err));
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  Tag.findOne({ where: { id: req.params.id } }).then((tagData) => {
    res.json(tagData.catch((err) => console.log(err)));
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  Tag.create(req.bod).then((tagData) => {
    res.json(tagData);
  });
  // create a new tag
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
    });
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => res.json(err));
  // delete on tag by its `id` value
});

module.exports = router;
