const copyToClipboard = text => {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  var result = document.execCommand('copy');
  document.body.removeChild(textarea);
  return result;
};