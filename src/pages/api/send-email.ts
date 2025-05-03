// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { nom, email, sujet, message } = req.body;

  // Validation améliorée
  if (!nom?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.BREVO_TO_EMAIL;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME;

  if (!apiKey || !toEmail || !fromEmail || !fromName) {
    console.error('Clé API Brevo ou informations d\'expédition manquantes dans .env.local');
    return res.status(500).json({ error: 'Erreur de configuration du serveur email.' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: fromName,
          email: fromEmail,
        },
        to: [
          {
            email: toEmail,
            name: 'Destinataire', // Vous pouvez personnaliser le nom ici
          },
        ],
        replyTo: {
          email: email,
          name: nom,
        },
        subject: `Nouveau message: ${sujet || 'Sans sujet'}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif;">
            <h3>Nouveau message de contact</h3>
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${sujet ? `<p><strong>Sujet:</strong> ${sujet}</p>` : ''}
            <hr>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Message envoyé avec succès', brevoInfo: data });
    } else {
      console.error('Erreur lors de l\'envoi via Brevo:', data);
      return res.status(response.status).json({
        error: 'Erreur lors de l\'envoi du message',
        brevoError: data,
      });
    }
  } catch (error) {
    console.error('Erreur lors de la requête vers l\'API Brevo:', error);
    return res.status(500).json({
      error: 'Erreur lors de la communication avec le service d\'envoi d\'e-mails.',
      details: process.env.NODE_ENV === 'development' ?
        (error instanceof Error ? error.message : JSON.stringify(error)) :
        undefined
    });
  }
}