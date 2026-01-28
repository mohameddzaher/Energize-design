# How to Get File IDs from Google Drive

## Steps:

1. Open the folder link: https://drive.google.com/drive/folders/1hN_kGIOfflaecQBpVnjANbBslmTlrGJf

2. For each file (image or video):
   - Right-click on the file
   - Select "Get link" or "Share"
   - Copy the link

3. Extract File ID from the link:
   - The link will be like: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
   - File ID is the long string between `/d/` and `/view`
   - Example: If the link is `https://drive.google.com/file/d/1ABC123xyz456DEF789/view?usp=sharing`
   - File ID is: `1ABC123xyz456DEF789`

4. Open `lib/googleDrive.ts` and add File ID in the appropriate place:
   ```typescript
   '/images/projects/Boys Bedroom/BBR-01.jpg': '1ABC123xyz456DEF789',
   ```

## Required Files:

### Boys Bedroom:
- BBR-01.jpg to BBR-06.jpg
- BoysBedroom Video.mp4

### Girls Bedroom:
- Girls Bedroom-01.jpg to Girls Bedroom-04.jpg
- GBR.mp4

### Jewelry Store:
- Jewelry Store-01.jpg to Jewelry Store-10.jpg
- Jewelry Store Video.mov

### LANO Cafe:
- LANO CAFE-01.jpg, LANO CAFE-02.jpg, LANO CAFE-04.jpg to LANO CAFE-09.jpg
- Lano Cafe .mp4

### Master Bedroom:
- Bedroom-01.jpg to Bedroom-06.jpg
- Master Bedroom.mp4

### Offices:
- Offices-Makkah-01.jpg to Offices-Makkah-08.jpg
- Offices Video.mp4

### Studio:
- Studio-01.jpg to Studio-11.jpg
- STUDIO.mov

## Notes:

- After adding File IDs, the site will automatically use Google Drive
- If File ID is not found, the site will use local files as fallback
- Make sure files in Google Drive are accessible to everyone (Anyone with the link can view)
