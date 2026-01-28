/**
 * Helper script to get Google Drive File IDs
 * 
 * This script helps you extract File IDs from Google Drive sharing links
 * 
 * Usage:
 * 1. Open each file in Google Drive
 * 2. Right-click > Get link > Copy link
 * 3. Paste the link here and run: node scripts/getDriveFileIds.js
 * 
 * Or use Google Drive API (requires authentication):
 * https://developers.google.com/drive/api/v3/reference/files/list
 */

// Example: Extract File ID from Google Drive sharing link
function extractFileId(shareLink) {
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Or: https://drive.google.com/open?id=FILE_ID
  const match = shareLink.match(/[\/=]([a-zA-Z0-9_-]{25,})/);
  return match ? match[1] : null;
}

// Example usage
const exampleLink = 'https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing';
const fileId = extractFileId(exampleLink);
console.log('File ID:', fileId);

// To use Google Drive API, you need:
// 1. Enable Google Drive API in Google Cloud Console
// 2. Create OAuth 2.0 credentials
// 3. Use the API to list files in folder

module.exports = { extractFileId };
