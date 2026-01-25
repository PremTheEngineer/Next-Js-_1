export const CLOUDINARY_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/"

export const getCloudinaryImageUrl = (
  imageId: string,
  options = "fl_lossy,f_auto,q_auto,w_660"
) => {
  if (!imageId) return ""
  return `${CLOUDINARY_BASE_URL}${options}/${imageId}`
}
