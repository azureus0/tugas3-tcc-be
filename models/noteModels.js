const Note = require("../schema/Note");

const findAll = async () => {
  return await Note.findAll({
    attributes: ["id", "title", "content", "tanggalDibuat"],
    order: [["tanggalDibuat", "DESC"]],
  });
};

const create = async (noteData) => {
  return await Note.create(noteData);
};

const findById = async (id) => {
  return await Note.findByPk(id, {
    attributes: ["id", "title", "content", "tanggalDibuat"],
  });
};

const updateById = async (id, noteData) => {
  await Note.update(noteData, {
    where: {
      id: id,
    },
  });

  return findById(id);
};

const deleteById = async (id) => {
  return await Note.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
};
