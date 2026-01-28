# كيفية الحصول على File IDs من Google Drive

## الخطوات:

1. افتح رابط المجلد: https://drive.google.com/drive/folders/1hN_kGIOfflaecQBpVnjANbBslmTlrGJf

2. لكل ملف (صورة أو فيديو):
   - اضغط كليك يمين على الملف
   - اختر "Get link" أو "Share"
   - انسخ الرابط

3. استخرج File ID من الرابط:
   - الرابط يكون مثل: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
   - File ID هو الجزء الطويل بين `/d/` و `/view`
   - مثال: إذا كان الرابط `https://drive.google.com/file/d/1ABC123xyz456DEF789/view?usp=sharing`
   - File ID هو: `1ABC123xyz456DEF789`

4. افتح ملف `lib/googleDrive.ts` وأضف File ID في المكان المناسب:
   ```typescript
   '/images/projects/Boys Bedroom/BBR-01.jpg': '1ABC123xyz456DEF789',
   ```

## الملفات المطلوبة:

### Boys Bedroom:
- BBR-01.jpg إلى BBR-06.jpg
- BoysBedroom Video.mp4

### Girls Bedroom:
- Girls Bedroom-01.jpg إلى Girls Bedroom-04.jpg
- GBR.mp4

### Jewelry Store:
- Jewelry Store-01.jpg إلى Jewelry Store-10.jpg
- Jewelry Store Video.mov

### LANO Cafe:
- LANO CAFE-01.jpg, LANO CAFE-02.jpg, LANO CAFE-04.jpg إلى LANO CAFE-09.jpg
- Lano Cafe .mp4

### Master Bedroom:
- Bedroom-01.jpg إلى Bedroom-06.jpg
- Master Bedroom.mp4

### Offices:
- Offices-Makkah-01.jpg إلى Offices-Makkah-08.jpg
- Offices Video.mp4

### Studio:
- Studio-01.jpg إلى Studio-11.jpg
- STUDIO.mov

## ملاحظات:

- بعد إضافة File IDs، سيستخدم الموقع Google Drive تلقائياً
- إذا لم تجد File ID، سيستخدم الموقع الملفات المحلية كـ fallback
- تأكد من أن الملفات في Google Drive متاحة للجميع (Anyone with the link can view)
