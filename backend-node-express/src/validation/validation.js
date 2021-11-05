import { body } from "express-validator";

export const validateListing = () => {
  return [
    body("title")
      .isString()
      .isLength({ min: 5, max: 50 })
      .withMessage("Title must be between 5 and 50 characters"),
    body("description")
      .isString()
      .isLength({ min: 5, max: 500 })
      .withMessage("Description must be between 5 and 500 characters"),
  ];
};
