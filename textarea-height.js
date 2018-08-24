const ta = e.target
const taLineHeight = 20; // This should match the line-height in the CSS
const taHeight = ta.scrollHeight; // Get the scroll height of the textarea
ta.style.height = taHeight; // This line is optional, I included it so you can more easily count the lines in an expanded textarea
const numberOfLines = Math.floor(taHeight / taLineHeight);
alert(`there are ${numberOfLines} lines in the text area`);
const calculateContentHeight = function(ta, scanAmount) {
  let origHeight = ta.style.height,
    height = ta.offsetHeight,
    scrollHeight = ta.scrollHeight,
    overflow = ta.style.overflow;
  // / only bother if the ta is bigger than content
  if (height >= scrollHeight) {
    // / check that our browser supports changing dimension
    // / calculations mid-way through a function call...
    ta.style.height = `${height + scanAmount}px`;
    // / because the scrollbar can cause calculation problems
    ta.style.overflow = 'hidden';
    // / by checking that scrollHeight has updated
    if (scrollHeight < ta.scrollHeight) {
      // / now try and scan the ta's height downwards
      // / until scrollHeight becomes larger than height
      while (ta.offsetHeight >= ta.scrollHeight) {
        ta.style.height = `${(height -= scanAmount)}px`;
      }
      // / be more specific to get the exact height
      while (ta.offsetHeight < ta.scrollHeight) {
        ta.style.height = `${height++}px`;
      }
      // / reset the ta back to it's original height
      ta.style.height = origHeight;
      // / put the overflow back
      ta.style.overflow = overflow;
      return height;
    }
  } else {
    return scrollHeight;
  }
};