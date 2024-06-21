# SVG Images in Word

When inserting SVG images into a Microsoft Word document, you might need to make adjustments to ensure they display at the proper size. Here are some considerations and steps you can take:

1. **Set the ViewBox and Size in SVG**:
   Ensure your SVG has the appropriate `viewBox` and size attributes defined. This helps Word understand how to scale the SVG.

   ```xml
   <svg width="200" height="100" viewBox="0 0 200 100">
     <!-- Your SVG content -->
   </svg>
   ```

2. **Adjust Size in Word**:
   After inserting the SVG into the Word document, you can manually adjust its size:
   - Right-click on the SVG image.
   - Select "Size and Position" or use the resizing handles.
   - Set the desired width and height in the "Size" tab.

3. **Aspect Ratio**:
   If maintaining the aspect ratio is important, ensure that "Lock aspect ratio" is checked when resizing the image in Word.

4. **Scaling in the SVG Code**:
   If the SVG needs to be a specific size by default, set the width and height attributes directly in the SVG code. For example, if you need the SVG to be 3 inches wide and 2 inches tall:

   ```xml
   <svg width="3in" height="2in" viewBox="0 0 300 200">
     <!-- Your SVG content -->
   </svg>
   ```

5. **Use High-Resolution Settings**:
   Ensure that the SVG is high-resolution and appropriately scaled for print if the document will be printed. This can prevent any issues with blurry images.

6. **Compatibility Issues**:
   Be aware that not all features of SVG are fully supported by Word, so it's a good idea to check the appearance of the SVG in Word and adjust as necessary.

By following these steps, you can ensure that your SVG images are correctly sized and displayed in your Microsoft Word document.