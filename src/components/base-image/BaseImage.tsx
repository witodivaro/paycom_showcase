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
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default BaseImage;
