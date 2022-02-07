export interface Image {
  /**
   * The url where the image is found.
   */
  imageUrl: string;

  /**
   * The url where a compressed version of the image is found.
   */
  compressedImageUrl: string;

  /**
   * Description of the image.
   */
  alt?: string;

  category: string;

  /**
   * Unique identifier of the image.
   */
  _id: string;
}
