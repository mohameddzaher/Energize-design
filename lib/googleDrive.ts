/**
 * Google Drive File ID Mapping
 * 
 * To get File IDs from Google Drive:
 * 1. Open the file in Google Drive
 * 2. Right-click > Get link > Copy link
 * 3. Extract the File ID from the URL (the long string between /d/ and /view)
 * 
 * Example: https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
 * 
 * Or use Google Drive API to list files in folder:
 * https://developers.google.com/drive/api/v3/reference/files/list
 */

// Google Drive Folder ID
export const GOOGLE_DRIVE_FOLDER_ID = '1hN_kGIOfflaecQBpVnjANbBslmTlrGJf';

// Base URLs for Google Drive
export const GOOGLE_DRIVE_IMAGE_URL = (fileId: string) => 
  `https://drive.google.com/uc?export=view&id=${fileId}`;

export const GOOGLE_DRIVE_VIDEO_URL = (fileId: string) => 
  `https://drive.google.com/uc?export=download&id=${fileId}`;

// Mapping of local file paths to Google Drive File IDs
// TODO: Fill in the File IDs from Google Drive
export const FILE_ID_MAP: Record<string, string> = {
  // Boys Bedroom
  '/images/projects/Boys Bedroom/BBR-01.jpg': '',
  '/images/projects/Boys Bedroom/BBR-02.jpg': '',
  '/images/projects/Boys Bedroom/BBR-03.jpg': '',
  '/images/projects/Boys Bedroom/BBR-04.jpg': '',
  '/images/projects/Boys Bedroom/BBR-05.jpg': '',
  '/images/projects/Boys Bedroom/BBR-06.jpg': '',
  '/images/projects/Boys Bedroom/BoysBedroom Video.mp4': '',
  
  // Girls Bedroom
  '/images/projects/Girls Bedroom/Girls Bedroom-01.jpg': '',
  '/images/projects/Girls Bedroom/Girls Bedroom-02.jpg': '',
  '/images/projects/Girls Bedroom/Girls Bedroom-03.jpg': '',
  '/images/projects/Girls Bedroom/Girls Bedroom-04.jpg': '',
  '/images/projects/Girls Bedroom/GBR.mp4': '',
  
  // Jewelry Store
  '/images/projects/Jewelry Store/Jewelry Store-01.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-02.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-03.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-04.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-05.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-06.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-07.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-08.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-09.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store-10.jpg': '',
  '/images/projects/Jewelry Store/Jewelry Store Video.mov': '',
  
  // LANO Cafe
  '/images/projects/LANO Cafe/LANO CAFE-01.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-02.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-04.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-05.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-06.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-07.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-08.jpg': '',
  '/images/projects/LANO Cafe/LANO CAFE-09.jpg': '',
  '/images/projects/LANO Cafe/Lano Cafe .mp4': '',
  
  // Master Bedroom
  '/images/projects/Master Bedroom/Bedroom-01.jpg': '',
  '/images/projects/Master Bedroom/Bedroom-02.jpg': '',
  '/images/projects/Master Bedroom/Bedroom-03.jpg': '',
  '/images/projects/Master Bedroom/Bedroom-04.jpg': '',
  '/images/projects/Master Bedroom/Bedroom-05.jpg': '',
  '/images/projects/Master Bedroom/Bedroom-06.jpg': '',
  '/images/projects/Master Bedroom/Master Bedroom.mp4': '',
  
  // Offices
  '/images/projects/Offices/Offices-Makkah-01.jpg': '',
  '/images/projects/Offices/Offices-Makkah-02.jpg': '',
  '/images/projects/Offices/Offices-Makkah-03.jpg': '',
  '/images/projects/Offices/Offices-Makkah-04.jpg': '',
  '/images/projects/Offices/Offices-Makkah-05.jpg': '',
  '/images/projects/Offices/Offices-Makkah-06.jpg': '',
  '/images/projects/Offices/Offices-Makkah-07.jpg': '',
  '/images/projects/Offices/Offices-Makkah-08.jpg': '',
  '/images/projects/Offices/Offices Video.mp4': '',
  
  // Studio
  '/images/projects/Studio/Studio-01.jpg': '',
  '/images/projects/Studio/Studio-02.jpg': '',
  '/images/projects/Studio/Studio-03.jpg': '',
  '/images/projects/Studio/Studio-04.jpg': '',
  '/images/projects/Studio/Studio-05.jpg': '',
  '/images/projects/Studio/Studio-06.jpg': '',
  '/images/projects/Studio/Studio-07.jpg': '',
  '/images/projects/Studio/Studio-08.jpg': '',
  '/images/projects/Studio/Studio-09.jpg': '',
  '/images/projects/Studio/Studio-10.jpg': '',
  '/images/projects/Studio/Studio-11.jpg': '',
  '/images/projects/Studio/STUDIO.mov': '',
};

/**
 * Convert local file path to Google Drive URL
 * If File ID is not found in mapping, returns the original path (fallback to local)
 */
export function getGoogleDriveUrl(localPath: string, isVideo: boolean = false): string {
  const fileId = FILE_ID_MAP[localPath];
  
  if (!fileId) {
    // Fallback to local path if File ID not found
    console.warn(`Google Drive File ID not found for: ${localPath}. Using local path.`);
    return localPath;
  }
  
  return isVideo 
    ? GOOGLE_DRIVE_VIDEO_URL(fileId)
    : GOOGLE_DRIVE_IMAGE_URL(fileId);
}

/**
 * Check if a path should use Google Drive (has File ID mapping)
 */
export function hasGoogleDriveMapping(path: string): boolean {
  return !!FILE_ID_MAP[path];
}
