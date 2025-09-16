import Joi from "joi";

export const leadSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(20)
    .required()
    .pattern(/^[a-zA-Z'-]+$/)
    .messages({
      "string.empty": "First name is required",
      "string.min": "First name should be at least 2 characters",
      "string.max": "First name should not exceed 20 characters",
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .max(254)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
});
