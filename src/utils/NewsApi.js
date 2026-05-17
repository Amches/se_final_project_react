import { API_KEY } from "./constants";

// Set the base URL depending on the environment
// Prefer an explicit Vite env var, otherwise use PROD flag to choose URL
export const newsApiBaseUrl =
  import.meta.env.VITE_NEWS_API_BASE ||
  (import.meta.env.PROD
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything");

/**
 * Get the date string in YYYY-MM-DD format.
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

/**
 * Get the date 7 days before today.
 * @returns {string}
 */
function getFromDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return formatDate(date);
}

/**
 * Get today's date in YYYY-MM-DD format.
 * @returns {string}
 */
function getToDate() {
  return formatDate(new Date());
}

/**
 * Fetch news articles from the API based on a keyword.
 * @param {string} keyword
 * @returns {Promise<Object>} JSON response from the API
 */
export async function getNewsArticles(keyword) {
  if (!keyword || keyword.trim() === "") {
    throw new Error("Please enter a keyword");
  }

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    keyword,
  )}&from=${getFromDate()}&to=${getToDate()}&pageSize=100&apiKey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
