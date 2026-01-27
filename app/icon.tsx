import { ImageResponse } from 'next/og';
import Image from 'next/image';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://energize-design.com/images/logo.png"
          alt="Energize Design"
          width={32}
          height={32}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
