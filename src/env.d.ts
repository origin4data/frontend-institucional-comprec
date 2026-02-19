declare module '.png';
declare module '.jpg';
declare module '.jpeg';
declare module '.svg';
declare module '.gif';

// Esta é a linha mágica que vai parar de dar erro nas suas imagens do Figma!
declare module 'figma:' {
  const content: string;
  export default content;
}