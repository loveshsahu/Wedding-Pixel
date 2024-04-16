const adminModel = require('../models/admin.js');
const commonHelper = require('../helper/db.helper.js');

const { create, deleteOne, updateOne, findOne ,find} = commonHelper;

const createOneAdmin = async (data) => {
  return await adminModel.create({ ...data });
};

const retrieveOneAdmin = async (filter) => {
  return await adminModel.findOne({ ...filter });
};

const deleteOneAdmin = async (filter,data) => {
  return await adminModel.deleteOne({...data},{...filter});
};

const updateOneAdmin = async (filter, data) => {
  return await adminModel.updateOne({ ...filter }, { ...data });
};
const retrieveManyAdmin = async (filter,data) => {
    return await adminModel.find({ ...filter },{...data});
  };

const userService = {
    createOneAdmin,
    retrieveOneAdmin,
    deleteOneAdmin,
    updateOneAdmin,
    retrieveManyAdmin
};

module.exports = userService;
