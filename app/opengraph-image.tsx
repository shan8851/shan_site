import { ImageResponse } from 'next/og';

import { baseUrl } from './sitemap';

export const runtime = 'edge';

export const alt = 'shan8851.eth - Senior Full Stack Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // NOTE: next/og is picky:
  // - backgroundImage must be a valid image string (no inline "..., #000" combos)
  // - any <div> with multiple children needs explicit display:flex/none
  // - keep the tree shallow + explicit

  const avatarUrl = `${baseUrl}/avatar.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0c0c0c',
          backgroundImage:
            'radial-gradient(1200px 600px at 30% 20%, rgba(255, 85, 255, 0.18), rgba(0,0,0,0) 55%), repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.22) 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 3px)',
          padding: '40px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#161616',
            border: '1px solid #2a2a2a',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 20px',
              backgroundColor: '#0c0c0c',
              borderBottom: '1px solid #2a2a2a',
            }}
          >
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ff5555', display: 'flex' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffb000', display: 'flex' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#33ff33', display: 'flex' }} />
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: '#555555',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                }}
              >
                shan@web3:~
              </span>
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              padding: '44px',
              gap: '32px',
            }}
          >
            {/* Left */}
            <div
              style={{
                width: '220px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <img
                src={avatarUrl}
                width={180}
                height={180}
                style={{
                  borderRadius: '14px',
                  border: '2px solid rgba(255, 85, 255, 0.55)',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: '#555555', fontSize: '18px', fontFamily: 'monospace', display: 'flex' }}>
                  $ echo $INTERESTS
                </div>
                <div style={{ color: '#555555', fontSize: '18px', fontFamily: 'monospace', display: 'flex' }}>
                  [&quot;Payments&quot;, &quot;Stablecoins&quot;, &quot;Infrastructure&quot;, &quot;DeFi&quot;, &quot;AI&quot;]
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#33ff33', fontSize: '28px', fontFamily: 'monospace' }}>$</span>
                <span style={{ color: '#ffb000', fontSize: '28px', fontFamily: 'monospace' }}>whoami</span>
              </div>

              <div
                style={{
                  color: '#22bb22',
                  fontSize: '64px',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  marginLeft: '40px',
                  display: 'flex',
                  lineHeight: 1.05,
                }}
              >
                shan8851.eth
              </div>

              <div
                style={{
                  color: '#888888',
                  fontSize: '28px',
                  fontFamily: 'monospace',
                  marginLeft: '40px',
                  display: 'flex',
                  marginTop: '-10px',
                }}
              >
                Senior Full Stack Engineer
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
                <span style={{ color: '#33ff33', fontSize: '28px', fontFamily: 'monospace' }}>$</span>
                <span style={{ color: '#ffb000', fontSize: '28px', fontFamily: 'monospace' }}>cat</span>
                <span style={{ color: '#e0e0e0', fontSize: '28px', fontFamily: 'monospace' }}>mission.txt</span>
              </div>

              <div
                style={{
                  color: '#e0e0e0',
                  fontSize: '28px',
                  fontFamily: 'monospace',
                  marginLeft: '40px',
                  lineHeight: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ display: 'flex' }}>On a mission to bring all money on-chain.</div>
                <div style={{ display: 'flex' }}>
                  Building payments stuff at <span style={{ color: '#ff55ff', marginLeft: '10px' }}>Polygon</span>.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                <span style={{ color: '#33ff33', fontSize: '24px', fontFamily: 'monospace' }}>$</span>
                <span style={{ color: '#00ffff', fontSize: '24px', fontFamily: 'monospace' }}>shan8851.com</span>
              </div>
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
