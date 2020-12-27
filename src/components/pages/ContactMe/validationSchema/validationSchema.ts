import * as yup from "yup";

const isFullName = /^[a-zA-z]{2,34}(\s|-)[a-zA-z]{2,34}$/;
const isEmail = /(?:[a-z0-9!#$%&`*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&`*+/=?^_`{|}~-]+)*|`(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*`)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;

const validationSchema = yup.object().shape({
	fullName: yup
		.string()
		.required(`Full Name is a required field.`)
		.matches(isFullName, `Full Name must be a valid full name.`)
		.max(70, `Full Name must include 70 or under characters.`),
	email: yup
		.string()
		.required(`Email is a required field.`)
		.matches(isEmail, `Email must be a valid email.`)
		.max(125, `Email must include 125 or under characters.`),
	message: yup
		.string()
		.required(`Message is a required field.`)
		.max(640, `Message must include 640 or under characters.`),
});

export default validationSchema;
