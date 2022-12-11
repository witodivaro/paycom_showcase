type BaseImageProps = {
  src: string;
  alt?: string;
  title?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
  onClick?: () => void;
};

const BaseImage = ({
  src,
  alt = '',
  title = '',
  height = 'auto',
  width = 'auto',
  className = '',
  onClick = () => {},
}: BaseImageProps) => {
  // todo: implement BaseImage component

  return null
};

export default BaseImage;
