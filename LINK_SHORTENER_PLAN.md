# Link Shortener — Build Plan

> Side project for Dimitris + Stelios. Custom URL shortener with password
> protection and email-on-click notifications. Deferred — this file is the
> spec for when we pick it up.

---

## Goal

A small private tool we can use to:
1. Paste a long URL → get back a short one
2. Optionally protect the short URL with a password
3. Log every click (timestamp, IP, country, user-agent)
4. Email both of us when someone opens a link

Use cases: client outreach, sending campaign links, sharing private previews.

---

## Stack

- **Cloudflare Workers** — hosts the redirect + admin pages (free tier covers
  100,000 requests/day)
- **Cloudflare KV** — stores links + click history (free tier covers our scale)
- **Resend** — sends the click-notification emails (free tier 3,000/month)

**Total cost: $0/month** within free tiers.

---

## Routes

| Route | Method | What it does |
|---|---|---|
| `/` | GET | Admin page (Basic Auth) — form to create new short links |
| `/api/create` | POST | Creates a short link in KV, returns the slug |
| `/x/:slug` | GET | Looks up the URL. If password-protected, shows password form. Else logs click + fires email + 302-redirects. |
| `/x/:slug/unlock` | POST | Validates password, then logs click + fires email + redirects |
| `/stats/:slug` | GET | Admin-only — paginated click history per link |

---

## Data model (KV)

```
key: link:{slug}
val: {
    url: "https://...",
    passwordHash: null | "sha256:salt:...",
    note: "client outreach — ABC corp",
    createdAt: 1715000000,
    createdBy: "dimitris"
}

key: click:{slug}:{timestamp-reversed}
val: {
    ts: 1715000000,
    ip: "1.2.3.4",
    country: "GR",
    ua: "Mozilla/5.0 ...",
    referer: "..."
}
```

Reverse-timestamp keys so KV `list({ prefix: "click:abc:" })` returns most-recent first.

---

## Admin auth

Single shared password (Basic Auth). Stored as Worker env secret (`ADMIN_PASS`).
Two of us share it; rotate via Cloudflare dashboard if needed. Both `dimitris`
and `stelios` can log in (username dropdown picks who created the link, just
for logging — password is the same).

---

## Email content (per click)

Subject: `[short.mg] click on "/{slug}" → {destination short}`

Body:
```
Someone just opened a link you shared.

Slug:        /x/abc123
Note:        client outreach — ABC corp
Created by:  Stelios
Destination: https://daththeanalyst.github.io/mega-gym-website/

When:        2026-04-30 14:32 UTC
From:        1.2.3.4 (Greece)
Browser:     Chrome 132 on macOS
Referrer:    (direct)

→ See full click history: https://short.mg/stats/abc123
```

Sent to both Dimitris + Stelios. Recipient list in env var.

---

## Build estimate

Single `worker.js` file, ~200 lines including embedded HTML for the admin
page. ~2-3 hours including Cloudflare setup.

---

## Prerequisites to answer before building

- [ ] **Cloudflare account** — do we have one already? (Free signup at cloudflare.com)
- [ ] **Resend account** — sign up at resend.com, verify a sending domain
      (or use their sandbox while testing), get API key
- [ ] **Code location** — separate repo, or a `link-shortener/` subfolder
      in this megagym repo?
- [ ] **Domain** — start on the free `*.workers.dev` subdomain, or wire up
      a custom short domain (e.g. `mg.gr/x/...`)? Custom needs a domain we
      already own pointed at Cloudflare.
- [ ] **Email recipients** — confirm both addresses (Dimitris, Stelios)
- [ ] **Initial admin password** — pick one and store it in Cloudflare
      secrets, never in code

---

## Deployment notes (when we build)

```bash
# One-time setup
npm install -g wrangler
wrangler login

# Create KV namespace
wrangler kv namespace create LINKS
# (paste the returned id into wrangler.toml)

# Set secrets
wrangler secret put ADMIN_PASS
wrangler secret put RESEND_API_KEY
wrangler secret put NOTIFY_EMAILS  # comma-separated list

# Deploy
wrangler deploy
```

---

## Future enhancements (after MVP works)

- [ ] Per-user admin (separate dimitris vs stelios passwords + audit log)
- [ ] QR code generation for printed materials
- [ ] Click-rate threshold alerts (e.g. notify only first click + every Nth)
- [ ] Geographic dashboard (top countries / cities)
- [ ] Auto-expiry: links die after N days or N clicks
- [ ] Bulk import via CSV

---

*Written 2026-04-30 — deferred while we finish the megagym site.*
