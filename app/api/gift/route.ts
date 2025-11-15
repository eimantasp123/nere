import { transporter } from "../_utils/transporter";

export async function POST(req: Request) {
  const { token, ...data } = await req.json();

  // Validate
  if (!data || !token) {
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
      replyTo: data.email,
      subject: `Dovanų kupono užklausa`,
      text: data.message,
      html: `<p><strong>Žinutė nuo:</strong> ${data.fullName}<br/>
            <strong>Telefono numeris:</strong> ${data.phoneNumber}<br/>
            <strong>El. Paštas:</strong> ${data.email}<br/>
            <strong>Kupono gavėjo vardas:</strong> ${data.recipient}<br/>
            <strong>Ritualas:</strong> ${data.ritual}<br/>
            ${data.voucherAmount ? `<strong>Kupono suma:</strong> ${data.voucherAmount}<br/>` : ""}
            <strong>Kupono tipas:</strong> ${data.voucherType}<br/>
            ${data.message ? `<strong>Žinutė:</strong> ${data.message}</p>` : ""}`,
    });

    return new Response("El. laiškas išssiųstas sėkmingai.", { status: 200 });
  } catch {
    return new Response("Įvyko klaida siunčiant žinutę. Bandykite dar kartą.", {
      status: 500,
    });
  }
}
