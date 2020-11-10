// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = (data, id) => {
  const preview = document.getElementById(id);
  const file = data;
  const reader = new FileReader();
  console.log("previewFile", preview);
  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
};

export default previewFile;
