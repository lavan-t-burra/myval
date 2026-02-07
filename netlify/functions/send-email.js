const DEFAULT_TO_EMAIL = "burralavanteja@gmail.com";

const buildEmailText = (selections = []) =>
  selections
    .map(({ label, value }) => `${label}: ${value || "No selection yet"}`)
    .join("\n");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.SENDGRID_TO_EMAIL || DEFAULT_TO_EMAIL;

  if (!apiKey || !fromEmail) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Email service is not configured on the server.",
      }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON payload." }),
    };
  }

  const selections = Array.isArray(payload.selections)
    ? payload.selections
    : [];
  const emailBody = buildEmailText(selections);
  const emailSubject = payload.subject || "Date plan selections";

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: toEmail }],
          subject: emailSubject,
        },
      ],
      from: { email: fromEmail },
      content: [
        {
          type: "text/plain",
          value: emailBody,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: errorText || "Failed to send email." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "sent" }),
  };
};
