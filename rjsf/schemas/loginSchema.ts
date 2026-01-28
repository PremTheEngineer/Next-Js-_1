import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const LoginSchema: RJSFSchema = {
  type: "object",

  properties: {
    newUserCheck: {
      type: "boolean",
      title: "New user?",
      default: false,
    },
  },

  required: ["newUserCheck"],

  dependencies: {
    newUserCheck: {
      oneOf: [
        {
          title: "Login",
          properties: {
            newUserCheck: {
              const: false,
            },
            username: {
              type: "string",
              title: "Username",
            },
            password: {
              type: "string",
              title: "Password",
            },
          },
          required: ["username", "password"],
        },
        {
          title: "Sign up",
          properties: {
            newUserCheck: {
              const: true,
            },
            username: {
              type: "string",
              title: "Username",
            },
            email: {
                type: "string",
                format: "email",
                title: "Email",
            },
            age: {
                type: "integer",
                title: "Age",
            },
            gender: {
                type: "string",
                enum: ["Male", "Female", "Other"],
                title: "Gender",
            },
            password: {
              type: "string",
              title: "Password",
            },
          },
          required: ["username", "password", "email", "age", "gender"],
        },
      ],
    },
  },
};

// export const LoginUiSchema: UiSchema = {
//   newUserCheck: {
//     "ui:title": "New user?",
//     "ui:widget": "checkbox",
//   },
//   username: {
//     "ui:widget": "text",
//     'ui:title': "**Username**",
//     "ui:autocomplete": "on",
//     "ui:autofocus": true,
//     "ui:help":
//       "Enter your username, this will be your unique identity in our platform",
//   },
//   password: {
//     "ui:widget": "password",
//     "ui:autocomplete": "on",
//     "ui:help": "Please enter your password",
//   },
//   gender: {
//     "ui:widget": "radio",
//     default: "male",
//   },
//   age: {
//     "ui:widget": "UpDownWidget",
//   },
//   email: {
//     "ui:widget": "EmailWidget",
//   },
// };

export const LoginUiSchema: UiSchema = {
  "ui:options": {
    classNames: "space-y-6 block",
  },

  newUserCheck: {
    "ui:title": "New user?",
    "ui:widget": "checkbox",
    "ui:options": {
      classNames: "flex items-center gap-2 text-sm font-medium",
    },
  },

  username: {
    "ui:widget": "text",
    "ui:title": "Username",
    "ui:autocomplete": "on",
    "ui:autofocus": true,
    "ui:help":
      "Enter your username, this will be your unique identity on our platform",
    "ui:options": {
      classNames: "space-y-1",
    },
  },

  password: {
    "ui:widget": "password",
    "ui:title": "Password",
    "ui:autocomplete": "on",
    "ui:help": "Please enter your password",
    "ui:options": {
      classNames: "space-y-1",
    },
  },

  email: {
    "ui:widget": "EmailWidget",
    "ui:title": "Email address",
    "ui:options": {
      classNames: "space-y-1",
    },
  },

  age: {
    "ui:widget": "UpDownWidget",
    "ui:title": "Age",
  },

  gender: {
    "ui:title": "Gender",
    "ui:widget": "radio",
    "ui:options": {
      inline: true,
      classNames: "flex gap-4",
    },
  },

  "ui:submitButtonOptions": {
    submitText: "Continue",
    props: {
      className:
        "mt-6 w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-neutral-800 transition",
    },
  },
};
