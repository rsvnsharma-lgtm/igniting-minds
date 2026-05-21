// ─────────────────────────────────────────────────────────────────────────────
// Igniting Minds — Secure API Proxy
// Vercel Serverless Function: /api/chat
//
// The Anthropic API key lives ONLY in Vercel Environment Variables.
// It is never sent to the browser. The frontend calls /api/chat instead.
// ─────────────────────────────────────────────────────────────────────────────

export default async function handler(req, res) {

  // ── CORS — only allow your own Vercel domain ──────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ── Read API key from environment (never from client) ─────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'API key not configured on server' });
  }

  try {
    const body = req.body;

    // ── Basic request validation ───────────────────────────────────────────
    if (!body || !body.messages) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    // ── Forward to Anthropic ───────────────────────────────────────────────
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: body.model || 'claude-sonnet-4-20250514',
        max_tokens: body.max_tokens || 1000,
        system: body.system || undefined,
        messages: body.messages
      })
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      console.error('Anthropic API error:', data);
      return res.status(anthropicRes.status).json({ error: data.error?.message || 'Anthropic API error' });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
