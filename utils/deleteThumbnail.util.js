/* external import */
const fs = require("fs");

// internal import
const Service = require("../schemas/service.schema");

async function deleteAvatar(id) {
  const serviceThumbnail = await Service.findById(id);
  fs.unlinkSync(`${__dirname}/../public/thumbnails/${serviceThumbnail.avatar}`);
}

module.exports = deleteAvatar;
