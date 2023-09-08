export function validateCustomer(customer) {
	const errors = {};
	if (!customer.name) {
		errors.name = "Name is required";
	}
	if (!customer.email) {
		errors.email = "Email is required";
	}
	if (!customer.location) {
		errors.location = "Location is required";
	}
	if (!customer.subscription) {
		errors.subscription = "Subscription is required";
	}
	if (!customer.orders) {
		errors.orders = "Orders is required";
	}
	if (errors === {}) {
		return false;
	} else {
		window.alert(errors);
		return errors;
	}
}

export function validatePayment(payment) {
	const errors = {};
	if (!payment.order) {
		errors.order = "Order is required";
	}
	if (!payment.date) {
		errors.date = "Date is required";
	}
	if (!payment.name) {
		errors.name = "Name is required";
	}
	if (!payment.amount) {
		errors.amount = "Amount is required";
	}
	if (!payment.status) {
		errors.status = "Status is required";
	}
	if (!payment.location) {
		errors.location = "Location is required";
	}
	if (!payment.items) {
		errors.items = "Items is required";
	}
	if (!payment.type) {
		errors.type = "Type is required";
	}
	if (!payment.customerID) {
		errors.customerID = "Customer ID is required";
	}
	return errors;
}
