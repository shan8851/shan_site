const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

type IsoDateParts = {
  year: number;
  month: number;
  day: number;
};

const parseIsoDateParts = (value: string): IsoDateParts | null => {
  const normalizedValue = value.trim();
  const match = normalizedValue.match(ISO_DATE_PATTERN);

  if (match === null) {
    return null;
  }

  const [, yearString, monthString, dayString] = match;
  const year = Number(yearString);
  const month = Number(monthString);
  const day = Number(dayString);

  const timestamp = Date.UTC(year, month - 1, day);
  const candidateDate = new Date(timestamp);

  const isValidDate =
    candidateDate.getUTCFullYear() === year &&
    candidateDate.getUTCMonth() === month - 1 &&
    candidateDate.getUTCDate() === day;

  if (!isValidDate) {
    return null;
  }

  return { year, month, day };
};

export const isIsoDateString = (value: string): boolean =>
  parseIsoDateParts(value) !== null;

export const formatIsoDateForDisplay = (
  value: string,
  locale: string = 'en-GB'
): string => {
  const parts = parseIsoDateParts(value);

  if (parts === null) {
    return value;
  }

  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).toLocaleDateString(
    locale,
    {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      timeZone: 'UTC',
    }
  );
};

export const getIsoDateSortValue = (value: string): number => {
  const parts = parseIsoDateParts(value);

  if (parts === null) {
    return Number.NEGATIVE_INFINITY;
  }

  return Date.UTC(parts.year, parts.month - 1, parts.day);
};
