export const fileUpload = async (file) => {
  const clodUrl = "https://api.cloudinary.com/v1_1/dk626vli2/upload";

  const formData = new FormData();
  formData.append("upload_preset", "journal");
  formData.append("file", file);

  try {
    const response = await fetch(clodUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const cloudResponse = await response.json();
      return cloudResponse.secure_url;
    } else {
      throw await response.json();
    }
  } catch (error) {
    throw error;
  }

  // return;
};
