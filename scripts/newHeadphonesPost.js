#! /usr/bin/env node

const fs = require('fs');
const slugify = require('slug');
const dateFns = require('date-fns');
const title = process.argv[2];

if (!title) {
  throw 'a title is required!';
}
const slug = slugify(title.toLowerCase());
const dir = `./_headphones/${slug}`;
const date = dateFns.format(new Date(), 'YYYY-MM-DD');

if (!dir) {
  throw 'this directory does not exist!';
}

fs.writeFileSync(
  `${dir}.md`,
  `---
title: "${title}"
date: "${date}"
image:
  path:
  thumbnail:
---`,
  function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${title} was created!`);
  }
);
