import { transporter } from "../_utils/transporter";

export async function POST(req: Request) {
  const { fullName, email, recipient, message, token, ritual, voucherAmount } =
    await req.json();

  // Validate
  if (!fullName || !email || !ritual || !recipient || !token) {
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
      subject: `Dovanų kupono užklausa`,
      text: message,
      html: `<p><strong>Žinutė nuo:</strong> ${fullName}<br/>
            <strong>El. Paštas:</strong> ${email}<br/>
            <strong>Kupono gavėjo vardas:</strong> ${recipient}<br/>
            <strong>Ritualas:</strong> ${ritual}<br/>
            ${voucherAmount ? `<strong>Kupono suma:</strong> ${voucherAmount}<br/>` : ""}
            ${message ? `<strong>Žinutė:</strong> ${message}</p>` : ""}`,
    });

    return new Response("El. laiškas išssiųstas sėkmingai.", { status: 200 });
  } catch {
    return new Response("Įvyko klaida siunčiant žinutę. Bandykite dar kartą.", {
      status: 500,
    });
  }
}
