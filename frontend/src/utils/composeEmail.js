export function buildGmailUrl({ to, subject = '', body = '' }) {
  const toEnc = encodeURIComponent(to || '');
  const subjectEnc = encodeURIComponent(subject || '');
  // Normalize body newlines to CRLF
  const normalizedBody = (body || '').replace(/\r?\n/g, '\r\n');
  const bodyEnc = encodeURIComponent(normalizedBody).replace(/%0A/g, '%0D%0A');
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${toEnc}&su=${subjectEnc}&body=${bodyEnc}&tf=1`;
}

export function buildMailto({ to, subject = '', body = '' }) {
  const subjectEnc = encodeURIComponent(subject || '');
  const normalizedBody = (body || '').replace(/\r?\n/g, '\r\n');
  const bodyEnc = encodeURIComponent(normalizedBody).replace(/%0A/g, '%0D%0A');
  return `mailto:${to}?subject=${subjectEnc}&body=${bodyEnc}`;
}

export function openCompose({ to, subject = '', body = '' }) {
  // Prefer Gmail web compose
  const gmail = buildGmailUrl({ to, subject, body });
  try {
    const w = window.open(gmail, '_blank');
    if (!w) {
      // popup blocked: fall back to mailto in current window
      const mailto = buildMailto({ to, subject, body });
      window.location.href = mailto;
    }
  } catch (err) {
    const mailto = buildMailto({ to, subject, body });
    try {
      const w2 = window.open(mailto, '_blank');
      if (!w2) window.location.href = mailto;
    } catch (err2) {
      window.location.href = mailto;
    }
  }
}

// Helper that attempts to read a contact form from the current page (by name attributes)
export function readFormFromDOM() {
  const nameEl = document.querySelector('input[name="name"]');
  const emailEl = document.querySelector('input[name="email"]');
  const subjectEl = document.querySelector('input[name="subject"]');
  const messageEl = document.querySelector('textarea[name="message"]');

  if (!nameEl && !emailEl && !subjectEl && !messageEl) return null;

  return {
    name: nameEl ? nameEl.value : '',
    email: emailEl ? emailEl.value : '',
    subject: subjectEl ? subjectEl.value : '',
    message: messageEl ? messageEl.value : '',
  };
}
