# Deployment Guide for banadzemberinyny.com

## Step-by-Step Instructions for Bluehost

### 1. Access Your Bluehost File Manager

1. Log in to your Bluehost cPanel
2. Navigate to **File Manager** (under Files section)
3. Open the `public_html` folder (this is your website root)

### 2. Upload Your Files

**Option A: Using File Manager (Recommended for first-time setup)**

1. In File Manager, navigate to `public_html`
2. Delete any default files (like `index.html` if it exists, but keep `.htaccess` if present)
3. Upload all your project files:
   - `index.html` (must be in root)
   - `app.js` (must be in root)
   - `css/` folder (with all CSS files)
   - `img/` folder (with all images)
   - `.htaccess` file (upload this file - it's important!)

**Option B: Using FTP (Faster for updates)**

1. Use an FTP client like FileZilla
2. Connect to your Bluehost server:
   - Host: `ftp.banadzemberinyny.com` or your server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21
3. Navigate to `public_html` directory
4. Upload all files maintaining the folder structure

### 3. Verify File Structure

Your `public_html` folder should look like this:

```
public_html/
├── .htaccess
├── index.html
├── app.js
├── css/
│   ├── style.css
│   ├── icon-font.css
│   └── fonts/
│       └── (font files)
└── img/
    └── (all image files)
```

### 4. Set Correct File Permissions

In File Manager:
- Right-click on `index.html` → Change Permissions → Set to `644`
- Right-click on `app.js` → Change Permissions → Set to `644`
- Right-click on `.htaccess` → Change Permissions → Set to `644`
- Right-click on `css` folder → Change Permissions → Set to `755`
- Right-click on `img` folder → Change Permissions → Set to `755`

### 5. Check Domain Settings

1. In cPanel, go to **Domains**
2. Make sure `banadzemberinyny.com` is set as your primary domain
3. Verify it points to `public_html`

### 6. Clear Browser Cache

After uploading:
- Clear your browser cache (Ctrl+Shift+Delete)
- Or test in incognito/private mode
- Visit: `https://banadzemberinyny.com`

### 7. Troubleshooting Common Issues

#### Issue: Still getting 500 error

**Solution 1: Check .htaccess file**
- Make sure `.htaccess` is uploaded to `public_html` root
- Check file permissions (should be 644)
- Try renaming it to `.htaccess.txt` temporarily to see if site loads

**Solution 2: Check error logs**
- In cPanel, go to **Errors** section
- View the latest error log
- Look for specific error messages

**Solution 3: Verify file paths**
- Make sure all paths in `index.html` are relative (not absolute)
- Check that `css/style.css` exists
- Check that `img/` folder exists with all images

**Solution 4: Test with minimal setup**
- Temporarily rename `.htaccess` to `.htaccess.backup`
- Create a simple `test.html` with just "Hello World"
- If that works, the issue is with `.htaccess` configuration

#### Issue: Images not loading

- Check that `img/` folder is uploaded
- Verify image file names match exactly (case-sensitive on Linux servers)
- Check file permissions on images (should be 644)

#### Issue: CSS not loading

- Check that `css/` folder is uploaded
- Verify `css/style.css` exists
- Check browser console for 404 errors
- Make sure paths in HTML are correct: `href="css/style.css"`

#### Issue: JavaScript not working

- Check that `app.js` is in root directory
- Verify file is uploaded completely
- Check browser console for JavaScript errors

### 8. Enable SSL (HTTPS)

1. In cPanel, go to **SSL/TLS Status**
2. Install a free SSL certificate (Let's Encrypt)
3. Force HTTPS by uncommenting these lines in `.htaccess`:
   ```
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### 9. Test Your Website

Visit these URLs to test:
- `http://banadzemberinyny.com`
- `https://banadzemberinyny.com` (after SSL setup)
- `http://www.banadzemberinyny.com`
- `https://www.banadzemberinyny.com`

### 10. Contact Bluehost Support

If issues persist:
1. Contact Bluehost support via live chat
2. Provide them with:
   - Your domain name
   - The error message you're seeing
   - That you're hosting a static HTML site
   - Ask them to check server error logs

## Quick Checklist

- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file is in root directory
- [ ] File permissions set correctly (644 for files, 755 for folders)
- [ ] `index.html` is in root directory
- [ ] All folder names are lowercase (css, img)
- [ ] Domain points to correct directory
- [ ] Browser cache cleared
- [ ] Tested in incognito mode

## File Upload Order (Recommended)

1. Upload `.htaccess` first
2. Upload `index.html`
3. Upload `app.js`
4. Upload `css/` folder with all contents
5. Upload `img/` folder with all contents

## Need Help?

If you continue to experience issues:
1. Check Bluehost error logs in cPanel
2. Use browser developer tools (F12) to check for errors
3. Verify all file paths are correct
4. Contact Bluehost support with specific error messages
