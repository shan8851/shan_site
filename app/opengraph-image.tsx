import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'shan8851.eth - Senior Full Stack Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0c0c0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Terminal Window */}
        <div
          style={{
            background: '#161616',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Title Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 20px',
              background: '#0c0c0c',
              borderBottom: '1px solid #2a2a2a',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#ff5555',
              }}
            />
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#ffb000',
              }}
            />
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#33ff33',
              }}
            />
            <span
              style={{
                flex: 1,
                textAlign: 'center',
                color: '#555555',
                fontSize: '14px',
                fontFamily: 'monospace',
              }}
            >
              shan@web3:~
            </span>
          </div>

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '40px',
              gap: '24px',
              flex: 1,
            }}
          >
            {/* whoami */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#33ff33', fontSize: '28px', fontFamily: 'monospace' }}>$</span>
              <span style={{ color: '#ffb000', fontSize: '28px', fontFamily: 'monospace' }}>whoami</span>
            </div>

            {/* Name */}
            <div
              style={{
                color: '#22bb22',
                fontSize: '72px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                marginLeft: '40px',
              }}
            >
              shan8851.eth
            </div>

            {/* Title */}
            <div
              style={{
                color: '#888888',
                fontSize: '32px',
                fontFamily: 'monospace',
                marginLeft: '40px',
              }}
            >
              Senior Full Stack Engineer
            </div>

            {/* Mission */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '20px',
              }}
            >
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
              }}
            >
              On a mission to bring all money on-chain.
            </div>

            {/* Status */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: 'auto',
              }}
            >
              <span style={{ color: '#33ff33', fontSize: '24px', fontFamily: 'monospace' }}>$</span>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#33ff33',
                }}
              />
              <span style={{ color: '#33ff33', fontSize: '24px', fontFamily: 'monospace' }}>
                Payments on-chain @ Polygon
              </span>
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
