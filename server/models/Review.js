const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    userName:{
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reviewSchema;
