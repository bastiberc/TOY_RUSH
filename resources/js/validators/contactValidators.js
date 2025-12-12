const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const nameRegex = /^[a-zA-Z\s]+$/;

export const validateName = (name) => {
  if (!name) {
    return "Name is required.";
  }
  if (name.length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (!nameRegex.test(name)) {
    return "Name can only contain letters and spaces.";
  }
  return null;
};

export const validateEmail = (email) => {
  if (!email) {
    return "Email is required.";
  }
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  return null;
};

export const validateMessage = (message) => {
  if (!message) {
    return "Message is required.";
  }
  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
};

export const validateContact = (form) => {
  const errors = {};

  const nameError = validateName(form.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(form.email);
  if (emailError) errors.email = emailError;

  const messageError = validateMessage(form.message);
  if (messageError) errors.message = messageError;

  return errors;
};
