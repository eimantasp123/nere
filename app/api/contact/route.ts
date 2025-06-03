import { transporter } from "../_utils/transporter";

export async function POST(req: Request) {
  const { name, email, phone, message, token } = await req.json();

  // Validate
  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }
  try {
    // Validate reCAPTCHA (v3)
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    );

    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error("reCAPTCHA validation failed", recaptchaData);
      return new Response("reCAPTCHA failed", { status: 400 });
    }

    await transporter.sendMail({
      from: `"Nere.lt" <${process.env.EMAIL_USER}>`,
      to: "labas@nere.lt",
      replyTo: email,
      subject: `Kontaktų formą | Žinutė nuo: ${name}`,
      text: message,
      html: `<p><strong>Vardas:</strong> ${name}<br/>
            <strong>El. Paštas:</strong> ${email}<br/>
            <strong>Telefono numeris:</strong> ${phone}<br/>
            <strong>Žinutė:</strong> ${message}</p>`,
    });

    return new Response("El. laiškas išssiųstas sėkmingai.", { status: 200 });
  } catch {
    return new Response("Įvyko klaida siunčiant žinutę. Bandykite dar kartą.", {
      status: 500,
    });
  }
}
