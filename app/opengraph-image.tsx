import { ImageResponse } from 'next/og';

import { baseUrl } from './site';

export const runtime = 'edge';

export const alt = 'shan8851.com — shan. engineer. builder.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // NOTE: next/og is picky:
  // - keep the tree shallow + explicit
  // - any <div> with multiple children needs explicit display:flex/none
  const avatarUrl = `${baseUrl}/avatar.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#07090f',
          backgroundImage:
            'radial-gradient(900px 520px at 18% 35%, rgba(168, 85, 247, 0.28), rgba(0,0,0,0) 60%), radial-gradient(900px 520px at 78% 25%, rgba(34, 211, 238, 0.18), rgba(0,0,0,0) 58%), radial-gradient(900px 520px at 70% 88%, rgba(99, 102, 241, 0.16), rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 55%)',
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, rgba(0,0,0,0) 1px)',
            backgroundSize: '72px 72px',
            opacity: 0.10,
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            padding: '64px',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: '18px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backgroundColor: 'rgba(0,0,0,0.20)',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '18px',
                  letterSpacing: '0.04em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                shan8851.com
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  color: '#f5f7ff',
                  fontSize: '84px',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                shan.
              </div>

              <div
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '34px',
                  lineHeight: 1.15,
                  fontWeight: 650,
                  letterSpacing: '-0.01em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <span style={{ display: 'flex' }}>engineer.</span>
                <span style={{ display: 'flex', opacity: 0.8 }}>builder.</span>
              </div>

              <div
                style={{
                  color: 'rgba(255,255,255,0.62)',
                  fontSize: '26px',
                  lineHeight: 1.3,
                  fontWeight: 520,
                  maxWidth: '720px',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                Building payment rails and on-chain infrastructure.
              </div>
            </div>

            <div
              style={{
                marginTop: '22px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                stablecoins
              </div>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                infra
              </div>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                AI
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              width: '340px',
              height: '340px',
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.14)',
              backgroundColor: 'rgba(0,0,0,0.28)',
              boxShadow:
                '0 0 0 1px rgba(0,0,0,0.35) inset, 0 30px 80px rgba(0,0,0,0.55), 0 0 80px rgba(168, 85, 247, 0.20)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '999px',
                border: '2px solid rgba(255,255,255,0.16)',
                boxShadow:
                  '0 0 0 6px rgba(168,85,247,0.10), 0 0 55px rgba(34,211,238,0.14)',
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              <img
                src={avatarUrl}
                width={250}
                height={250}
                alt=""
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* Bottom-right micro text */}
          <div
            style={{
              position: 'absolute',
              right: '64px',
              bottom: '48px',
              color: 'rgba(255,255,255,0.40)',
              fontSize: '18px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
              display: 'flex',
            }}
          >
            senior full stack engineer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
