function getSize()
{
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + width + " â€¢ Height: " + height + "</h1>";
}