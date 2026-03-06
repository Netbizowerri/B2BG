export type ManagedFormType = 'contact' | 'donation' | 'volunteer';
export type ManagedSubmissionStatus = 'new' | 'resolved';

export interface FormSubmission {
  id: string;
  formType: ManagedFormType;
  status: ManagedSubmissionStatus;
  submittedAt: string;
  data: Record<string, string | number>;
}

const FORM_STORE_KEY = 'b2bg_form_submissions_v1';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readStore(): FormSubmission[] {
  if (!canUseStorage()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(FORM_STORE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStore(records: FormSubmission[]) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(FORM_STORE_KEY, JSON.stringify(records));
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getAllFormSubmissions() {
  return readStore().sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export function saveFormSubmission(formType: ManagedFormType, data: Record<string, string | number>) {
  const records = readStore();
  const nextRecord: FormSubmission = {
    id: createId(),
    formType,
    status: 'new',
    submittedAt: new Date().toISOString(),
    data,
  };

  records.unshift(nextRecord);
  writeStore(records);
  return nextRecord;
}

export function setFormSubmissionStatus(id: string, status: ManagedSubmissionStatus) {
  const records = readStore();
  const next = records.map((record) => (record.id === id ? { ...record, status } : record));
  writeStore(next);
}

export function deleteFormSubmission(id: string) {
  const records = readStore();
  writeStore(records.filter((record) => record.id !== id));
}
