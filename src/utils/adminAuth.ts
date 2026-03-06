const ADMIN_SESSION_KEY = 'b2bg_admin_session_v1';

const ADMIN_EMAIL = 'admin@b2bg.ng';
const ADMIN_PASSWORD = 'B2BlessedGlobal2026##';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
}

export function loginAdmin(email: string, password: string) {
  const isValid =
    email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD;

  if (!isValid || !canUseStorage()) {
    return false;
  }

  window.sessionStorage.setItem(
    ADMIN_SESSION_KEY,
    JSON.stringify({
      email: ADMIN_EMAIL,
      signedInAt: new Date().toISOString(),
    }),
  );

  return true;
}

export function isAdminAuthenticated() {
  if (!canUseStorage()) {
    return false;
  }

  return Boolean(window.sessionStorage.getItem(ADMIN_SESSION_KEY));
}

export function logoutAdmin() {
  if (!canUseStorage()) {
    return;
  }

  window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

