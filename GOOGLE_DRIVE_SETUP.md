# Google Drive Setup Guide

## Overview
This project uses Google Drive to host images and videos, reducing the repository size significantly.

## How to Get File IDs from Google Drive

### Method 1: Manual Extraction (Recommended)

1. Open the Google Drive folder: https://drive.google.com/drive/folders/1hN_kGIOfflaecQBpVnjANbBslmTlrGJf
2. Navigate to each project folder (Boys Bedroom, Girls Bedroom, etc.)
3. For each file (image or video):
   - Right-click on the file
   - Click "Get link" or "Share"
   - Copy the sharing link
   - Extract the File ID from the URL

#### Example:
If the sharing link is:
```
https://drive.google.com/file/d/1ABC123xyz456DEF789/view?usp=sharing
```

The File ID is: `1ABC123xyz456DEF789` (the long string between `/d/` and `/view`)

### Method 2: Using Google Drive API (Advanced)

1. Enable Google Drive API in Google Cloud Console
2. Create OAuth 2.0 credentials
3. Use the API to list files in the folder

API Endpoint:
```
GET https://www.googleapis.com/drive/v3/files?q='FOLDER_ID' in parents
```

## How to Add File IDs

1. Open `lib/googleDrive.ts`
2. Find the file path in `FILE_ID_MAP`
3. Replace the empty string `''` with the File ID

Example:
```typescript
'/images/projects/Boys Bedroom/BBR-01.jpg': '1ABC123xyz456DEF789',
```

## File Structure in Google Drive

The folder structure should match:
```
ED Projects/
├── Boys Bedroom/
│   ├── BBR-01.jpg
│   ├── BBR-02.jpg
│   ├── ...
│   └── BoysBedroom Video.mp4
├── Girls Bedroom/
│   ├── Girls Bedroom-01.jpg
│   ├── ...
│   └── GBR.mp4
├── Jewelry Store/
├── LANO Cafe/
├── Master Bedroom/
├── Offices/
└── Studio/
```

## Notes

- If a File ID is not provided, the system will fallback to local files
- Make sure all files in Google Drive are set to "Anyone with the link can view"
- Image URLs use: `https://drive.google.com/uc?export=view&id=FILE_ID`
- Video URLs use: `https://drive.google.com/uc?export=download&id=FILE_ID`

## Quick Script to Extract File IDs

You can use the helper script:
```bash
node scripts/getDriveFileIds.js
```

Or manually extract using regex:
- Pattern: `[\/=]([a-zA-Z0-9_-]{25,})`
- The File ID is usually 25+ characters long
