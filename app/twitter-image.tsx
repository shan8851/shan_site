import { ImageResponse } from 'next/og';

import { baseUrl } from './sitemap';

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
            'radial-gradient(900px 520px at 22% 20%, rgba(34, 211, 238, 0.20), rgba(0,0,0,0) 60%), radial-gradient(900px 520px at 78% 35%, rgba(168, 85, 247, 0.26), rgba(0,0,0,0) 62%), radial-gradient(900px 520px at 40% 92%, rgba(99, 102, 241, 0.14), rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 55%)',
        }}
      >
        {/* Subtle grid (denser) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, rgba(0,0,0,0) 1px)',
            backgroundSize: '56px 56px',
            opacity: 0.09,
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
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '56px',
          }}
        >
          {/* Left: avatar + glow */}
          <div
            style={{
              width: '320px',
              height: '420px',
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.14)',
              backgroundColor: 'rgba(0,0,0,0.24)',
              boxShadow:
                '0 0 0 1px rgba(0,0,0,0.35) inset, 0 30px 80px rgba(0,0,0,0.55), 0 0 70px rgba(34,211,238,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-40px',
                backgroundImage:
                  'radial-gradient(240px 240px at 50% 35%, rgba(168,85,247,0.20), rgba(0,0,0,0) 65%), radial-gradient(240px 240px at 45% 70%, rgba(34,211,238,0.18), rgba(0,0,0,0) 62%)',
                opacity: 0.9,
                display: 'flex',
              }}
            />
            <div
              style={{
                width: '220px',
                height: '220px',
                borderRadius: '999px',
                border: '2px solid rgba(255,255,255,0.16)',
                boxShadow:
                  '0 0 0 6px rgba(34,211,238,0.10), 0 0 55px rgba(168, 85, 247, 0.14)',
                overflow: 'hidden',
                display: 'flex',
                position: 'relative',
              }}
            >
              <img
                src={avatarUrl}
                width={220}
                height={220}
                alt=""
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '26px',
                left: '26px',
                right: '26px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backgroundColor: 'rgba(0,0,0,0.25)',
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '18px',
                  letterSpacing: '0.06em',
                  fontFamily:
                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                  display: 'flex',
                }}
              >
                shan. engineer. builder.
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.14)',
                backgroundColor: 'rgba(0,0,0,0.20)',
                color: 'rgba(255,255,255,0.82)',
                fontSize: '18px',
                letterSpacing: '0.04em',
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
            >
              shan8851.com
            </div>

            <div
              style={{
                color: '#f5f7ff',
                fontSize: '78px',
                fontWeight: 850,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                display: 'flex',
              }}
            >
              shan8851.eth
            </div>

            <div
              style={{
                color: 'rgba(255,255,255,0.70)',
                fontSize: '28px',
                lineHeight: 1.25,
                fontWeight: 600,
                maxWidth: '640px',
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                display: 'flex',
              }}
            >
              On a mission to bring all money on-chain.
            </div>

            <div
              style={{
                marginTop: '18px',
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
                payments
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
            </div>

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
              dark • minimal • builder-ish
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
