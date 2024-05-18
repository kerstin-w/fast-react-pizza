/**
 * The `formatCurrency` function formats a numerical value as a currency in Euros using the
 * Intl.NumberFormat object in JavaScript.
 * @param value - The `value` parameter in the `formatCurrency` function represents the numerical value
 * that you want to format as a currency. This value will be formatted as Euro currency (EUR) using the
 * `Intl.NumberFormat` constructor with the specified options for style and currency.
 * @returns The `formatCurrency` function is returning a formatted currency value in Euros (EUR) based
 * on the input `value`.
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

/**
 * The `formatDate` function formats a given date string into a specific format including day, month,
 * hour, and minute.
 * @param dateStr - The `dateStr` parameter in the `formatDate` function is a string representing a
 * date and time. This string should be in a format that can be parsed by the `Date` constructor in
 * JavaScript, such as "YYYY-MM-DDTHH:mm:ss" or any other valid date format.
 * @returns The `formatDate` function is returning a formatted date string based on the input
 * `dateStr`. The format includes the day in numeric format, the month in short format, the hour in
 * 2-digit format, and the minute in 2-digit format.
 */
export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

/**
 * This JavaScript function calculates the number of minutes left between the current date and a given
 * date string.
 * @param dateStr - The `calcMinutesLeft` function calculates the number of minutes left between the
 * current date and the date specified in the `dateStr` parameter. The `dateStr` parameter should be a
 * string representing a valid date that can be parsed by the `Date` constructor.
 * @returns The function `calcMinutesLeft` calculates the number of minutes left between the current
 * date and the date specified in the `dateStr` parameter. It returns the rounded number of minutes as
 * an integer.
 */
export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
