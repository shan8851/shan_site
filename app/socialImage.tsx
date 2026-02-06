import { ImageResponse } from 'next/og';

export const socialImageAlt = 'Shan — engineer. builder. payment + automation systems.';
export const socialImageSize = {
  width: 1200,
  height: 630,
};

const monoFontFamily =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const rootStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative' as const,
  backgroundColor: '#f8f8f5',
  color: '#0b0b0a',
};

const gradientStyle = {
  position: 'absolute' as const,
  inset: 0,
  display: 'flex',
  backgroundImage:
    'radial-gradient(1000px 420px at 85% -10%, rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0) 56%), linear-gradient(160deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0) 44%)',
};

const contentStyle = {
  position: 'relative' as const,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  padding: '84px',
  gap: '16px',
  fontFamily: monoFontFamily,
};

const nameStyle = {
  display: 'flex',
  fontSize: '154px',
  lineHeight: 1,
  letterSpacing: '-0.06em',
  fontWeight: 700,
};

const taglineStyle = {
  display: 'flex',
  fontSize: '56px',
  lineHeight: 1.06,
  letterSpacing: '-0.03em',
  fontWeight: 500,
};

const detailStyle = {
  display: 'flex',
  marginTop: '12px',
  fontSize: '30px',
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
  color: 'rgba(11, 11, 10, 0.76)',
};

const footerStyle = {
  display: 'flex',
  position: 'absolute' as const,
  bottom: '46px',
  right: '84px',
  fontSize: '20px',
  color: 'rgba(11, 11, 10, 0.56)',
  letterSpacing: '0.03em',
  fontFamily: monoFontFamily,
};

export const createSocialImageResponse = (): ImageResponse =>
  new ImageResponse(
    (
      <div style={rootStyle}>
        <div style={gradientStyle} />
        <div style={contentStyle}>
          <div style={nameStyle}>Shan</div>
          <div style={taglineStyle}>engineer. builder.</div>
          <div style={detailStyle}>payment + automation systems</div>
        </div>
        <div style={footerStyle}>shan8851.com</div>
      </div>
    ),
    socialImageSize,
  );
