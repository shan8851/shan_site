import { createSocialImageResponse, socialImageAlt, socialImageSize } from './socialImage';

export const runtime = 'edge';
export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = 'image/png';

export default function Image() {
  return createSocialImageResponse();
}
