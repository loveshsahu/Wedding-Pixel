const userModel = require('../models/user.js');
const commonHelper = require('../helper/db.helper.js');

const { create, deleteOne, updateOne, findOne ,find} = commonHelper;

const createOneUser = async (data) => {
  return await userModel.create({ ...data });
};

const retrieveOneUser = async (filter) => {
  return await userModel.findOne({ ...filter });
};

const deleteOneUser = async (filter,data) => {
  return await userModel.deleteOne({...data},{...filter});
};

const updateOneUser = async (filter, data) => {
  return await userModel.updateOne({ ...filter }, { ...data });
};
const retrieveManyUser = async (filter,data) => {
    return await userModel.find({ ...filter },{...data});
  };

const userService = {
  createOneUser,
  retrieveOneUser,
  deleteOneUser,
  updateOneUser,
  retrieveManyUser
};

module.exports = userService;
