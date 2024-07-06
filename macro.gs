/** @OnlyCurrentDoc */
/**
 * Reduces the size of the last pasted image by half.
 */
function resizeLastPastedImage() {
    // Get the active spreadsheet and sheet.
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();
  
    // Get the last edited range (assuming it's the pasted image).
    var lastEditedRange = sheet.getLastEditedRange();
  
    // Check if the last edited range contains an image.
    if (lastEditedRange.getNumImages() > 0) {
      // Get the image.
      var image = lastEditedRange.getImage();
  
      // Get the current width and height of the image.
      var currentWidth = image.getWidth();
      var currentHeight = image.getHeight();
  
      // Calculate the new width and height (half the original size).
      var newWidth = currentWidth / 2;
      var newHeight = currentHeight / 2;
  
      // Resize the image.
      image.setWidth(newWidth).setHeight(newHeight);
    } else {
      // Display an error message if no image was found.
      Browser.msgBox('No image found in the last edited range.');
    }
    

function copycontent() {
  var spreadsheet = SpreadsheetApp.getActive().getActiveSheet();  
  var images = spreadsheet.getImages();
  var img = images[images.length - 1] // last image
  //var w = img.getImages()
  
  spreadsheet.getRange('C13').activate();
 // spreadsheet.getRange('C13').currentWidth SpreadsheetApp.CopyPasteType.PASTE_VALUES, false)
};}