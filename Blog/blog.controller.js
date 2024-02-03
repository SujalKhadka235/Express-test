const BlogModel = require("./blog.model");
const create = (payload) => {
  return BlogModel.create(payload);
};

const get = () => {
  return BlogModel.find();
};
const getbyId = (id) => {
  return BlogModel.findOne(id);
};
const updatebyId = (id) => {
  return BlogModel.updateOne({ id }, payload);
};
const deletebyId = (id) => {
  return BlogModel.deleteOne({ id });
};
module.exports = { create, get, getbyId, deletebyId, updatebyId };
