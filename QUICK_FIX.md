# Quick Fix for 500 Internal Server Error

## Immediate Steps to Fix the Error

### Step 1: Upload the .htaccess File

The 500 error is likely because the `.htaccess` file is missing or has incorrect syntax.

1. **Log into Bluehost cPanel**
2. **Open File Manager**
3. **Navigate to `public_html` folder**
4. **Upload the `.htaccess` file** to the root of `public_html`

**Important:** Make sure the file is named exactly `.htaccess` (with the dot at the beginning, no extension)

### Step 2: If .htaccess Causes Issues

If uploading `.htaccess` makes things worse:

1. **Rename the main .htaccess:**
   - In File Manager, rename `.htaccess` to `.htaccess.backup`
   
2. **Use the simple version:**
   - Upload `.htaccess.simple` and rename it to `.htaccess`

3. **Or delete .htaccess temporarily:**
   - Delete `.htaccess` completely
   - Your site should work (but without URL rewriting)

### Step 3: Verify File Structure

Make sure your `public_html` folder has this structure:

```
public_html/
├── .htaccess          ← MUST BE HERE
├── index.html         ← MUST BE HERE
├── app.js             ← MUST BE HERE
├── css/
│   ├── style.css
│   └── icon-font.css
└── img/
    └── (all images)
```

### Step 4: Check File Permissions

In Bluehost File Manager:

1. Right-click on `index.html` → **Change Permissions**
2. Set to: **644** (or check: Read, Write for Owner; Read for Group and Public)
3. Do the same for `app.js` and `.htaccess`
4. For folders (`css`, `img`): Set to **755**

### Step 5: Test with Simple HTML

1. Create a file called `test.html` in `public_html`
2. Put this content in it:
   ```html
   <!DOCTYPE html>
   <html>
   <head><title>Test</title></head>
   <body><h1>It Works!</h1></body>
   </html>
   ```
3. Visit: `https://banadzemberinyny.com/test.html`
4. If this works, the server is fine - the issue is with your main files

### Step 6: Check Error Logs

1. In cPanel, go to **Metrics** → **Errors**
2. Look for the most recent error
3. The error message will tell you exactly what's wrong

### Step 7: Common Issues and Fixes

#### Issue: "Internal Server Error" persists

**Fix:**
- Delete `.htaccess` temporarily
- If site loads, the issue is with `.htaccess` syntax
- Use `.htaccess.simple` instead

#### Issue: "File not found" or blank page

**Fix:**
- Make sure `index.html` is in `public_html` root (not in a subfolder)
- Check that file is named exactly `index.html` (lowercase, no spaces)

#### Issue: CSS/Images not loading

**Fix:**
- Check that `css/` and `img/` folders are uploaded
- Verify folder names are lowercase
- Check file permissions (folders should be 755)

#### Issue: JavaScript not working

**Fix:**
- Make sure `app.js` is in root directory
- Check browser console (F12) for errors
- Verify file uploaded completely

### Step 8: Contact Bluehost Support

If nothing works:

1. **Call Bluehost Support:** 1-888-401-4678
2. **Tell them:**
   - "I'm getting a 500 Internal Server Error"
   - "I'm hosting a static HTML website"
   - "The domain is banadzemberinyny.com"
   - "I've uploaded index.html to public_html"
3. **Ask them to:**
   - Check server error logs
   - Verify file permissions
   - Check if mod_rewrite is enabled
   - Verify domain is pointing to correct directory

### Step 9: Alternative - Use Subdomain for Testing

1. Create a subdomain in cPanel (e.g., `test.banadzemberinyny.com`)
2. Upload files to that subdomain's directory
3. Test if it works there
4. This helps isolate if it's a domain configuration issue

## File Upload Checklist

Before contacting support, verify:

- [ ] `.htaccess` is uploaded to `public_html` root
- [ ] `index.html` is in `public_html` root (not in a subfolder)
- [ ] File permissions are correct (644 for files, 755 for folders)
- [ ] All folder names are lowercase (`css`, `img`)
- [ ] No spaces or special characters in file/folder names
- [ ] `test.html` works (if you created it)
- [ ] Checked error logs in cPanel

## Still Not Working?

1. **Try accessing via IP:** Ask Bluehost support for your server IP
2. **Check DNS:** Make sure DNS is pointing to Bluehost
3. **Wait 24-48 hours:** DNS changes can take time to propagate
4. **Try different browser:** Clear cache or use incognito mode

## Success Indicators

You'll know it's working when:
- ✅ You can access `https://banadzemberinyny.com` without errors
- ✅ The homepage loads with all styles
- ✅ Images display correctly
- ✅ Navigation menu works
- ✅ No console errors (check F12)

---

**Need more help?** The full deployment guide is in `DEPLOYMENT.md`
