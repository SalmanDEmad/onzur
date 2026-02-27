"use server";

export async function submitContactForm(formData) {
  // Simulate form submission
  const name = formData.get("name");
  const company = formData.get("company");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  console.log("Server Action: Contact Form Submitted");
  console.log({ name, company, email, phone, message });

  // Here you would typically:
  // 1. Validate the data
  // 2. Send an email / save to database / call an API
  // 3. Return a success/error message or revalidate/redirect

  // For now, just returning a simple success message
  return { success: true, message: "Form submitted successfully!" };
}

export async function submitNewsletter(prevState, formData) {
  const email = formData.get("email");
  console.log("Server Action: Newsletter Signup");
  console.log({ email });

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Simulate newsletter subscription
  // await subscribeUserToNewsletter(email);

  return { success: true, message: "Thank you for subscribing!" };
}

export async function submitDownloadForm(prevState, formData) {
  const email = formData.get("email");
  console.log("Server Action: Download Form Submitted");
  console.log({ email });

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email to download.",
    };
  }

  // Simulate initiating a download or sending a link
  // For example, you might generate a temporary link or email the whitepaper

  return {
    success: true,
    message: "Your download should start shortly! Check your email.",
  };
}

// Add other server actions here as needed
// export async function submitNewsletter(formData) { ... }
// export async function submitDownloadForm(formData) { ... }
