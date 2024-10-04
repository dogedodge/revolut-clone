import jsSHA from 'jssha/sha256';

function sha256Encode(password: string) {
  const shaObj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
  shaObj.update(password);
  const hash = shaObj.getHash('HEX');
  return hash;

  // const encoder = new TextEncoder();
  // const data = encoder.encode(password);
  // const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  // const hashArray = Array.from(new Uint8Array(hashBuffer));
  // const hashHex = hashArray
  //   .map((b) => b.toString(16).padStart(2, '0'))
  //   .join('');
  // return hashHex;
}

export default sha256Encode;
